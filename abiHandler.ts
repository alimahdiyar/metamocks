import { decodeEthCall, encodeEthResult } from './abiUtils';
import { MetamocksContext } from '.';

export class AbiHandler {
  abi: any[] = [];

  methods: { [name: string]: (...args: any[]) => any } = {};

  constructor(abi: any) {
    if (abi) {
      this.abi = abi;
    }
  }

  async handleCall(context: MetamocksContext, data: string, setResult?: (arg0: string) => void) {
    const decoded = decodeEthCall(this.abi, data);
    if (decoded.method === 'multicall') {
      const [deadline, [data]] = decoded.inputs;
      await this.handleCall(context, data, setResult);
      return;
    }
    const method = this.methods[decoded.method];
    if (method) {
      const res = await method(context, decoded.inputs);
      setResult?.(encodeEthResult(this.abi, decoded.method, res));
    }
  }

  async handleTransaction(context: MetamocksContext, data: string, setResult: (arg0: string) => void) {
    await this.handleCall(context, data);
    setResult(context.getFakeTransactionHash());
  }
}

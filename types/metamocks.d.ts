import { BaseContract } from "@ethersproject/contracts";
import { Eip1193Bridge } from "@ethersproject/experimental";
import MetamocksContext from "./context";
import { TransactionStatus } from "./enums";
import { MockContractInterface } from "./types";
export default class MetaMocks extends Eip1193Bridge {
    context: MetamocksContext;
    eventListeners: {
        chainChanged: (chainId: string | number) => void;
        accountsChanged: (accounts: string[]) => void;
        close: (code: number, reason: string) => void;
        networkChanged: (networkId: string | number) => void;
    };
    transactionStatus: TransactionStatus;
    transactionWaitTime: number;
    constructor(signerWalletPrivateKey: string, chainId: number, rpcUrl?: string, supportedChainIds?: number[]);
    setTransactionStatus(status: TransactionStatus): void;
    setTransactionWaitTime(waitTime: number): void;
    on(eventName: string | symbol, listener: (...args: any[]) => void): this;
    switchEthereumChainSpy(chainId: string): void;
    addEthereumChainSpy(chainId: string): void;
    registerMockContract<T extends BaseContract>(address: string, handlerClass: new (...args: any) => MockContractInterface<T>): MockContractInterface<T>;
    sendAsync(...args: any[]): Promise<any>;
    getSendArgs(args: any[]): {
        isCallbackForm: boolean;
        callback: any;
        method: any;
        params: any;
    };
    transactionDataByHash: {
        [hash: string]: string;
    };
    send(...args: any[]): Promise<any>;
}

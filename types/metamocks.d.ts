import { Eip1193Bridge } from "@ethersproject/experimental";
import { ethers } from "ethers";
import AbiHandler from "./abihandler";
import { TransactionStatus } from "./enums";
import MetamocksContext from "./context";
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
    constructor(signer: ethers.Signer, chainId: number, supportedChainIds?: number[], provider?: ethers.providers.Provider);
    setTransactionStatus(status: TransactionStatus): void;
    setTransactionWaitTime(waitTime: number): void;
    on(eventName: string | symbol, listener: (...args: any[]) => void): this;
    switchEthereumChainSpy(chainId: string): void;
    addEthereumChainSpy(chainId: string): void;
    setHandler(address: string, handler: AbiHandler): void;
    sendAsync(...args: any[]): Promise<any>;
    getSendArgs(args: any[]): {
        isCallbackForm: boolean;
        callback: any;
        method: any;
        params: any;
    };
    send(...args: any[]): Promise<any>;
}
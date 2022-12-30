import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IQuoterV2, IQuoterV2Interface } from "../../../../../swap-router-contracts/artifacts/contracts/interfaces/IQuoterV2";
export declare class IQuoterV2__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): IQuoterV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IQuoterV2;
}
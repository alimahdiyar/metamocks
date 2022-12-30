import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IV2SwapRouter, IV2SwapRouterInterface } from "../../../../../swap-router-contracts/artifacts/contracts/interfaces/IV2SwapRouter";
export declare class IV2SwapRouter__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IV2SwapRouterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IV2SwapRouter;
}

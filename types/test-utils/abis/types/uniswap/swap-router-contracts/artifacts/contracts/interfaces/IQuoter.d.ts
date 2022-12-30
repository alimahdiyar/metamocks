import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IQuoterInterface extends utils.Interface {
    functions: {
        "quoteExactInput(bytes,uint256)": FunctionFragment;
        "quoteExactInputSingle(address,address,uint24,uint256,uint160)": FunctionFragment;
        "quoteExactOutput(bytes,uint256)": FunctionFragment;
        "quoteExactOutputSingle(address,address,uint24,uint256,uint160)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "quoteExactInput" | "quoteExactInputSingle" | "quoteExactOutput" | "quoteExactOutputSingle"): FunctionFragment;
    encodeFunctionData(functionFragment: "quoteExactInput", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteExactInputSingle", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteExactOutput", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "quoteExactOutputSingle", values: [string, string, BigNumberish, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "quoteExactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactInputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "quoteExactOutputSingle", data: BytesLike): Result;
    events: {};
}
export interface IQuoter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IQuoterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        quoteExactOutputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountOut: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    quoteExactOutputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountOut: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        quoteExactOutputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountOut: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        quoteExactOutputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountOut: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        quoteExactInput(path: BytesLike, amountIn: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactInputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountIn: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactOutput(path: BytesLike, amountOut: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        quoteExactOutputSingle(tokenIn: string, tokenOut: string, fee: BigNumberish, amountOut: BigNumberish, sqrtPriceLimitX96: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}

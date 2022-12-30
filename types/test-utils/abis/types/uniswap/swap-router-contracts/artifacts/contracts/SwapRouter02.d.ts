import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare namespace IV3SwapRouter {
    type ExactInputParamsStruct = {
        path: BytesLike;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
    };
    type ExactInputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
    };
    type ExactInputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactInputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        amountIn: BigNumber;
        amountOutMinimum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
    type ExactOutputParamsStruct = {
        path: BytesLike;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
    };
    type ExactOutputParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber
    ] & {
        path: string;
        recipient: string;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
    };
    type ExactOutputSingleParamsStruct = {
        tokenIn: string;
        tokenOut: string;
        fee: BigNumberish;
        recipient: string;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
        sqrtPriceLimitX96: BigNumberish;
    };
    type ExactOutputSingleParamsStructOutput = [
        string,
        string,
        number,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        tokenIn: string;
        tokenOut: string;
        fee: number;
        recipient: string;
        amountOut: BigNumber;
        amountInMaximum: BigNumber;
        sqrtPriceLimitX96: BigNumber;
    };
}
export declare namespace IApproveAndCall {
    type IncreaseLiquidityParamsStruct = {
        token0: string;
        token1: string;
        tokenId: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
    };
    type IncreaseLiquidityParamsStructOutput = [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        token0: string;
        token1: string;
        tokenId: BigNumber;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
    };
    type MintParamsStruct = {
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
    };
    type MintParamsStructOutput = [
        string,
        string,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        string
    ] & {
        token0: string;
        token1: string;
        fee: number;
        tickLower: number;
        tickUpper: number;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
        recipient: string;
    };
}
export interface SwapRouter02Interface extends utils.Interface {
    functions: {
        "WETH9()": FunctionFragment;
        "approveMax(address)": FunctionFragment;
        "approveMaxMinusOne(address)": FunctionFragment;
        "approveZeroThenMax(address)": FunctionFragment;
        "approveZeroThenMaxMinusOne(address)": FunctionFragment;
        "callPositionManager(bytes)": FunctionFragment;
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)": FunctionFragment;
        "checkOracleSlippage(bytes,uint24,uint32)": FunctionFragment;
        "exactInput((bytes,address,uint256,uint256))": FunctionFragment;
        "exactInputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
        "exactOutput((bytes,address,uint256,uint256))": FunctionFragment;
        "exactOutputSingle((address,address,uint24,address,uint256,uint256,uint160))": FunctionFragment;
        "factory()": FunctionFragment;
        "factoryV2()": FunctionFragment;
        "getApprovalType(address,uint256)": FunctionFragment;
        "increaseLiquidity((address,address,uint256,uint256,uint256))": FunctionFragment;
        "mint((address,address,uint24,int24,int24,uint256,uint256,address))": FunctionFragment;
        "multicall(bytes32,bytes[])": FunctionFragment;
        "multicall(uint256,bytes[])": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "positionManager()": FunctionFragment;
        "pull(address,uint256)": FunctionFragment;
        "refundETH()": FunctionFragment;
        "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "swapExactTokensForTokens(uint256,uint256,address[],address)": FunctionFragment;
        "swapTokensForExactTokens(uint256,uint256,address[],address)": FunctionFragment;
        "sweepToken(address,uint256,address)": FunctionFragment;
        "sweepToken(address,uint256)": FunctionFragment;
        "sweepTokenWithFee(address,uint256,uint256,address)": FunctionFragment;
        "sweepTokenWithFee(address,uint256,address,uint256,address)": FunctionFragment;
        "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
        "unwrapWETH9(uint256,address)": FunctionFragment;
        "unwrapWETH9(uint256)": FunctionFragment;
        "unwrapWETH9WithFee(uint256,address,uint256,address)": FunctionFragment;
        "unwrapWETH9WithFee(uint256,uint256,address)": FunctionFragment;
        "wrapETH(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "WETH9" | "approveMax" | "approveMaxMinusOne" | "approveZeroThenMax" | "approveZeroThenMaxMinusOne" | "callPositionManager" | "checkOracleSlippage(bytes[],uint128[],uint24,uint32)" | "checkOracleSlippage(bytes,uint24,uint32)" | "exactInput" | "exactInputSingle" | "exactOutput" | "exactOutputSingle" | "factory" | "factoryV2" | "getApprovalType" | "increaseLiquidity" | "mint" | "multicall(bytes32,bytes[])" | "multicall(uint256,bytes[])" | "multicall(bytes[])" | "positionManager" | "pull" | "refundETH" | "selfPermit" | "selfPermitAllowed" | "selfPermitAllowedIfNecessary" | "selfPermitIfNecessary" | "swapExactTokensForTokens" | "swapTokensForExactTokens" | "sweepToken(address,uint256,address)" | "sweepToken(address,uint256)" | "sweepTokenWithFee(address,uint256,uint256,address)" | "sweepTokenWithFee(address,uint256,address,uint256,address)" | "uniswapV3SwapCallback" | "unwrapWETH9(uint256,address)" | "unwrapWETH9(uint256)" | "unwrapWETH9WithFee(uint256,address,uint256,address)" | "unwrapWETH9WithFee(uint256,uint256,address)" | "wrapETH"): FunctionFragment;
    encodeFunctionData(functionFragment: "WETH9", values?: undefined): string;
    encodeFunctionData(functionFragment: "approveMax", values: [string]): string;
    encodeFunctionData(functionFragment: "approveMaxMinusOne", values: [string]): string;
    encodeFunctionData(functionFragment: "approveZeroThenMax", values: [string]): string;
    encodeFunctionData(functionFragment: "approveZeroThenMaxMinusOne", values: [string]): string;
    encodeFunctionData(functionFragment: "callPositionManager", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "checkOracleSlippage(bytes[],uint128[],uint24,uint32)", values: [BytesLike[], BigNumberish[], BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkOracleSlippage(bytes,uint24,uint32)", values: [BytesLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exactInput", values: [IV3SwapRouter.ExactInputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactInputSingle", values: [IV3SwapRouter.ExactInputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutput", values: [IV3SwapRouter.ExactOutputParamsStruct]): string;
    encodeFunctionData(functionFragment: "exactOutputSingle", values: [IV3SwapRouter.ExactOutputSingleParamsStruct]): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "factoryV2", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApprovalType", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseLiquidity", values: [IApproveAndCall.IncreaseLiquidityParamsStruct]): string;
    encodeFunctionData(functionFragment: "mint", values: [IApproveAndCall.MintParamsStruct]): string;
    encodeFunctionData(functionFragment: "multicall(bytes32,bytes[])", values: [BytesLike, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "multicall(uint256,bytes[])", values: [BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "multicall(bytes[])", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "positionManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "pull", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "refundETH", values?: undefined): string;
    encodeFunctionData(functionFragment: "selfPermit", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "selfPermitAllowed", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "selfPermitAllowedIfNecessary", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "selfPermitIfNecessary", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "swapExactTokensForTokens", values: [BigNumberish, BigNumberish, string[], string]): string;
    encodeFunctionData(functionFragment: "swapTokensForExactTokens", values: [BigNumberish, BigNumberish, string[], string]): string;
    encodeFunctionData(functionFragment: "sweepToken(address,uint256,address)", values: [string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sweepToken(address,uint256)", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "sweepTokenWithFee(address,uint256,uint256,address)", values: [string, BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "sweepTokenWithFee(address,uint256,address,uint256,address)", values: [string, BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "uniswapV3SwapCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9(uint256,address)", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9WithFee(uint256,address,uint256,address)", values: [BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "unwrapWETH9WithFee(uint256,uint256,address)", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "wrapETH", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "WETH9", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveMaxMinusOne", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveZeroThenMax", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveZeroThenMaxMinusOne", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callPositionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkOracleSlippage(bytes[],uint128[],uint24,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkOracleSlippage(bytes,uint24,uint32)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactInputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutput", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exactOutputSingle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factoryV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApprovalType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall(bytes32,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall(uint256,bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall(bytes[])", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "refundETH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitAllowedIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapExactTokensForTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swapTokensForExactTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken(address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepToken(address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepTokenWithFee(address,uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sweepTokenWithFee(address,uint256,address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapV3SwapCallback", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9(uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9WithFee(uint256,address,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unwrapWETH9WithFee(uint256,uint256,address)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wrapETH", data: BytesLike): Result;
    events: {};
}
export interface SwapRouter02 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SwapRouter02Interface;
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
        WETH9(overrides?: CallOverrides): Promise<[string]>;
        approveMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveZeroThenMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveZeroThenMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        callPositionManager(data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        factory(overrides?: CallOverrides): Promise<[string]>;
        factoryV2(overrides?: CallOverrides): Promise<[string]>;
        getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "multicall(bytes[])"(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        positionManager(overrides?: CallOverrides): Promise<[string]>;
        pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        wrapETH(value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    WETH9(overrides?: CallOverrides): Promise<string>;
    approveMax(token: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveMaxMinusOne(token: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveZeroThenMax(token: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveZeroThenMaxMinusOne(token: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callPositionManager(data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
    "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
    exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    factory(overrides?: CallOverrides): Promise<string>;
    factoryV2(overrides?: CallOverrides): Promise<string>;
    getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "multicall(bytes[])"(data: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    positionManager(overrides?: CallOverrides): Promise<string>;
    pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    refundETH(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    wrapETH(value: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        WETH9(overrides?: CallOverrides): Promise<string>;
        approveMax(token: string, overrides?: CallOverrides): Promise<void>;
        approveMaxMinusOne(token: string, overrides?: CallOverrides): Promise<void>;
        approveZeroThenMax(token: string, overrides?: CallOverrides): Promise<void>;
        approveZeroThenMaxMinusOne(token: string, overrides?: CallOverrides): Promise<void>;
        callPositionManager(data: BytesLike, overrides?: CallOverrides): Promise<string>;
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<string>;
        factoryV2(overrides?: CallOverrides): Promise<string>;
        getApprovalType(token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<number>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: CallOverrides): Promise<string>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: CallOverrides): Promise<string>;
        "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        "multicall(bytes[])"(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        positionManager(overrides?: CallOverrides): Promise<string>;
        pull(token: string, value: BigNumberish, overrides?: CallOverrides): Promise<void>;
        refundETH(overrides?: CallOverrides): Promise<void>;
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: CallOverrides): Promise<BigNumber>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: CallOverrides): Promise<BigNumber>;
        "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: CallOverrides): Promise<void>;
        wrapETH(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        WETH9(overrides?: CallOverrides): Promise<BigNumber>;
        approveMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveZeroThenMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveZeroThenMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        callPositionManager(data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        factoryV2(overrides?: CallOverrides): Promise<BigNumber>;
        getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "multicall(bytes[])"(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        positionManager(overrides?: CallOverrides): Promise<BigNumber>;
        pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        wrapETH(value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        WETH9(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approveMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveZeroThenMax(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveZeroThenMaxMinusOne(token: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        callPositionManager(data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "checkOracleSlippage(bytes[],uint128[],uint24,uint32)"(paths: BytesLike[], amounts: BigNumberish[], maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "checkOracleSlippage(bytes,uint24,uint32)"(path: BytesLike, maximumTickDivergence: BigNumberish, secondsAgo: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exactInput(params: IV3SwapRouter.ExactInputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exactInputSingle(params: IV3SwapRouter.ExactInputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exactOutput(params: IV3SwapRouter.ExactOutputParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exactOutputSingle(params: IV3SwapRouter.ExactOutputSingleParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApprovalType(token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseLiquidity(params: IApproveAndCall.IncreaseLiquidityParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mint(params: IApproveAndCall.MintParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "multicall(bytes32,bytes[])"(previousBlockhash: BytesLike, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "multicall(uint256,bytes[])"(deadline: BigNumberish, data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "multicall(bytes[])"(data: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pull(token: string, value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        refundETH(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapExactTokensForTokens(amountIn: BigNumberish, amountOutMin: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        swapTokensForExactTokens(amountOut: BigNumberish, amountInMax: BigNumberish, path: string[], to: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "sweepToken(address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "sweepToken(address,uint256)"(token: string, amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "sweepTokenWithFee(address,uint256,uint256,address)"(token: string, amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "sweepTokenWithFee(address,uint256,address,uint256,address)"(token: string, amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniswapV3SwapCallback(amount0Delta: BigNumberish, amount1Delta: BigNumberish, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unwrapWETH9(uint256,address)"(amountMinimum: BigNumberish, recipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unwrapWETH9(uint256)"(amountMinimum: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unwrapWETH9WithFee(uint256,address,uint256,address)"(amountMinimum: BigNumberish, recipient: string, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "unwrapWETH9WithFee(uint256,uint256,address)"(amountMinimum: BigNumberish, feeBips: BigNumberish, feeRecipient: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        wrapETH(value: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}

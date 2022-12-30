import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface IUniswapV3PoolImmutablesInterface extends utils.Interface {
    functions: {
        "factory()": FunctionFragment;
        "fee()": FunctionFragment;
        "maxLiquidityPerTick()": FunctionFragment;
        "tickSpacing()": FunctionFragment;
        "token0()": FunctionFragment;
        "token1()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "factory" | "fee" | "maxLiquidityPerTick" | "tickSpacing" | "token0" | "token1"): FunctionFragment;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxLiquidityPerTick", values?: undefined): string;
    encodeFunctionData(functionFragment: "tickSpacing", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLiquidityPerTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tickSpacing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
    events: {};
}
export interface IUniswapV3PoolImmutables extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV3PoolImmutablesInterface;
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
        factory(overrides?: CallOverrides): Promise<[string]>;
        fee(overrides?: CallOverrides): Promise<[number]>;
        maxLiquidityPerTick(overrides?: CallOverrides): Promise<[BigNumber]>;
        tickSpacing(overrides?: CallOverrides): Promise<[number]>;
        token0(overrides?: CallOverrides): Promise<[string]>;
        token1(overrides?: CallOverrides): Promise<[string]>;
    };
    factory(overrides?: CallOverrides): Promise<string>;
    fee(overrides?: CallOverrides): Promise<number>;
    maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;
    tickSpacing(overrides?: CallOverrides): Promise<number>;
    token0(overrides?: CallOverrides): Promise<string>;
    token1(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        factory(overrides?: CallOverrides): Promise<string>;
        fee(overrides?: CallOverrides): Promise<number>;
        maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;
        tickSpacing(overrides?: CallOverrides): Promise<number>;
        token0(overrides?: CallOverrides): Promise<string>;
        token1(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        maxLiquidityPerTick(overrides?: CallOverrides): Promise<BigNumber>;
        tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;
        token0(overrides?: CallOverrides): Promise<BigNumber>;
        token1(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxLiquidityPerTick(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

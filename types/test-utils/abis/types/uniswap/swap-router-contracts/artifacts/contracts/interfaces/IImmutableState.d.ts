import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IImmutableStateInterface extends utils.Interface {
    functions: {
        "factoryV2()": FunctionFragment;
        "positionManager()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "factoryV2" | "positionManager"): FunctionFragment;
    encodeFunctionData(functionFragment: "factoryV2", values?: undefined): string;
    encodeFunctionData(functionFragment: "positionManager", values?: undefined): string;
    decodeFunctionResult(functionFragment: "factoryV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "positionManager", data: BytesLike): Result;
    events: {};
}
export interface IImmutableState extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IImmutableStateInterface;
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
        factoryV2(overrides?: CallOverrides): Promise<[string]>;
        positionManager(overrides?: CallOverrides): Promise<[string]>;
    };
    factoryV2(overrides?: CallOverrides): Promise<string>;
    positionManager(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        factoryV2(overrides?: CallOverrides): Promise<string>;
        positionManager(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        factoryV2(overrides?: CallOverrides): Promise<BigNumber>;
        positionManager(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        factoryV2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        positionManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

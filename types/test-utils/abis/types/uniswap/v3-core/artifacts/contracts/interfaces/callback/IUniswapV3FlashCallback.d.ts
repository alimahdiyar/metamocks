import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../../common";
export interface IUniswapV3FlashCallbackInterface extends utils.Interface {
    functions: {
        "uniswapV3FlashCallback(uint256,uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "uniswapV3FlashCallback"): FunctionFragment;
    encodeFunctionData(functionFragment: "uniswapV3FlashCallback", values: [BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "uniswapV3FlashCallback", data: BytesLike): Result;
    events: {};
}
export interface IUniswapV3FlashCallback extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUniswapV3FlashCallbackInterface;
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
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        uniswapV3FlashCallback(fee0: BigNumberish, fee1: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}

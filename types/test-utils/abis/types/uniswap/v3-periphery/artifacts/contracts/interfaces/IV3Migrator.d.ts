import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace IV3Migrator {
    type MigrateParamsStruct = {
        pair: string;
        liquidityToMigrate: BigNumberish;
        percentageToMigrate: BigNumberish;
        token0: string;
        token1: string;
        fee: BigNumberish;
        tickLower: BigNumberish;
        tickUpper: BigNumberish;
        amount0Min: BigNumberish;
        amount1Min: BigNumberish;
        recipient: string;
        deadline: BigNumberish;
        refundAsETH: boolean;
    };
    type MigrateParamsStructOutput = [
        string,
        BigNumber,
        number,
        string,
        string,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        boolean
    ] & {
        pair: string;
        liquidityToMigrate: BigNumber;
        percentageToMigrate: number;
        token0: string;
        token1: string;
        fee: number;
        tickLower: number;
        tickUpper: number;
        amount0Min: BigNumber;
        amount1Min: BigNumber;
        recipient: string;
        deadline: BigNumber;
        refundAsETH: boolean;
    };
}
export interface IV3MigratorInterface extends utils.Interface {
    functions: {
        "createAndInitializePoolIfNecessary(address,address,uint24,uint160)": FunctionFragment;
        "migrate((address,uint256,uint8,address,address,uint24,int24,int24,uint256,uint256,address,uint256,bool))": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "selfPermit(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitAllowed(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitAllowedIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "selfPermitIfNecessary(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createAndInitializePoolIfNecessary" | "migrate" | "multicall" | "selfPermit" | "selfPermitAllowed" | "selfPermitAllowedIfNecessary" | "selfPermitIfNecessary"): FunctionFragment;
    encodeFunctionData(functionFragment: "createAndInitializePoolIfNecessary", values: [string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "migrate", values: [IV3Migrator.MigrateParamsStruct]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
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
    decodeFunctionResult(functionFragment: "createAndInitializePoolIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitAllowedIfNecessary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "selfPermitIfNecessary", data: BytesLike): Result;
    events: {};
}
export interface IV3Migrator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IV3MigratorInterface;
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
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        migrate(params: IV3Migrator.MigrateParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
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
    };
    createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    migrate(params: IV3Migrator.MigrateParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multicall(data: BytesLike[], overrides?: PayableOverrides & {
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
    callStatic: {
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: CallOverrides): Promise<string>;
        migrate(params: IV3Migrator.MigrateParamsStruct, overrides?: CallOverrides): Promise<void>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        selfPermit(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitAllowed(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitAllowedIfNecessary(token: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        selfPermitIfNecessary(token: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        migrate(params: IV3Migrator.MigrateParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
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
    };
    populateTransaction: {
        createAndInitializePoolIfNecessary(token0: string, token1: string, fee: BigNumberish, sqrtPriceX96: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        migrate(params: IV3Migrator.MigrateParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: PayableOverrides & {
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
    };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface TokenIdGeneratorInterface extends utils.Interface {
  functions: {
    "ADDRESS_BIT()": FunctionFragment;
    "FEE_BIT()": FunctionFragment;
    "FEE_MAX()": FunctionFragment;
    "INDEX_BIT()": FunctionFragment;
    "INDEX_MAX()": FunctionFragment;
    "SUPPLY_BIT()": FunctionFragment;
    "SUPPLY_MAX()": FunctionFragment;
    "TYPE_BIT()": FunctionFragment;
    "TYPE_MAX()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADDRESS_BIT"
      | "FEE_BIT"
      | "FEE_MAX"
      | "INDEX_BIT"
      | "INDEX_MAX"
      | "SUPPLY_BIT"
      | "SUPPLY_MAX"
      | "TYPE_BIT"
      | "TYPE_MAX"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADDRESS_BIT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "FEE_BIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "FEE_MAX", values?: undefined): string;
  encodeFunctionData(functionFragment: "INDEX_BIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "INDEX_MAX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SUPPLY_BIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SUPPLY_MAX",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TYPE_BIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "TYPE_MAX", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "ADDRESS_BIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "FEE_BIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "FEE_MAX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INDEX_BIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "INDEX_MAX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SUPPLY_BIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SUPPLY_MAX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TYPE_BIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TYPE_MAX", data: BytesLike): Result;

  events: {};
}

export interface TokenIdGenerator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenIdGeneratorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ADDRESS_BIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    FEE_BIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    FEE_MAX(overrides?: CallOverrides): Promise<[BigNumber]>;

    INDEX_BIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    INDEX_MAX(overrides?: CallOverrides): Promise<[BigNumber]>;

    SUPPLY_BIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    SUPPLY_MAX(overrides?: CallOverrides): Promise<[BigNumber]>;

    TYPE_BIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    TYPE_MAX(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  ADDRESS_BIT(overrides?: CallOverrides): Promise<BigNumber>;

  FEE_BIT(overrides?: CallOverrides): Promise<BigNumber>;

  FEE_MAX(overrides?: CallOverrides): Promise<BigNumber>;

  INDEX_BIT(overrides?: CallOverrides): Promise<BigNumber>;

  INDEX_MAX(overrides?: CallOverrides): Promise<BigNumber>;

  SUPPLY_BIT(overrides?: CallOverrides): Promise<BigNumber>;

  SUPPLY_MAX(overrides?: CallOverrides): Promise<BigNumber>;

  TYPE_BIT(overrides?: CallOverrides): Promise<BigNumber>;

  TYPE_MAX(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ADDRESS_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    INDEX_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    INDEX_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    SUPPLY_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    SUPPLY_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    TYPE_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    TYPE_MAX(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ADDRESS_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    FEE_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    INDEX_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    INDEX_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    SUPPLY_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    SUPPLY_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    TYPE_BIT(overrides?: CallOverrides): Promise<BigNumber>;

    TYPE_MAX(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESS_BIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEE_BIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FEE_MAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INDEX_BIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    INDEX_MAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SUPPLY_BIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SUPPLY_MAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TYPE_BIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TYPE_MAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

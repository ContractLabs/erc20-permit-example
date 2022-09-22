/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface TokenFreezableInterface extends utils.Interface {
  functions: {
    "freezeBaseURI()": FunctionFragment;
    "freezeToken(uint256)": FunctionFragment;
    "frozenTokens(uint256)": FunctionFragment;
    "isFrozenBase()": FunctionFragment;
    "setBaseURI(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "freezeBaseURI"
      | "freezeToken"
      | "frozenTokens"
      | "isFrozenBase"
      | "setBaseURI"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "freezeBaseURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "freezeToken",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "frozenTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isFrozenBase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBaseURI",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "freezeBaseURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freezeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "frozenTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isFrozenBase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBaseURI", data: BytesLike): Result;

  events: {
    "PermanentURI(uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PermanentURI"): EventFragment;
}

export interface PermanentURIEventObject {
  tokenId_: BigNumber;
  tokenURI_: string;
}
export type PermanentURIEvent = TypedEvent<
  [BigNumber, string],
  PermanentURIEventObject
>;

export type PermanentURIEventFilter = TypedEventFilter<PermanentURIEvent>;

export interface TokenFreezable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TokenFreezableInterface;

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
    freezeBaseURI(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    freezeToken(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    frozenTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isFrozenBase(overrides?: CallOverrides): Promise<[boolean]>;

    setBaseURI(
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  freezeBaseURI(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  freezeToken(
    tokenId_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  frozenTokens(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isFrozenBase(overrides?: CallOverrides): Promise<boolean>;

  setBaseURI(
    baseURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    freezeBaseURI(overrides?: CallOverrides): Promise<void>;

    freezeToken(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    frozenTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isFrozenBase(overrides?: CallOverrides): Promise<boolean>;

    setBaseURI(
      baseURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PermanentURI(uint256,string)"(
      tokenId_?: PromiseOrValue<BigNumberish> | null,
      tokenURI_?: null
    ): PermanentURIEventFilter;
    PermanentURI(
      tokenId_?: PromiseOrValue<BigNumberish> | null,
      tokenURI_?: null
    ): PermanentURIEventFilter;
  };

  estimateGas: {
    freezeBaseURI(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    freezeToken(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    frozenTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFrozenBase(overrides?: CallOverrides): Promise<BigNumber>;

    setBaseURI(
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    freezeBaseURI(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    freezeToken(
      tokenId_: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    frozenTokens(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFrozenBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setBaseURI(
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

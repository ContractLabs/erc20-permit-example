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

export interface INFTFactoryInterface extends utils.Interface {
  functions: {
    "deployCollectible(address,string,string,string)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "deployCollectible"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deployCollectible",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployCollectible",
    data: BytesLike
  ): Result;

  events: {
    "TokenDeployed(string,string,string,uint256,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TokenDeployed"): EventFragment;
}

export interface TokenDeployedEventObject {
  name_: string;
  symbol_: string;
  baseURI_: string;
  standard_: BigNumber;
  deployer_: string;
  deployedAddr_: string;
}
export type TokenDeployedEvent = TypedEvent<
  [string, string, string, BigNumber, string, string],
  TokenDeployedEventObject
>;

export type TokenDeployedEventFilter = TypedEventFilter<TokenDeployedEvent>;

export interface INFTFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INFTFactoryInterface;

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
    deployCollectible(
      implement_: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      symbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deployCollectible(
    implement_: PromiseOrValue<string>,
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    baseURI_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployCollectible(
      implement_: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      symbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "TokenDeployed(string,string,string,uint256,address,address)"(
      name_?: null,
      symbol_?: null,
      baseURI_?: null,
      standard_?: PromiseOrValue<BigNumberish> | null,
      deployer_?: PromiseOrValue<string> | null,
      deployedAddr_?: PromiseOrValue<string> | null
    ): TokenDeployedEventFilter;
    TokenDeployed(
      name_?: null,
      symbol_?: null,
      baseURI_?: null,
      standard_?: PromiseOrValue<BigNumberish> | null,
      deployer_?: PromiseOrValue<string> | null,
      deployedAddr_?: PromiseOrValue<string> | null
    ): TokenDeployedEventFilter;
  };

  estimateGas: {
    deployCollectible(
      implement_: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      symbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployCollectible(
      implement_: PromiseOrValue<string>,
      name_: PromiseOrValue<string>,
      symbol_: PromiseOrValue<string>,
      baseURI_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ReceiptUtil,
  ReceiptUtilInterface,
} from "../../../contracts/libraries/ReceiptUtil";

const _abi = [
  {
    inputs: [],
    name: "RU__Expired",
    type: "error",
  },
  {
    inputs: [],
    name: "RU__InsufficientPayment",
    type: "error",
  },
  {
    inputs: [],
    name: "RU__InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "RU__PaymentUnsuported",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f144dd1d85367ab90b920b03e343b024718501f1dbab370f5d6fa48dca6b72b264736f6c634300080f0033";

type ReceiptUtilConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiptUtilConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ReceiptUtil__factory extends ContractFactory {
  constructor(...args: ReceiptUtilConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ReceiptUtil> {
    return super.deploy(overrides || {}) as Promise<ReceiptUtil>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ReceiptUtil {
    return super.attach(address) as ReceiptUtil;
  }
  override connect(signer: Signer): ReceiptUtil__factory {
    return super.connect(signer) as ReceiptUtil__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiptUtilInterface {
    return new utils.Interface(_abi) as ReceiptUtilInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReceiptUtil {
    return new Contract(address, _abi, signerOrProvider) as ReceiptUtil;
  }
}
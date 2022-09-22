/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGovernance,
  IGovernanceInterface,
} from "../../../contracts/interfaces/IGovernance";

const _abi = [
  {
    inputs: [],
    name: "Governance__InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "Governance__UnregisteredToken",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "registed",
        type: "bool",
      },
    ],
    name: "PaymentUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to_",
        type: "address",
      },
    ],
    name: "TreasuryUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
    ],
    name: "acceptedPayments",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketplace",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGovernance__factory {
  static readonly abi = _abi;
  static createInterface(): IGovernanceInterface {
    return new utils.Interface(_abi) as IGovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGovernance {
    return new Contract(address, _abi, signerOrProvider) as IGovernance;
  }
}
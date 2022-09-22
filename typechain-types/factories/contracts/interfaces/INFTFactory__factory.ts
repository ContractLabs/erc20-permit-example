/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INFTFactory,
  INFTFactoryInterface,
} from "../../../contracts/interfaces/INFTFactory";

const _abi = [
  {
    inputs: [],
    name: "Factory__ExecutionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "Factory__InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "Factory__Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "standard_",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "deployer_",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "deployedAddr_",
        type: "address",
      },
    ],
    name: "TokenDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implement_",
        type: "address",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "deployCollectible",
    outputs: [
      {
        internalType: "address",
        name: "clone",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class INFTFactory__factory {
  static readonly abi = _abi;
  static createInterface(): INFTFactoryInterface {
    return new utils.Interface(_abi) as INFTFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INFTFactory {
    return new Contract(address, _abi, signerOrProvider) as INFTFactory;
  }
}
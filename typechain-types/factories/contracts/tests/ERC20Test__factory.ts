/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20Test,
  ERC20TestInterface,
} from "../../../contracts/tests/ERC20Test";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162001473380380620014738339810160408190526200003591620001db565b6040805180820190915260018152603160f81b60208201528290819081846003620000618382620002d4565b506004620000708282620002d4565b5050825160208085019190912083518483012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c0019052805194019390932091935091906080523060c0526101205250620003a095505050505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013657600080fd5b81516001600160401b03808211156200015357620001536200010e565b604051601f8301601f19908116603f011681019082821181831017156200017e576200017e6200010e565b816040528381526020925086838588010111156200019b57600080fd5b600091505b83821015620001bf5785820183015181830184015290820190620001a0565b83821115620001d15760008385830101525b9695505050505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b620002158683870162000124565b935060208501519150808211156200022c57600080fd5b506200023b8582860162000124565b9150509250929050565b600181811c908216806200025a57607f821691505b6020821081036200027b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002cf57600081815260208120601f850160051c81016020861015620002aa5750805b601f850160051c820191505b81811015620002cb57828155600101620002b6565b5050505b505050565b81516001600160401b03811115620002f057620002f06200010e565b620003088162000301845462000245565b8462000281565b602080601f831160018114620003405760008415620003275750858301515b600019600386901b1c1916600185901b178555620002cb565b600085815260208120601f198616915b82811015620003715788860151825594840194600190910190840162000350565b5085821015620003905787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051611083620003f0600039600061097e015260006109cd015260006109a8015260006109010152600061092b0152600061095501526110836000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806340c10f1911610097578063a457c2d711610066578063a457c2d7146101e3578063a9059cbb146101f6578063d505accf14610209578063dd62ed3e1461021c57600080fd5b806340c10f191461018a57806370a082311461019f5780637ecebe00146101c857806395d89b41146101db57600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce567146101605780633644e5151461016f578063395093511461017757600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b61010261022f565b60405161010f9190610e3e565b60405180910390f35b61012b610126366004610eaf565b6102c1565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610ed9565b6102d9565b6040516012815260200161010f565b61013f6102fd565b61012b610185366004610eaf565b61030c565b61019d610198366004610eaf565b61032e565b005b61013f6101ad366004610f15565b6001600160a01b031660009081526020819052604090205490565b61013f6101d6366004610f15565b61033c565b61010261035c565b61012b6101f1366004610eaf565b61036b565b61012b610204366004610eaf565b6103eb565b61019d610217366004610f37565b6103f9565b61013f61022a366004610faa565b61055d565b60606003805461023e90610fdd565b80601f016020809104026020016040519081016040528092919081815260200182805461026a90610fdd565b80156102b75780601f1061028c576101008083540402835291602001916102b7565b820191906000526020600020905b81548152906001019060200180831161029a57829003601f168201915b5050505050905090565b6000336102cf818585610588565b5060019392505050565b6000336102e78582856106ac565b6102f2858585610726565b506001949350505050565b60006103076108f4565b905090565b6000336102cf81858561031f838361055d565b6103299190611011565b610588565b6103388282610a1b565b5050565b6001600160a01b0381166000908152600560205260408120545b92915050565b60606004805461023e90610fdd565b60003381610379828661055d565b9050838110156103de5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102f28286868403610588565b6000336102cf818585610726565b834211156104495760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016103d5565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886104788c610afa565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006104d382610b22565b905060006104e382878787610b70565b9050896001600160a01b0316816001600160a01b0316146105465760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016103d5565b6105518a8a8a610588565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105ea5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d5565b6001600160a01b03821661064b5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006106b8848461055d565b9050600019811461072057818110156107135760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103d5565b6107208484848403610588565b50505050565b6001600160a01b03831661078a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d5565b6001600160a01b0382166107ec5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d5565b6001600160a01b038316600090815260208190526040902054818110156108645760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103d5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061089b908490611011565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108e791815260200190565b60405180910390a3610720565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561094d57507f000000000000000000000000000000000000000000000000000000000000000046145b1561097757507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6001600160a01b038216610a715760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d5565b8060026000828254610a839190611011565b90915550506001600160a01b03821660009081526020819052604081208054839290610ab0908490611011565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b6000610356610b2f6108f4565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610b8187878787610b98565b91509150610b8e81610c85565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610bcf5750600090506003610c7c565b8460ff16601b14158015610be757508460ff16601c14155b15610bf85750600090506004610c7c565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610c4c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610c7557600060019250925050610c7c565b9150600090505b94509492505050565b6000816004811115610c9957610c99611037565b03610ca15750565b6001816004811115610cb557610cb5611037565b03610d025760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016103d5565b6002816004811115610d1657610d16611037565b03610d635760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016103d5565b6003816004811115610d7757610d77611037565b03610dcf5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016103d5565b6004816004811115610de357610de3611037565b03610e3b5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016103d5565b50565b600060208083528351808285015260005b81811015610e6b57858101830151858201604001528201610e4f565b81811115610e7d576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610eaa57600080fd5b919050565b60008060408385031215610ec257600080fd5b610ecb83610e93565b946020939093013593505050565b600080600060608486031215610eee57600080fd5b610ef784610e93565b9250610f0560208501610e93565b9150604084013590509250925092565b600060208284031215610f2757600080fd5b610f3082610e93565b9392505050565b600080600080600080600060e0888a031215610f5257600080fd5b610f5b88610e93565b9650610f6960208901610e93565b95506040880135945060608801359350608088013560ff81168114610f8d57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610fbd57600080fd5b610fc683610e93565b9150610fd460208401610e93565b90509250929050565b600181811c90821680610ff157607f821691505b602082108103610b1c57634e487b7160e01b600052602260045260246000fd5b6000821982111561103257634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052602160045260246000fdfea26469706673582212206f99a2efefcea5a973579412d26aff77303659fa23e57d428803ffc3168faa0564736f6c634300080f0033";

type ERC20TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Test__factory extends ContractFactory {
  constructor(...args: ERC20TestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Test> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<ERC20Test>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): ERC20Test {
    return super.attach(address) as ERC20Test;
  }
  override connect(signer: Signer): ERC20Test__factory {
    return super.connect(signer) as ERC20Test__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20TestInterface {
    return new utils.Interface(_abi) as ERC20TestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Test {
    return new Contract(address, _abi, signerOrProvider) as ERC20Test;
  }
}
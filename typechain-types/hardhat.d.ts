/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC2981Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981Upgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "IERC20PermitUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20PermitUpgradeable__factory>;
    getContractFactory(
      name: "IERC20Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Upgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "EIP712Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712Upgradeable__factory>;
    getContractFactory(
      name: "IERC165Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165Upgradeable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC1271",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271__factory>;
    getContractFactory(
      name: "IERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981__factory>;
    getContractFactory(
      name: "ERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IMarketplaceIntegratable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMarketplaceIntegratable__factory>;
    getContractFactory(
      name: "INFTBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INFTBase__factory>;
    getContractFactory(
      name: "ITokenFreezable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITokenFreezable__factory>;
    getContractFactory(
      name: "MarketplaceIntegratable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketplaceIntegratable__factory>;
    getContractFactory(
      name: "NFTBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTBase__factory>;
    getContractFactory(
      name: "NFTRoyalty",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTRoyalty__factory>;
    getContractFactory(
      name: "ERC1155Lite",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Lite__factory>;
    getContractFactory(
      name: "ERC1155BurnableLite",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155BurnableLite__factory>;
    getContractFactory(
      name: "ERC1155Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Permit__factory>;
    getContractFactory(
      name: "ERC1155Royalty",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Royalty__factory>;
    getContractFactory(
      name: "ERC1155SupplyLite",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155SupplyLite__factory>;
    getContractFactory(
      name: "ERC1155URIStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155URIStorage__factory>;
    getContractFactory(
      name: "IERC1155Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Permit__factory>;
    getContractFactory(
      name: "IERC1155Lite",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Lite__factory>;
    getContractFactory(
      name: "ERC721Lite",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Lite__factory>;
    getContractFactory(
      name: "ERC721BurnableLite",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721BurnableLite__factory>;
    getContractFactory(
      name: "ERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Permit__factory>;
    getContractFactory(
      name: "ERC721Royalty",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Royalty__factory>;
    getContractFactory(
      name: "ERC721URIStorageLite",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721URIStorageLite__factory>;
    getContractFactory(
      name: "IERC721Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Permit__factory>;
    getContractFactory(
      name: "IERC721Lite",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Lite__factory>;
    getContractFactory(
      name: "TokenFreezable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenFreezable__factory>;
    getContractFactory(
      name: "Collectible1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Collectible1155__factory>;
    getContractFactory(
      name: "Collectible721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Collectible721__factory>;
    getContractFactory(
      name: "Governance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Governance__factory>;
    getContractFactory(
      name: "IGovernance",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernance__factory>;
    getContractFactory(
      name: "IMarketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMarketplace__factory>;
    getContractFactory(
      name: "INFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INFT__factory>;
    getContractFactory(
      name: "INFTFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.INFTFactory__factory>;
    getContractFactory(
      name: "IPausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPausable__factory>;
    getContractFactory(
      name: "ISemiNFT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISemiNFT__factory>;
    getContractFactory(
      name: "ReceiptUtil",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReceiptUtil__factory>;
    getContractFactory(
      name: "TokenIdGenerator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenIdGenerator__factory>;
    getContractFactory(
      name: "Marketplace",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Marketplace__factory>;
    getContractFactory(
      name: "NFTFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NFTFactory__factory>;
    getContractFactory(
      name: "ERC20Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Test__factory>;
    getContractFactory(
      name: "GasTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GasTest__factory>;
    getContractFactory(
      name: "TokenUtil",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenUtil__factory>;

    getContractAt(
      name: "IERC2981Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981Upgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(
      name: "IERC20PermitUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20PermitUpgradeable>;
    getContractAt(
      name: "IERC20Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Upgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "EIP712Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712Upgradeable>;
    getContractAt(
      name: "IERC165Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165Upgradeable>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC1271",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1271>;
    getContractAt(
      name: "IERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981>;
    getContractAt(
      name: "ERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2981>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IMarketplaceIntegratable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMarketplaceIntegratable>;
    getContractAt(
      name: "INFTBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INFTBase>;
    getContractAt(
      name: "ITokenFreezable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITokenFreezable>;
    getContractAt(
      name: "MarketplaceIntegratable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketplaceIntegratable>;
    getContractAt(
      name: "NFTBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTBase>;
    getContractAt(
      name: "NFTRoyalty",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTRoyalty>;
    getContractAt(
      name: "ERC1155Lite",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Lite>;
    getContractAt(
      name: "ERC1155BurnableLite",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155BurnableLite>;
    getContractAt(
      name: "ERC1155Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Permit>;
    getContractAt(
      name: "ERC1155Royalty",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Royalty>;
    getContractAt(
      name: "ERC1155SupplyLite",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155SupplyLite>;
    getContractAt(
      name: "ERC1155URIStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155URIStorage>;
    getContractAt(
      name: "IERC1155Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Permit>;
    getContractAt(
      name: "IERC1155Lite",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Lite>;
    getContractAt(
      name: "ERC721Lite",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Lite>;
    getContractAt(
      name: "ERC721BurnableLite",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721BurnableLite>;
    getContractAt(
      name: "ERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Permit>;
    getContractAt(
      name: "ERC721Royalty",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Royalty>;
    getContractAt(
      name: "ERC721URIStorageLite",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721URIStorageLite>;
    getContractAt(
      name: "IERC721Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Permit>;
    getContractAt(
      name: "IERC721Lite",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Lite>;
    getContractAt(
      name: "TokenFreezable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenFreezable>;
    getContractAt(
      name: "Collectible1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Collectible1155>;
    getContractAt(
      name: "Collectible721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Collectible721>;
    getContractAt(
      name: "Governance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Governance>;
    getContractAt(
      name: "IGovernance",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernance>;
    getContractAt(
      name: "IMarketplace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMarketplace>;
    getContractAt(
      name: "INFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INFT>;
    getContractAt(
      name: "INFTFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.INFTFactory>;
    getContractAt(
      name: "IPausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPausable>;
    getContractAt(
      name: "ISemiNFT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISemiNFT>;
    getContractAt(
      name: "ReceiptUtil",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReceiptUtil>;
    getContractAt(
      name: "TokenIdGenerator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenIdGenerator>;
    getContractAt(
      name: "Marketplace",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Marketplace>;
    getContractAt(
      name: "NFTFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NFTFactory>;
    getContractAt(
      name: "ERC20Test",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Test>;
    getContractAt(
      name: "GasTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GasTest>;
    getContractAt(
      name: "TokenUtil",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenUtil>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

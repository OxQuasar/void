

// Use to deploy test token Contracts

const hre = require("hardhat");
require("dotenv").config();

const contractName = 'pVoid';

// Main
async function main() {
  [owner] = await ethers.getSigners();
  console.log(`Owner: ${owner.address}`);
  await hre.run("compile");
  const smartContract = await hre.ethers.getContractFactory(contractName);
  console.log('Contract Factory Built')

  const contract = await smartContract.deploy(
    ethers.BigNumber.from('1000000000000000000'), // 1e18
    '0xED47887F589A181C1817e57a6D993a45A86EE4f4',
    '0x3449f3b1cF796226241A63ABcC74D339961d553e'
  );
  await contract.deployed();
  console.log(`${contractName} deployed to: ${contract.address}`); 
}


main()

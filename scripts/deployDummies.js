

// Use to deploy Whitelist contract

const hre = require("hardhat");
require("dotenv").config();

// Main
async function main() {
  [owner] = await ethers.getSigners();
  console.log(`Owner: ${owner.address}`);
  const contractName = 'DummyTreasury';
  await hre.run("compile");
  const smartContract = await hre.ethers.getContractFactory(contractName);
  console.log('Contract Factory Built')
  const contract = await smartContract.deploy(
    '0xb6D812F90E2384eE10a3477533cDA50306e5180C',
    '0xDA1430f5F3d9E6DC3232211532026bF101Daf83F'
  );
  await contract.deployed();
  console.log(`${contractName} deployed to: ${contract.address}`); 
}


main()

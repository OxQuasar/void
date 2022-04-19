
// Use to deploy Whitelist contract

const hre = require("hardhat");
require("dotenv").config();

const daiTokenAddress = ''; 
const startTime = ''; 
const saleDuration = ''; // ASK 
const epochLength = ethers.BigNumber.from(900);; // 15 min is 900 seconds 
const initialCap = ethers.BigNumber.from(500); // Initial DAI investment cap of 500 
const globalHardCap = ethers.BigNumber.from(1.25e6); // Hard cap 1.25 Mil DAI
const maxInvestorCap = ethers.BigNumber.from(4000); // 4000 DAI investor cap
const minInvest = ethers.BigNumber.from(50); // 50 DAI Min investment
const presalePrice = ethers.BigNumber.from(1); // Price $1
const treasury = ''; // Void treasury address
const voidTokenAddress = ''; 


async function main() {
  [owner] = await ethers.getSigners();
  console.log(`Owner: ${owner.address}`);
  const contractName = 'Whitelist';
  await hre.run("compile");
  const smartContract = await hre.ethers.getContractFactory(contractName);
  console.log('Contract Factory Built')
  const contract = await smartContract.deploy(
    daiTokenAddress,
    startTime,
    saleDuration,
    epochLength,
    initialCap,
    globalHardCap,
    maxInvestorCap,
    minInvest,
    presalePrice,
    treasury,
    voidTokenAddress
  );
  await contract.deployed();
  console.log(`${contractName} deployed to: ${contract.address}`); 
}


main()


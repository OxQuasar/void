// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "forge-std/src/Test.sol";

import {Whitelist} from "../contracts/Whitelist.sol";
//import {VM}        from "../utils/VM.sol";


contract WhitelistTest is Test {
    Whitelist wlist;

    address daiTokenAddress = 0xDA1430f5F3d9E6DC3232211532026bF101Daf83F; 
    uint256 startTime = 1651097100; // Calc the start time // 15:05 today
    uint256 saleDuration = 360000; // ASK 
    uint256 epochLength = 900; // 15 min is 900 seconds 
    uint256 initialCap = 500; // Initial DAI investment cap of 500 
    uint256 globalHardCap = 1250000; // THIS NEEDS TO BE IN THE CORRECT DECIMALS Hard cap 1.25 Mil DAI
    uint256 maxInvestorCap = 4000; // 4000 DAI investor cap
    uint256 minInvest = 50; // 50 DAI Min investment
    uint256 presalePrice = 1; // Price $1
    address treasury = 0x0b2A7d5f0D2C9c96f4E751a4922BB4a3Bc31a8FB; // Void treasury address
    address voidTokenAddress = 0xb6D812F90E2384eE10a3477533cDA50306e5180C; 

    address testWallet = 0x1783Ad78f0FEFCfa7e1d964D22a7c6e46c6EB4C7;

    function setUp() public {
        wlist = new Whitelist(
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
    }

    // Ask DIO - can a requirement be a contract variable? 
    function test_addWhitelist() public {
        wlist.addWhitelist(testWallet);
        require(wlist.isUserWhitelisted(testWallet) == true);
        wlist.removeWhitelist(testWallet);
        require(wlist.isUserWhitelisted(testWallet) == false);
    }

    // Ask DIO - how to change the VM timestamp? 

}

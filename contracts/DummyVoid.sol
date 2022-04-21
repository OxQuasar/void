// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
import "./DummyDAI.sol";

contract DummyVoid is DummyDAI { 
    
    constructor (
        uint256 initSupply
    ) DummyDAI(initSupply) {
        name     = "Dummy Void";
        symbol   = "dVoid";
        //totalSupply = initSupply;
        //balanceOf[msg.sender] = totalSupply;
    } 

    function getTotalSupply() public view override returns (uint256) {
        return add(totalSupply,1);
    }
}
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DummyDAI is Ownable, ERC20 {

    constructor (
        uint256 initSupply
    ) ERC20("Dummy DAI", "dDAI") {
        _mint(msg.sender, initSupply);
    } 

    function mint(address usr, uint wad) external onlyOwner {
        _mint(usr, wad);
    }

    function burn(uint wad) external {
        _burn(msg.sender, wad);
    }

}

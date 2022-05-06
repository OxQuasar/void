// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./ERC20.sol";
import "./Ownable.sol";

contract DummyDAI is Ownable, ERC20 {

    constructor (
        uint256 initSupply
    ) ERC20("Dummy DAI", "dDAI", 18) {
        _mint(msg.sender, initSupply);
    } 

    function mint(address usr, uint wad) external onlyOwner {
        _mint(usr, wad);
    }

    function burn(uint wad) external {
        _burn(msg.sender, wad);
    }

}

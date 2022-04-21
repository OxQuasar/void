// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "./ERC20.sol";

contract DummyTreasury {

    uint256 public treasuryBalance;

    constructor() {
        treasuryBalance = 0;
    }

    // The test treasury just needs a transfer function
    function transferTo(address token, address dst, uint256 amt) external {   
        IERC20(token).transfer(dst, amt);
    }

}
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

//import "./ERC20.sol";
import "./DummyDAI.sol";


contract DummyTreasury {

    mapping (address => uint) public treasuryTokenBalance;

    constructor(
        address voidToken,
        address daiToken
    ) {
        treasuryTokenBalance[voidToken] = 0;
        treasuryTokenBalance[daiToken] = 0;
    }

    // The test treasury just needs a transfer function

    // Need to debug this later
    function transferTo(address token, address dst, uint256 amt, bool safety) external {  
        if (safety) { 
            require (treasuryTokenBalance[token] >= amt, "transfer exceeds balance");
        }
        DummyDAI(token).transfer(dst, amt);
        treasuryTokenBalance[token] = sub(treasuryTokenBalance[token], amt);
    }
    
    // Need to debug this later
    function deposit(address token, uint256 amt) external {
        DummyDAI(token).transfer(address(this), amt);
        treasuryTokenBalance[token] = add(treasuryTokenBalance[token], amt);
    }

    function getBalance(address token) external view returns (uint256) {
        return treasuryTokenBalance[token];
    }

    /*
    function setInvestToken(address _investToken) public onlyOwner {
        investToken = _investToken;
    } */

    // --- Math ---
    function add(uint x, uint y) internal pure returns (uint z) {
        require((z = x + y) >= x);
    }
    function sub(uint x, uint y) internal pure returns (uint z) {
        require((z = x - y) <= x);
    }
}

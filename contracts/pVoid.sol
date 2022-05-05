// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;
import "./ERC20.sol";

contract pVoid is ERC20 { 
    address public voidToken; 

    event Redeem(address investor, uint256 amount);

    constructor (
        uint256 initSupply,
        voidTokenAddress_
    ) ERC20("pVoid", "pVoid", 18) {
        _mint(msg.sender, initSupply);
        voidToken = voidTokenAddress_;
    } 

    // The function for converting pVoid to Void 
    function convertToVoid(uint256 amount) {
        // Require the pVoid payment
        require(
            ERC20(address(this)).transferFrom(
                msg.sender,
                address(this),
                amount
            ),
            "transfer failed"
        );
        
        ERC20(voidToken).transfer(
            msg.sender,
            issueAmount
        );

        emit Redeem(msg.sender, amount);
    }
    
}
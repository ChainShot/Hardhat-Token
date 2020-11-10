// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WOOFToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("WOOF", "WF") {
        _mint(msg.sender, initialSupply);
    }
}

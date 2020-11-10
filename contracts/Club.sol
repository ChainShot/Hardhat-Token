// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

interface IERC20 {
    function approve(address spender, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract Club {
    mapping(address => bool) public isMember;

    function join(address _addr) external {
      IERC20 token = IERC20(_addr);
      require(token.transferFrom(msg.sender, address(this), 10 ether));
      isMember[msg.sender] = true;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
/*
This contract allows the owner to set the initial total supply, share price, 
and the total number of shares (10,000 shares in this case). The onlyOwner modifier 
allows only the owner can change the share price. Users can buy shares by sending Ether,
 and the ownership is transferred from the owner to the buyer. You can deploy this 
 contract, and the owner can set the initial parameters and interact with it accordingly.
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RealEstateToken is ERC20 {
    address public owner;
    uint256 public totalShares;
    uint256 public sharePrice;

    // Mapping to track the number of shares owned by each user
    mapping(address => uint256) public shares;

    constructor(string memory _name, string memory _symbol, uint256 _initialSupply, uint256 _sharePrice, uint256 _totalShares) ERC20(_name, _symbol) {
        owner = msg.sender;
        totalShares = _totalShares;
        sharePrice = _sharePrice;
        _mint(owner, _initialSupply);
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function setSharePrice(uint256 _newPrice) public onlyOwner {
        sharePrice = _newPrice;
    }

    function buyShares(uint256 numShares) external payable {
        require(numShares > 0, "Number of shares must be greater than zero");
        require(msg.value >= numShares * sharePrice, "Insufficient funds");
        require(totalShares >= numShares, "Not enough shares available");

        uint256 cost = numShares * sharePrice;
        shares[msg.sender] += numShares;
        totalShares -= numShares;
        _transfer(owner, msg.sender, numShares);
        payable(owner).transfer(cost);
    }
}

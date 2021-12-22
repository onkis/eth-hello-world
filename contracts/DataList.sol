// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DataList {
	string[] data;

	constructor() public {
	
	}
	
	function add(string memory name) public{
		data.push(name);
	}
	
	function find(string memory search) public returns (bool found) {
		for(uint i = 0; i < data.length; i++){
			if(keccak256(bytes(data[i])) == keccak256(bytes(search)) ){
				return true;
			}
		}
		return false;    
	}
}

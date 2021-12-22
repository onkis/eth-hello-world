pragma solidity ^0.7.0;

contract HelloNurse {
  string public message;
  
  int public counter;
  
  constructor(string memory initMessage) {
    message = initMessage;
  }
  
  function update(string memory changedMessage) public{
    message = changedMessage;
    counter+=1;
  }
  
  function updateCounter(int countChange) public{
    counter = countChange;
  }
}
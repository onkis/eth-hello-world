const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/HelloNurse.sol/HelloNurse.json");

console.log(JSON.stringify(contract.abi));


const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


async function main(){
  // let message = await helloWorldContract.message();
  // console.log("message capt", message)
  // let count = await helloWorldContract.counter();
  // console.log("update counter", count)
  // 
  const tx = await helloWorldContract.updateCounter(312312);
  
  await tx.wait();
  
  
  let newMessage = await helloWorldContract.message();
  
  console.log("new message", newMessage);
  let countNxt = await helloWorldContract.counter();
  console.log("update counter", countNxt)
  
}
main();
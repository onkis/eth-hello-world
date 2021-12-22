

async function main(){
  let helloNurse = await ethers.getContractFactory("HelloNurse");
  
  let hello_nurse = await helloNurse.deploy("HelloNurse");
  console.log("Contract deployed to address:", hello_nurse.address);
  console.log(hello_nurse);
}

main().then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
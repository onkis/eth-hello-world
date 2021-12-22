

async function main(){
  let dataList = await ethers.getContractFactory("DataList");
  
  let dataListContract = await dataList.deploy("DataList");
  console.log("Contract deployed to address:", dataListContract.address);
  console.log(dataListContract);
}

main().then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
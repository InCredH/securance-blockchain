// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // await hre.run('compile');
  const [owner,cyberCrimePerson] = ['0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266','0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199']
  // const [owner, cyberCrimePerson, from2, from3] = await hre.ethers.getSigners();
  // console.log(owner);
  const newCyberInsurance = await hre.ethers.getContractFactory("newCyberInsurance");
  // console.log(cyberCrimePerson.address);
  const contract = await newCyberInsurance.deploy(owner, cyberCrimePerson);
  
  await contract.deployed();
  console.log(`Contract deployed by address: ${contract.deployTransaction.from}`);

  console.log("Address of contract:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

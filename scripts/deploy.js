// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // await hre.run('compile');
  const [owner,cyberCrimePerson] = ['0x84EC7f7B97B2992fbEd211AAe97e51E0aC340b06','0x1148c3F0318E738F19d49B3235A5a364de7e226A']
  // const [owner, cyberCrimePerson, from2, from3] = await hre.ethers.getSigners();
  // console.log(owner);
  const newCyberInsurance = await hre.ethers.getContractFactory("newCyberInsurance");
  // console.log(cyberCrimePerson.address);
  const contract = await newCyberInsurance.deploy(cyberCrimePerson);

  await contract.deployed();

  console.log("Address of contract:", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

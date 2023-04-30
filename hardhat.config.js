require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

// const SEPOLIA_URL = process.env.SEPOLIA_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // sepolia: {
    //   url: 'https://eth-sepolia.g.alchemy.com/v2/QX1eCkEKeCjwh2Pypq9KDpwo4MdwtpBt',
    //   accounts:['df0d31bea536453bcb9e46d36a7f2e9f635f896bcf45ef88342b24dd05ff511d'],
    // },
  },
};

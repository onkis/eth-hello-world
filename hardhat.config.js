require('dotenv').config();
const {API_URL, PRIVATE_KEY} = process.env;
require("@nomiclabs/hardhat-ethers");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "rinkerby",
  networks: {
    hardhat: {},
    rinkerby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};

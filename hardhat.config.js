require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.6.2",
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/fa49820eee644d9684027d0384e9e1e3",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

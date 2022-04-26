/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      forking: {
        url: "https://bsc-dataseed.binance.org",
        blockNumber: 14373441
      }
    }
  },
};

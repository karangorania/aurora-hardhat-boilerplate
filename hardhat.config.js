require('@nomiclabs/hardhat-waffle');
require('hardhat-gas-reporter');
require('@nomiclabs/hardhat-etherscan');

require('dotenv').config();

const { PRIVATE_KEY, POLYGON_SCAN_KEY } = process.env;

module.exports = {
  gasReporter: {
    currency: 'ETH',
    gasPrice: 21,
  },
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {
      gas: 12000000,
      gasPrice: 8000000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
    },
    testnet_aurora: {
      url: 'https://testnet.aurora.dev',
      accounts: {
        mnemonic: PRIVATE_KEY,
      },
      chainId: 1313161555,
    },
  },
  etherscan: {
    apiKey: POLYGON_SCAN_KEY,
  },
};

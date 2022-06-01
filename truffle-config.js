const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  contracts_build_directory: './build',
  networks: {
    mumbai: {
      provider: () =>
        new HDWalletProvider(process.env.PRIVATE_KEY, process.env.INFURA_POLYGON_URL),
      network_id: 4,
    },
  },
  compilers: {
    solc: {
      version: '0.8.14',
      settings: {
        optimizer: {
          enabled: true,
          // This will generate gas efficient code for as many executions.
          runs: 999999,
        },
      },
    },
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    polygonscan: process.env.POLYGONSCAN_KEY,
  },
};

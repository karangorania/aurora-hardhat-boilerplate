# Simple Hardhat Boilerplate for Aurora Blockchain

It comes with a NappyToken contract, a test for that contract, a deploy script , aurorascan config for verify contract, all test network and main network configuration ready just put your API_KEY & PRIVATE_KEY.

## Important Step

```bash
create .env file in root directory.
```

```bash
Add this to your .env file
```

```bash
PRIVATE_KEY = "YOUR-METAMASK-PRIVATE_KEY"
AURORA_SCAN_API_KEY = "YOUR-ETHERSCAN_API_KEY"
```

-Get Your API Key

- [Aurorascan](https://aurorascan.dev/)

-Get Your Goerli Faucet

- [Rinkeby Faucet](https://faucet.goerli.starknet.io/)

-Get Your Near Wallet

- [Near Testnet Wallet](https://wallet.testnet.near.org/)

## NPM Packages

- [Openzeppelin](https://www.npmjs.com/package/@openzeppelin/contracts)
- [Hardhat-Ethers](https://www.npmjs.com/package/hardhat-ethers)
- [Chai](https://www.npmjs.com/package/chai)
- [Ethers](https://www.npmjs.com/package/ethers)
- [Ethereum-Waffle](https://www.npmjs.com/package/ethereum-waffle)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Hardhat-Etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan)
- [Hardhat Gas Repoter](https://www.npmjs.com/package/hardhat-gas-reporter)

## Tech Stack

- [Node](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/)
- [Openzepplin](https://openzeppelin.com/)

## Check out Explorer

- [Aurorascan Exploere](https://aurorascan.dev//)

## Run Locally

Clone the project

```bash
  git clone https://github.com/karangorania/aurora-hardhat-boilerplate
```

Go to the project directory

```bash
  cd aurora-hardhat-boilerplate
```

Install dependencies

```bash
  npm install
```

Compile

```bash
  npx hardhat compile
```

Test

```bash
  npx hardhat test
```

Deploy

```bash
  node scripts/deploy.js
```

Deploy on Aurora

```bash
  npx hardhat run scripts/deploy.js --network aurora_testnet
```

Verify Contract

```bash
npx hardhat verify --network aurora_testnet <YOUR_CONTRACT_ADDRESS>
```

Help

```bash
  npx hardhat help
```

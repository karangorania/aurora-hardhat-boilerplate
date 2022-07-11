const hre = require('hardhat');

async function main() {
  const NappyToken = await hre.ethers.getContractFactory('NappyToken');
  const nappyToken = await NappyToken.deploy(unlockTime, {
    value: lockedAmount,
  });

  await nappyToken.deployed();

  console.log('NappyToken deployed to:', nappyToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

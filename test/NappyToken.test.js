const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('NappyToken', () => {
  it('Should return the correct symbol', async () => {
    const NappyToken = await ethers.getContractFactory('NappyToken');
    const nappyToken = await NappyToken.deploy();
    await nappyToken.deployed();

    expect(await nappyToken.symbol()).to.equal('NPT');
  });

  it('Should return the correct name', async () => {
    const NappyToken = await ethers.getContractFactory('NappyToken');
    const nappyToken = await NappyToken.deploy();
    await nappyToken.deployed();

    expect(await nappyToken.name()).to.equal('NappyToken');
  });
});

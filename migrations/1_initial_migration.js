const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  // Mint 1,000 Dai Tokens for the deployer

  await tokenMock.mint(
    '0x4f6acdc5D02d2C7B71D1D23665fCe856E2c1bd35',
    '1000000000000000000000'
  )
  
};
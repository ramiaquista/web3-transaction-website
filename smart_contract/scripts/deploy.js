const hre = require('hardhat');

const main = () => {
  const Transactions = await hre.ethers.getContractFactory('Transactions');
  const transactions = await Transactions.deploy('Hello, Hardhat!');

  await transactions.deployed();

  console.log('Transactions deployed to:', transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

runMain();

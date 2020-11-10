async function main() {
  const Club = await hre.ethers.getContractFactory("Club");
  const club = await Club.deploy();

  await club.deployed();

  console.log("Club deployed to:", club.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

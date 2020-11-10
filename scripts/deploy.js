async function main() {
  const WOOFToken = await hre.ethers.getContractFactory("WOOFToken");
  const woof = await WOOFToken.deploy(ethers.utils.parseEther("1000"));

  await woof.deployed();

  console.log("Token deployed to:", woof.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

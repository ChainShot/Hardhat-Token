const clubAddress = "0x80372a84B10C03876605cb39D682445Ed4664791";
const tokenAddress = "0x435b6c24dacb8d38d1d89373d6807a2c30ab1ab4";

async function main() {
  const WOOFToken = await hre.ethers.getContractFactory("WOOFToken");
  const woof = WOOFToken.attach(tokenAddress);

  const Club = await hre.ethers.getContractFactory("Club");
  const club = Club.attach(clubAddress);

  const tx = await woof.approve(clubAddress, ethers.utils.parseEther("10"));
  await tx.wait();
  await club.join(tokenAddress);

  console.log("Success!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

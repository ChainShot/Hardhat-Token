const addr = "friend.eth";
const tokenAddress = "0x435b6c24dacb8d38d1d89373d6807a2c30ab1ab4";

async function main() {
  const WOOFToken = await hre.ethers.getContractFactory("WOOFToken");
  const woof = WOOFToken.attach(tokenAddress)

  await woof.transfer(addr, ethers.utils.parseEther("10"));

  console.log("Success!");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

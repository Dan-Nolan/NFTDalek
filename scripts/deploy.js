async function main() {
  const DalekNFT = await hre.ethers.getContractFactory("DalekNFT");
  const nft = await DalekNFT.deploy();

  await nft.deployed();

  console.log("DalekNFT deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

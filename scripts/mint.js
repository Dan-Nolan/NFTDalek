const friends = [
    "0x92bC0dA159D495d3Ca7081544841EC6BD415eB9E",
    "0x4Ea580c6AAA91c7Ed096f3dF14AFEEE76900E59F",
    "0xA425C8a9c421502b32153Ab795C210153aE11Aa5",
    "0x2c7D9E0e01d13f4a9313AEdbF98A9C570f5d2928",
    "0x7Fa1ee5AdAA1AEA9093B7b4fd57a5Db8230346Dc",
    "0x4F2dF8b4D24ef906D460383A61289CEf4E047df5",
    "0xbF86cD37c6b92D14Ea084711a026dB9e469673eE",
    "0x83cE74429510C1243E15207957fA3E004331e291",
    "0x364437a3705bD91736eF94257cCc680EF3BEC81b",
    "0x6368CD30cc23277CF1886841E138e864e11d1981",
    "0x7c8A0f7f04C28E8aFDBD7cde9903Ba413E883324",
    "0xdB52bd8213E8eedc3b9F3e3b2087659A8743b344",
    "0xe15A4F5eA424B540e6B0558105f88c5D39735374",
];
const existingContractAddr = "0xd8385F898B99803426b8Bf1f4793Bf993715eAA2";

async function main() {
  const nft = await hre.ethers.getContractAt("DalekNFT", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();
  for(let i = 0; i < friends.length; i++) {
    const tokenURI = "https://gateway.ipfs.io/ipfs/Qmcz7eFQV3rJKhdAcNAmuMU1WFd3ncZbGkmJNAn5qQap5i";
    await nft.awardItem(friends[i], tokenURI,  {
      nonce: nonce + i
    });
  }

  console.log("Minting is complete!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

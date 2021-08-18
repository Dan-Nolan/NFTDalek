const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Dalek",
      attributes: [
        {
          "trait_type": "Extermination",
          "value": "Extremely High"
        }
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.ipfs.io/ipfs/Qmd3n8SVGhs1WRYg7mYnddyZmMhhdks6ag5PQGp1xLUE3g",
      description: "Exterminates all the Humans!"
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();

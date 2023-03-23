const anchor = require("@project-serum/anchor");
const fs = require("fs");

const account = anchor.web3.Keypair.generate();
fs.writeFileSync("./keypair.json", JSON.stringify(account));

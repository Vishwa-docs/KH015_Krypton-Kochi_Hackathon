const CryptoJS = require("crypto-js");

const secretNumber = Math.floor(Math.random() * 1000);

const commitment = CryptoJS.SHA256(secretNumber.toString()).toString();

const proof = {
    secretNumber,
    commitment
};

const verifyProof = (proof) => {
    const { secretNumber, commitment } = proof;
    const computedCommitment = CryptoJS.SHA256(secretNumber.toString()).toString();

    return computedCommitment === commitment;
};

console.log(verifyProof(proof));
const Ballot = artifacts.require("Ballot");

module.exports = (deployer) => {
  deployer.deploy(Ballot, 
    [
      web3.utils.asciiToHex('Ant'),
      web3.utils.asciiToHex('Tiger'),
      web3.utils.asciiToHex('Rabbit')
    ]);
    // web3.utils.asciiToHex('Rose Marin')
    // web3.utils.hexToString("")
};

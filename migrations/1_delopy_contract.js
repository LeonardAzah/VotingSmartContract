const votingSystem = artifacts.require("VotingSystem.sol");

module.exports = function (deployer) {
  deployer.deploy(votingSystem);
};

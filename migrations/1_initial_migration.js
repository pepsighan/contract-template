const Contract = artifacts.require('./Contract');

module.exports = async function (deployer) {
  deployer.deploy(Contract);
};

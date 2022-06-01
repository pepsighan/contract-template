const Contract = artifacts.require('./Contract');

/// Deploy the portals to the respective networks.
module.exports = async function (deployer) {
  deployer.deploy(Contract);
};

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  // await deploy("SYRFICO", {
  //   // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy

  //   from: deployer,
  //   args: ["0x558C304e163671B2e6278de7b0cE384A28441111"],
  //   log: true,
  // });
  await deploy("WSYRF", {
    // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy

    from: deployer,
    log: true,
  });
};
module.exports.tags = ["WSYRF"];
// module.exports.tags = ["SYRFICO"];

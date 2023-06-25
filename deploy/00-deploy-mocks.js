const { network } = require("hardhat")
const {developmentChains,DECIMALS,INITIAL_ANSWER}=require("../helper-hardhat-config")
module.exports=async (hre)=>{
    const {getNamedAccounts,deployments}=hre
    const {deploy,log}=deployments
    const {deployer}= await getNamedAccounts()
    const chainId=network.config.chainId

    //if(developmentChains.includes(chainId)){
    if(developmentChains.includes(network.name)){
        log("DETECTED DEPLOYING MOCKS")
        await deploy("MockV3Aggregator",{
            contract:"MockV3Aggregator",
            from:"deployer",
            log:true,
            args:[DECIMALS,INITIAL_ANSWER],
        })
        log("MOCKS DEPLOYED")
    }
}
module.exports.tags=["all","mocks"]
const {getNamedAccounts, ethers}=require("hardhat")
async function main(){
    const {deployer}=await getNamedAccounts;
    const fundme=await ethers.getContractAt("FundMe",deployer);
    console.log("funding");
    const txnres=await fundme.fund({value:ethers.utils.parseEther("0.1"),});
    await txnres.wait(1);
    console.log("funded")
}
main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error)
    process.exit(1)
})
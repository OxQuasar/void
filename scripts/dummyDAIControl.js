
//const dDAIAddr = '0xDA1430f5F3d9E6DC3232211532026bF101Daf83F' // Dummy DAI
const dDAIAddr = '0xb6D812F90E2384eE10a3477533cDA50306e5180C' // Dummy VOID

const wallet = '0x1783Ad78f0FEFCfa7e1d964D22a7c6e46c6EB4C7'

const wallet2 = '0xD4cf0aCafEd26e0241F05653Db06Fad377f7E56a'
//const wallet2 = '0x462a8BFFD42544eEE309c64104693b02051fe854'


async function main() {
    [owner] = await ethers.getSigners();
    const IDummyDAI = await ethers.getContractFactory('DummyDAI');
    DAI = await IDummyDAI.attach(dDAIAddr);
    DAIControl = await DAI.connect(owner);

    
    //await DAIControl.mint(wallet, 10000);
    //await DAIControl.burn(wallet, 50);
    //await DAIControl.transfer(wallet2, 50);
    //await DAIControl.transferFrom(wallet2, wallet, 50);
    //await DAIControl.approve(wallet2, 40);


    result = await DAIControl.getBalanceOf(wallet);
    result2 = await DAIControl.getTotalSupply();
    result3 = await DAIControl.getAllowance(wallet,wallet2);


    
    console.log('Wallet Bal: ' + result);
    console.log('Total Supply: ' + result2);
    console.log('Allowance: ' + result3);

    console.log('');


}





main()


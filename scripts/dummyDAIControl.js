
const daiToken = '0xDA1430f5F3d9E6DC3232211532026bF101Daf83F' // Dummy DAI
const voidToken = '0xb6D812F90E2384eE10a3477533cDA50306e5180C' // Dummy VOID

const wallet = '0x1783Ad78f0FEFCfa7e1d964D22a7c6e46c6EB4C7'
const wallet2 = '0xD4cf0aCafEd26e0241F05653Db06Fad377f7E56a'


async function main() {
    [owner] = await ethers.getSigners();
    const IDummyDAI = await ethers.getContractFactory('DummyDAI');
    DAI = await IDummyDAI.attach(voidToken);
    DAIControl = await DAI.connect(owner);

    
    //await DAIControl.mint(wallet2, 10000);
    //await DAIControl.burn(wallet, 50);
    //await DAIControl.transfer('0x6a7d57a0459C135f8b7c55aC739a4F32b5828F03', 6550);
    //await DAIControl.transferFrom(wallet2, wallet, 150); // Something is wrong with the allowance here
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

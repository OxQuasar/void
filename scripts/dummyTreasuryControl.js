
const daiToken = '0xDA1430f5F3d9E6DC3232211532026bF101Daf83F' // Dummy DAI
const voidToken = '0xb6D812F90E2384eE10a3477533cDA50306e5180C' // Dummy VOID

const wallet = '0x1783Ad78f0FEFCfa7e1d964D22a7c6e46c6EB4C7'
const wallet2 = '0xD4cf0aCafEd26e0241F05653Db06Fad377f7E56a'

const treasury = '0x0b2A7d5f0D2C9c96f4E751a4922BB4a3Bc31a8FB'


async function main() {
    [owner] = await ethers.getSigners();
    const ITreasury = await ethers.getContractFactory('DummyTreasury');
    Tsry = await ITreasury.attach(treasury);
    TreasuryControl = await Tsry.connect(owner);

    //await TreasuryControl.deposit(wallet, 1);

    await TreasuryControl.transferTo(voidToken, wallet, 1, true);


    result = await TreasuryControl.getBalance(voidToken);

    console.log('Token Bal: ' + result);
    console.log('');

}





main()


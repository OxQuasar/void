// Token Addr
const pVoid = '0xb2f8358B8D51cEBda355CB80F7c7c2223686187b'
const DummyDAI = '0xED47887F589A181C1817e57a6D993a45A86EE4f4'
const pVoidtest = '0x3449f3b1cF796226241A63ABcC74D339961d553e'

// Wallet Addr
const wallet = '0x1783Ad78f0FEFCfa7e1d964D22a7c6e46c6EB4C7'
const wallet2 = '0xD4cf0aCafEd26e0241F05653Db06Fad377f7E56a'



async function main() {
    [owner] = await ethers.getSigners();
    const IToken = await ethers.getContractFactory('pVoid');
    Token = await IToken.attach(pVoid);
    TokenControl = await Token.connect(owner);

    
    //await TokenControl.mint(wallet, 1000);
    //await TokenControl.burn(wallet, 50);
    //await TokenControl.transfer(pVoid, ethers.BigNumber.from('1000'));
    // TokenControl.transferFrom(wallet2, wallet, 100);
    //await TokenControl.approve(wallet2, 1140);

    await TokenControl.convertToVoid(10)

    result = await TokenControl.balance(wallet);
    result2 = await TokenControl.totalSupply();
    result3 = await TokenControl.allowance(wallet,wallet2);

    console.log('Wallet Bal: ' + result);
    console.log('Total Supply: ' + result2);
    console.log('Allowance: ' + result3);

    console.log('');

}

function bigNumberify(input) {
    return ethers.BigNumber.from(input);
}

main()

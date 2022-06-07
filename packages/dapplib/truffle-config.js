require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note screen column hunt pet tail genuine'; 
let testAccounts = [
"0xa8f4a01fbc5177632dba037b3630f2fd292c2c8da9213722e95567c77c78b299",
"0x006af44662357cf2f9219ee68bc59f2024827ad10ca9d128dcdbbfcbbc6bb054",
"0x000487cfa5aac58d07c5713ff78d4c2a744dc978d9eff58f657bc2b6a06c4070",
"0xa547136502f7575023286f448e729f238b03cbc1651e68974c2f4fe5b56f3235",
"0x6174d2c86802279915ed262677d8eb522f2e970372bdece0e55e6167dad536c9",
"0x181939b4efc7a7398eb9aca4d35f4a96cbd58271dc03020efa185abf4ed10f2d",
"0x99c65502325adb1fea939203a6d1002065cb89fa283f779a22c1b0db2a074e78",
"0xfd240a18d31a773f93947da42de230636092a855e5ee755d1147cae2309c37d4",
"0xc15ab16bb6b81caecb02ab12c1dab7976855d7db848c7bc28205a4c630920f41",
"0x1a130b61dd1d3549ba0771ad6206e5e06178fdd186a71939f2b953a9e2654635"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


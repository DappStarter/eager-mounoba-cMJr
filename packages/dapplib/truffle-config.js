require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone strategy response stick social give another army gaze'; 
let testAccounts = [
"0xfdff66515b503f06a44853f1c078d073eedef1c3bf38b4893b211bab639ef706",
"0x3a41c22a4afc26b864cb41d14853635ca327ed2e282a5b1336b2b8c0c0dc692e",
"0x9b34e4705fe545af0f5dbf83bf6c7b1cf4c6d86d99778b20cd56bce1f6b74713",
"0x5f57939f5cfe33bd92907642e62b93a8f9f2a02392dae96c13faff89da7d3bd0",
"0x661ec6e30f2c19d193ea628d0577061d18f074a01935d2e1fdd44e3939bbcffc",
"0x5f122fbd04063edf33d0311db1d3eed3701883720a6dd467992282a0ffed3072",
"0x5424445bf49970d9017bb61c27eb1b0dff40eea4d8a8a2995652ce7ad39ce161",
"0x56c8627689a16333c4c4ab1a3899fdd563c7a55de3b1060506244fd8202dc116",
"0x391764d90af5bd4f94425c56daa008e84ebf96a3208009f32be662884f92bb83",
"0x0756e75006512d7850ad6bd13cca95c3a8d8dc6d336ff0162fe590d28457579e"
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


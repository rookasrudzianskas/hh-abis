require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/q-ytv6uCThJNRv2uh_zVxTB0m1rbsSKj',
      accounts: [
        '<YOUR_RINKEBY_ACCOUNT_PRIVATE_KEY_GOES_HERE>',
      ],
    },
  },
}

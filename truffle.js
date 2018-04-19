module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    gitlab: {
      // network used only for gitlab tests
      // here the ganache is avaialbe on trufflesuite-ganache-cli:8545
      host: 'trufflesuite-ganache-cli',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}

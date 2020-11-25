// const { openGame } = require(path + '/process/open-game')
// const { login }    = require(path + '/process/login')
const { napGame }  = require(path + '/process/nap-game')

// const { outGame }  = require(path + '/process/out-game')

function run() {
    // openGame()

    // login()
    
    napGame()
}

module.exports = {
    run
}
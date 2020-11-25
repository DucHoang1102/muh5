const { toast, usleep, stop, rootDir } = at
const { h_outApp } = require(rootDir() + '/h_lib/lib-for-all')

function outGame() {
    h_outApp('MU đại thiên sứ h5', 'com.vgm.muh5.ios')
}

module.exports = {
    outGame
}
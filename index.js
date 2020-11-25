/**
 * SETTINGS FOR APP
 */

// Thư viện chung
require(at.rootDir() + '/h_lib/h-lib')

// Iphone's information
global.iphone = require(at.rootDir() + '/iphone')

// Task
global.task = require(at.rootDir() + '/task')


// muh5's root path 
global.path = at.rootDir() + '/1scenter.at/muh5.at'

/* ------------- Run ------------ */
const { run } = require(path + '/worker')

run()


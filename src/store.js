const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')
const allReducers = require('./reducers/allReducers')

//module.exports = createStore(allReducers, applyMiddleware(createLogger({colors: 'none'})))
module.exports = createStore(allReducers)
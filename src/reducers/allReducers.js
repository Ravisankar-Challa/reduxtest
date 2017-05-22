const { combineReducers } = require('redux')
const { cartReducer } = require('./cartReducer')

module.exports = combineReducers({
	cart: cartReducer
})
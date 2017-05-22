const store = require('../src/store')
const { addItemToCart, removeItemFromCart } = require('./actions/cartActions')

store.dispatch(addItemToCart(1, 'Wine', 6, 8))
store.dispatch(addItemToCart(2, 'Beer', 6, 7))
store.dispatch(removeItemFromCart(2, 6))
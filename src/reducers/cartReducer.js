function cartReducer(state = [], action) {
	switch(action.type) {
		case 'ADD_TO_CART': 
			return state.concat(action.payload)
		case 'REMOVE_FROM_CART': 
			return state.map(cartItem => {
				if(cartItem.id === action.payload.id) {
					return Object.assign({},  cartItem, {quantity: (cartItem.quantity - action.payload.quantity)})
				} else {
					return cartItem
				}
			})
			/*let item = state.filter(cartItem => cartItem.id === action.payload.id)[0]
			let newState = state.filter(cartItem => cartItem.id !== action.payload.id)
			let newItem = Object.assign({},  item, {quantity: (item.quantity - action.payload.quantity)})
			return newState.concat(newItem)*/
		default: 
			return state
	}
}

module.exports.cartReducer = cartReducer
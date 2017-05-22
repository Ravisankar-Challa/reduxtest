function addItemToCart(id, itemName, price, quantity) {
	return {
		type: 'ADD_TO_CART',
		payload: {
			id,
			itemName,
			price,
			quantity
		}
	}
}

function removeItemFromCart(id, quantity) {
	return {
		type: 'REMOVE_FROM_CART',
		payload: {
			id,
			quantity
		}
	}
}

exports.addItemToCart = addItemToCart
exports.removeItemFromCart = removeItemFromCart
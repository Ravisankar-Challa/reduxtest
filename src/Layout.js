import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CartItem from './CartItem'
import * as actions from './actions/cartActions'

class Layout extends React.Component {
	componentWillMount() {
		//console.log('WillMount')
	}
	componentDidMount() {
		//console.log('DidMount')
		//this.props.addItemToCart(10, 'DidMount', 65, 45)
		//this.props.addItemToCart(10, 'DidMount', 65, 45)
	}
	addItem() {
		this.props.addItemToCart(this.refs.itemId.value, this.refs.itemName.value, this.refs.itemPrice.value, this.refs.itemQuantity.value)
	}
	removeItem() {
		this.props.removeItemFromCart(this.refs.itemId.value, this.refs.itemQuantity.value)
	}
	render() {
		//console.log('render')
		return (<div>
					<CartItem items={this.props.cart} />
					<input type='text' placeholder = 'itemId' ref='itemId' /><br/>
					<input type='text' placeholder = 'itemName' ref='itemName' /><br/>
					<input type='text' placeholder = 'price' ref='itemPrice' /><br/>
					<input type='text' placeholder = 'quantity' ref='itemQuantity' /><br/>
					<button className='add' onClick={this.addItem.bind(this)}>Add</button>
					<button className='remove' onClick={this.removeItem.bind(this)}>Remove</button>
				</div>)
	}
}
//export default connect(store => ({cart: store.cart}))(Layout)
export default connect(store => ({cart: store.cart}), dispatch => bindActionCreators(actions, dispatch))(Layout)

import React from 'react'

export default class CartItem extends React.Component {
	render() {
		return(
			<table>
				<tbody>
					{this.props.items.map((cartItem, idx) => 
						(<tr key={cartItem.id}>
							<td>{cartItem.id}</td>
							<td>{cartItem.itemName}</td>
							<td>{cartItem.price}</td>
							<td>{cartItem.quantity}</td>
						</tr>))}
				</tbody>	
			</table>)
	}
}
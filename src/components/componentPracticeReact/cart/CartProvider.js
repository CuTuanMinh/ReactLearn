import React from 'react';

export const CartContext = React.createContext();

export class CartProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cartItems: []
		};
		this.addToCart = this.addToCart.bind(this);
	}

	addToCart(product) {
		this.setState({
			cartItems: this.state.cartItems.concat(product)
			// concat là immutable method => ko làm biến đổi array ban đầu
			// push là mutable method => có làm biến đổi array ban đầu
			// => khi setState nên dùng các immutable method
		});
		console.log('Added to cart', product);
	}

	render() {
		return (
			<CartContext.Provider value={{
				cartItems: this.state.cartItems,
				addToCart: this.addToCart
			}}>
				{this.props.children}
			</CartContext.Provider>
		);
	}
}

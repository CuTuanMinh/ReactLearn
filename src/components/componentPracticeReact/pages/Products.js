import React from 'react';
import {
	Container,
	Row,
	Col, 
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button } from 'reactstrap';
import axios from 'axios';
import { CartContext } from '../cart/CartProvider';

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		const url ='http://localhost:8080/products';
		axios.get(url).then(function(res) {
			this.setState({
				products: res.data
			});
		}.bind(this));
	}

	render() {
		const { products } = this.state;
		return (
			<Container>
				<h2>Products</h2>
				<Row>
					{
						products.map((product) => {
							return (
								<Col sm="4">
									<Card>
								        <CardImg top width="100%" src={product.image} alt="Card image cap" />
								        <CardBody>
								          <CardTitle>{product.name}</CardTitle>
								          <CardSubtitle>{product.price}</CardSubtitle>
								          <CardText>{product.description}</CardText>
								          <CartContext.Consumer>
								          	{
								        	  ({ addToCart }) => <Button onClick={() => addToCart(product)}>Add to Cart</Button>
								          	}
								          </CartContext.Consumer>
								        </CardBody>
								    </Card>
							    </Col>
							);
						})
					}
				</Row>
			</Container>			
		);
	}
}

export default Products;
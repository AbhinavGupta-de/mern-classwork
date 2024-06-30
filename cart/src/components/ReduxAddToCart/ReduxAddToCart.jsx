import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store.js';
function ReduxAddToCart({ product }) {
	console.log('add to cart', product.id);
	let dispatch = useDispatch();
	function increase() {
		dispatch(addToCart(product));
	}
	function decrease() {
		dispatch(removeFromCart(product));
	}

	let quantity = useSelector((state) => {
		return state.cart.items[product.id]?.quantity || 0;
	});

	if (quantity === 0) {
		return (
			<div>
				<button onClick={increase}>AddToCart</button>
			</div>
		);
	} else {
		return (
			<div>
				<button onClick={decrease}>-</button>
				<span>{quantity}</span>
				<button onClick={increase}>+</button>
			</div>
		);
	}
}
export default ReduxAddToCart;

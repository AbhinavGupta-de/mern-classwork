import React from 'react';
import { useSelector } from 'react-redux';

function DisplayCart() {
	let items = useSelector((state) => state.items);

	console.log(items);

	if (Object.keys(items).length === 0) {
		return <div>No items in cart</div>;
	} else {
		return (
			<div>
				{Object.entries(items).map(([key, item]) => (
					<div key={key}>
						<h3>{item.title}</h3>
						<p>Category: {item.category}</p>
						<p>
							Price: {item.price.value} {item.price.currency} (Discount:{' '}
							{item.price.discount}%)
						</p>
						<p>Quantity: {item.quantity}</p>
					</div>
				))}
			</div>
		);
	}
}

export default DisplayCart;

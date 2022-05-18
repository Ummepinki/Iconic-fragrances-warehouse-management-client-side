import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css';
const Checkout = () => {
    const { itemId } = useParams();
    const [items, setItems] = useState({});

    const handleToDelivered = item => {
        let updateItem = item;
        updateItem.quantity = updateItem.quantity - 1;
        console.log(updateItem);
        const url = `http://localhost:5000/items/item`;
        fetch(url, {
            method: 'UPDATE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <h2>Welcome to items detail:{items.name}</h2>

            <div className='item w-50 mx-auto mt-2 mb-2'>
                <img src={items.img} alt='' />
                <h2>{items.name}</h2>
                <p>Price: ${items.price}</p>
                <p>Quantity: {items.quantity}</p>
                <p>Sold: {items.sold}</p>
                <p>Supplier Name: {items.supplierName}</p>
                <p><small> {items.description}</small></p>
                <button onClick={() => handleToDelivered(items)}>delivered</button>
            </div>

        </div>
    );



};

export default Checkout;
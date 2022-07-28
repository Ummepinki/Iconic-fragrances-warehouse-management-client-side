import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css';
const Checkout = () => {
    const { itemId } = useParams();
    const [items, setItems] = useState({});
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        const url = `https://frozen-gorge-85997.herokuapp.com/items/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const { name, img, description, price, supplierName, sold } = items;
    const handleToDelivered = () => {
        const oldQuantity = parseInt(quantity)
        console.log(quantity);
        if (oldQuantity > 0) {
            const newQuantity = oldQuantity - 1;
            setQuantity(newQuantity);
        }
        else {
            alert('Please Add Quantity')

        }



    }

    const handleAddQuantity = event => {
        event.preventDefault();
        const number = parseInt(event.target.number.value)
        const oldQuantity = parseInt(quantity);
        const newQuantity = oldQuantity + number;
        setQuantity(newQuantity);
        event.target.reset()
    }
    return (
        <div>
            <h2>Welcome to items detail:{name}</h2>

            <div className='item w-50 mx-auto mt-2 mb-2'>
                <img src={img} alt='' />
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <p>Quantity: {quantity}</p>
                <p>Sold: {sold}</p>
                <p>Supplier Name: {supplierName}</p>
                <p><small> {description}</small></p>
                <button onClick={handleToDelivered}>delivered</button>  <br />
                <form onSubmit={handleAddQuantity}>
                    <br />
                    <input type="number" name="number" id="" placeholder='Quantity only number' required />
                    <input type="submit" value="add" />
                </form>
            </div>

        </div>
    );



};

export default Checkout;
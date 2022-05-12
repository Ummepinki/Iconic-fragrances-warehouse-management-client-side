import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <h2>Welcome to items detail:{items.name}</h2>

            <Link to="/checkout">
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ItemDetails;
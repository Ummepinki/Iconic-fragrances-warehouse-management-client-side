import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {

    const { itemId } = useParams();
    const [items, setItems] = useState({});

    const path = itemId ? "/checkout/" + itemId : "/checkout"

    useEffect(() => {
        const url = `https://frozen-gorge-85997.herokuapp.com/items/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <h2>Welcome to items detail:{items.name}</h2>

            <Link to={path}>
                <button className='btn btn-primary'> Items Checkout</button>
            </Link>
        </div>
    );
};

export default ItemDetails;
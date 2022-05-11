import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    return (
        <div>
            <h2>Welcome to detail:{itemId}</h2>
            <Link to="/checkout">
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ItemDetails;
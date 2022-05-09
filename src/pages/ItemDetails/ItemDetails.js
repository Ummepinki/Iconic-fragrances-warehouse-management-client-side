import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    return (
        <div>
            <h2>Welcome to detail:{itemId}</h2>
        </div>
    );
};

export default ItemDetails;
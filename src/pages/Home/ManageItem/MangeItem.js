import React from 'react';
import './MangeItem.css';

const ManageItem = ({ item }) => {
    const { name, img, price, description } = item;
    return (
        <div className='item'>
            <img src={img} alt='' />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button>update</button>
        </div>
    );
}
export default ManageItem;
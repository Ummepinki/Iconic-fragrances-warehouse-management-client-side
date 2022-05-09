import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MangeItem.css';

const ManageItem = ({ item }) => {
    const { id, name, img, price, description } = item;
    const navigate = useNavigate();
    const navigateToItemDetails = id => {
        navigate(`/item/${id}`)
    }
    return (
        <div className='item'>
            <img src={img} alt='' />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToItemDetails(id)}>update</button>
        </div>
    );
}
export default ManageItem;
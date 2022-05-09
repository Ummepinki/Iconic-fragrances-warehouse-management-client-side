import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/MangeItem';
import './Manageitems.css';
const ManageItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('manageitems.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 className='items-title'> Our Items</h2>
            <div className='items-container'>
                {
                    items.map(item => <ManageItem
                        key={item.id}
                        item={item}
                    ></ManageItem>)
                }
            </div>

        </div>
    );
};

export default ManageItems;
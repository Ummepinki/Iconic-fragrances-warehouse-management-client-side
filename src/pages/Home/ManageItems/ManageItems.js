import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/MangeItem';
import './Manageitems.css';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 6)))
    }, [])
    return (
        <div id="items" className='container'>
            <div className='row'>
                <h2 className='text-center mt-5 text-dark'> Our Items</h2>
                <div className="items-container">
                    {
                        items.map(item => <ManageItem
                            key={item._id}
                            item={item}
                        ></ManageItem>)
                    }
                </div>
            </div>


        </div>
    );
};

export default ManageItems;
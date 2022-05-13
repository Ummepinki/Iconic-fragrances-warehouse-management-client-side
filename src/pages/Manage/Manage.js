import React from 'react';
import useItem from '../hooks/useItem';

const Manage = () => {
    const [items] = useItem();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })

        }
    }
    return (
        <div>
            <h2>Manage items</h2>

            {items.map(item => <div key={item._id}>
                <h5> {item.name} <button onClick={() => handleDelete()}>X</button></h5>
            </div>)

            }
        </div>
    );
};

export default Manage;
import React, { useEffect, useState } from 'react';

const MyItems = () => {

    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `https://frozen-gorge-85997.herokuapp.com/items`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <h2> Add Items:{items.length}</h2>

        </div>
    );
};

export default MyItems;
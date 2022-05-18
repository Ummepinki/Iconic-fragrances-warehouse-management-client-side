import React, { useEffect, useState } from 'react';

const MyItems = () => {

    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items`;
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
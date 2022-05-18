import { useEffect, useState } from "react";

const useItem = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://frozen-gorge-85997.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return [items, setItems]
}

export default useItem;
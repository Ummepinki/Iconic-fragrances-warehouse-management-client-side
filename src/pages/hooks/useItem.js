import { useEffect, useState } from "react";

const useItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://warehouse-management-server-side-two.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useItem;

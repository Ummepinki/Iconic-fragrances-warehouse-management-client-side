import React from "react";
import useItem from "../hooks/useItem";
import "./Manage.css";

const Manage = () => {
  const [items, setItems] = useItem();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://iconic-fragrances.onrender.com/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div>
      <h2>Manage items</h2>

      {items.map((item) => (
        <div key={item._id} item={item}>
          <div className="g-5 col-sm-12 col-md-6 col-lg-4 container ">
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Name:{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Price:{item.price}</p>
                <p className="card-text">Quantity:{item.quantity}</p>

                <button onClick={() => handleDelete(item._id)}>X</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Manage;

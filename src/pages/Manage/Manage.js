import React from 'react';
import useItem from '../hooks/useItem';
import './Manage.css';

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

                <div className='g-5 col-sm-12 col-md-6 col-lg-4 '>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={item.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button onClick={() => handleDelete()}>X</button>
                        </div>
                    </div>
                </div>






            </div>)

            }

        </div >
    );
};

export default Manage;
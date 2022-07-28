import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyItems = () => {

    const [items, setItems] = useState({});
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `https://frozen-gorge-85997.herokuapp.com/items?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(' accessToken')}`
                    }
                });
                setItems(data);
            }
            catch (error) {
                console.log(error.massage);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }

            }
        }
        getItems();
    }, [user])

    return (
        <div>
            <h2> Add Items:{items.length}</h2>





        </div>
    );
};

export default MyItems;
import React from 'react';
import Banner from '../Banner/Banner';
import ManageItems from '../ManageItems/ManageItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ManageItems></ManageItems>
            <h1>This is home</h1>
        </div>
    );
};

export default Home;
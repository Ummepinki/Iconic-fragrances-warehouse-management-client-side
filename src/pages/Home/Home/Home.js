import React from 'react';
import Banner from '../Banner/Banner';
import ManageItems from '../ManageItems/ManageItems';
import Perfume from './Perfume';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ManageItems></ManageItems>
            <Perfume></Perfume>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;
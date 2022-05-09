import React from 'react';
import notfound from '../../../Image/notfound.png';
const NotFound = () => {
    return (
        <div>
            <h1 className='text-center  mt-5'>404</h1>
            <img className='w-100' src={notfound} alt="" />

        </div>
    );
};

export default NotFound;
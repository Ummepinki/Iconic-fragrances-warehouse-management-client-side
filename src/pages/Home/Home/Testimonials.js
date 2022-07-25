import React from 'react';

import people1 from '../../../Image/people1.png';
import people5 from '../../../Image/people5.jpg';
import people2 from '../../../Image/people2.png';



const Testimonials = () => {

    return (
        <div>

            <h1 className='text-5xl text-uppercase font-bold mt-5 mb-3'>Testimonials</h1>

            <div>
                <div className='d-flex  gap-5 justify-content-center mt-3 '>
                    <div>
                        <img className='weight-8 height-8' src={people1} alt=''></img>
                        <p>Comment:Nice small</p>
                        <p >rating: 4/5</p>
                    </div>
                    <div>
                        <img weight={90} height={90} src={people2} alt=''></img>
                        <p className='text-xl'>Comment: Natural aromatics,<br /> the power to evoke feelings of love, energy, happiness,awe,sensuality and peace</p>
                        <p >rating: 5/5</p>
                    </div>
                    <div>
                        <img weight={90} height={90} src={people5} alt=''></img>
                        <p>Comment: Best product,oriental and fresh</p>
                        <p >rating: 3/5</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;
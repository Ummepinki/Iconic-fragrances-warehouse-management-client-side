import React from 'react';
import perfume1 from '../../../Image/perfume1.jpg'
import './Perfume.css';

const Perfume = () => {
    return (
        <div>
            <section>
                <div className='mx-auto d-flex  w-50 gap-5 mt-5'>
                    <div>
                        <img src={perfume1} alt=''></img>
                    </div>
                    <div>
                        <h1 className=' text-3xl uppercase font-bold'>The  Perfume Brands </h1><br />
                        <p>
                            Chanel may be known for its timeless tweeds and interlocking Cs, but the birth of Chanel No. 5 in 1921 gave the fashion house a name in the fragrance world.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Perfume;
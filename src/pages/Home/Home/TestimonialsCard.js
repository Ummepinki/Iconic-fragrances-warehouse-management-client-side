import React from 'react';
import './TestimonialsCard.css';

const TestimonialsCard = ({ review }) => {

    return (
        <div>
            <div className='review-container'>
                <div>
                    <img className='w-8 h-8' src={review.img} alt=''></img>
                    <p>Comment:{review.comment}</p>
                </div>
                <div>
                    <img className='w-8 h-8' src={review.img} alt=''></img>
                    <p>Comment:{review.comment}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsCard;
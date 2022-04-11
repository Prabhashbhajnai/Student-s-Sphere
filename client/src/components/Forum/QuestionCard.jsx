import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa'

const QuestionCard = () => {
    return (
        <>
            <div className='mt-4 ml-3 bg-white p-3 w-9/12 rounded-2xl hover:shadow-lg overflow-hidden'>
                <div className='flex items-center gap-3 mb-4'>
                    <FaRegUserCircle className='text-5xl' />
                    <div>
                        <h1 className='text-xl'>User Name</h1>
                        <h5 className='text-sm text-grey-300'>Timestamp</h5>
                    </div>
                </div>
                <div className='mb-2'>
                    <h1 className='font-semibold text-2xl'>How did Naruto get food as a child?</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, fugiat magnam architecto accusamus, corporis voluptas quasi excepturi quod consequatur ex corrupti, iste sequi quaerat dolore itaque vero non saepe laboriosam!
                </p>
            </div>
        </>
    );
};

export default QuestionCard;
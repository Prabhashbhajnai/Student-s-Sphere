import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

// components
import ReplyCard from '../../components/Forum/ReplyCard';

const Question = () => {
    return (
        <>
            <div className='flex px-24 mt-7'>
                <div className='flex flex-wrap w-3/5'>
                    <div className='flex mb-3 gap-5 items-center'>
                        <FaRegUserCircle className='text-5xl' />
                        <div className=''>
                            <h2 className='font-semibold text-xl'>User Name</h2>
                            <h5 className='text-grey-300'>Timestamp</h5>
                        </div>
                    </div>
                    <h1 className='font-serif text-5xl pb-3 border-b-2 border-grey-100'>How did Naruto get food as a child?</h1>
                    <p className='mt-4 font-sans text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur minus, ex dolore quae labore officia ipsam est iure commodi eaque suscipit consequatur? Quas, distinctio. Cum aliquam est explicabo ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ea molestias eligendi voluptatum magnam atque distinctio consequuntur! Consequuntur accusantium eos ipsa, possimus velit facere molestiae voluptate quos, dolorum ut eum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, eum! Impedit omnis a libero quisquam id? Est praesentium error illum iure necessitatibus minima cupiditate, cum inventore fugit, rerum nesciunt tempore!</p>

                    <form className='mt-3 w-full relative'>
                        <input
                            type="text"
                            id="TextArea"
                            placeholder="Add a comment"
                            className="w-full h-12 border border-grey-400 px-3 py-2 rounded-xl focus:outline-grey-400 focus:border-customPink-400 z-0"
                        />
                        <div className='absolute right-2 bottom-2'>
                            <button className='flex items-center bg-blue-500 text-white px-3 py-1 rounded-3xl border hover:bg-grey-300 hover:text-black'>Submit
                            </button>
                        </div>
                    </form>

                    <div className='bg-grey-50 mt-4'>
                        <div className='w-full h-full mt-4'>
                            <div className='flex flex-col gap-3'>
                                <ReplyCard />
                                <ReplyCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Question;
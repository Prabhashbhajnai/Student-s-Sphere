import React from 'react';

const BookCard = (props) => {
    return (
        <>
            <div className=" bg-white shadow-lg px-1 rounded-xl w-24 h-80 md:w-56  transition duration-1000 hover:scale-105">
                <div className="w-full h-32">
                    <img
                        src={props.photo} 
                        alt="book-cover"
                        className="w-full h-56 rounded-t-md px-6 pt-4 pb-2"
                    />
                </div>
                <div className="flex flex-col px-1">
                    <h3 className="text-md text-center font-bold mt-24">{props.title}</h3>
                    <div className="items-center">
                        <p className='text-center'>
                            by: {props.author}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCard
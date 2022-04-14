import React from 'react';

const BookCard = () => {
    return (
        <>
            <div className=" bg-white shadow-lg rounded-xl w-24 h-80 md:w-56 transform transition duration-1000 hover:scale-105">
                <div className="w-full h-32">
                    <img
                        src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" 
                        alt="book-cover"
                        className="w-full h-56 rounded-t-md px-6 pt-4 pb-2"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-md text-center font-bold mt-24">Book Title</h3>
                    <div className="items-center">
                        <p className='text-center'>
                            by: Author Name
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookCard
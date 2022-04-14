import React from 'react';

//components
import Navbar from '../../components/Navbar'; 

const BooksLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto py-10 px-4 lg:px-20">
                <div className="my-4">
                </div>
                {props.children}
            </div>
        </>
    );
}

export default BooksLayout;
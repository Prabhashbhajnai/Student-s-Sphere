import React from 'react'

// components
import Navbar from '../../components/Navbar';

const ForumHomeLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className=''>
                {props.children}
            </div>

        </>
    );
};

export default ForumHomeLayout;
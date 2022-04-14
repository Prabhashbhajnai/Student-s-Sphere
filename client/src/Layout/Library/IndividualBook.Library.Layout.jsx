import React from 'react';

// components
import Navbar from '../../components/Navbar';

const IndividualBookLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="">
                {props.children}
            </div>
        </>
    );
};

export default IndividualBookLayout
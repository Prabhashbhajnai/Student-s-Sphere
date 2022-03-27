import React from 'react'

// Components
import LibraryCard from '../../components/Library/Home Page/LibraryCard'

const LibraryHome = () => {
    return (
        <>
            <div className='mt-3 lg:flex '>
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
                <LibraryCard />
            </div>

        </>
    );
};

export default LibraryHome;
import React from 'react';

// components
import Navbar from '../../components/Navbar';
import IndividualBook from '../../components/Library/IndividualBook/IndividualBook';

const IndividualBookLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="">
                <IndividualBook 
                    image={"https://edit.org/images/cat/book-covers-big-2019101610.jpg"} 
                    title={"Book Title"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos id in blanditiis amet quo magni veritatis repellat praesentium expedita. Reprehenderit velit error provident asperiores voluptatibus ab numquam corporis architecto."}
                    author={"Author"}
                    authorAbout={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eveniet natus harum, voluptate iusto delectus impedit ex, ab debitis, ratione quasi animi accusamus culpa illum doloribus. Porro architecto consectetur aspernatur."}
                    publisher={"Publisher"}
                    date={"29-Nov-21"}
                    isbn={123456789}
                />
            </div>
        </>
    );
};

export default IndividualBookLayout
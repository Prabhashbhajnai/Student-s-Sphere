import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';


const ReplyCard = () => {
    return (
        <>
            <div className='border-b-2 border-grey-100 py-2 pl-3'>
                <div className='flex items-center gap-3'>
                    <FaRegUserCircle className='text-2xl' />
                    <div className='mb-3'>
                        <h1 className='font-semibold text-xl'>User Name</h1>
                        <h2 className='text-sm text-grey-400'>emailid@gmail.com</h2>
                    </div>
                </div>
                <p className='ml-9 mr-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt officiis consequatur incidunt pariatur excepturi, impedit inventore dolore odio facere velit. Recusandae vero labore tenetur delectus exercitationem dolore, debitis est eligendi!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta molestias minima explicabo cum inventore accusamus, quas animi ea nostrum! Eveniet dolorem alias sequi, nesciunt unde maiores doloremque architecto fugit veritatis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam dolores deleniti error explicabo pariatur, ab ea facilis adipisci possimus saepe odit totam, aliquam blanditiis labore aperiam modi hic quisquam sit.</p>
            </div>
        </>
    );
};

export default ReplyCard;
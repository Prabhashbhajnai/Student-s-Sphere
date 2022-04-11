import React from 'react';

const TeacherInfo = () => {
    return (
        <>
            <div className='flex mt-5 h-auto md:flex lg:px-20 gap-3 md:gap-10'>
                <div className='md:hidden h-1/3 w-1/3 mb-5' >
                    <img
                        src="https://vitbhopal.ac.in/file/2021/06/Dr.Venkat-Prasad-Padhy1_C.jpg"
                        alt="teacher"
                        className='w-full h-full rounded-xl'
                    />
                </div>
                <div className='hidden md:block h-56 w-1/5 mb-5' >
                    <img
                        src="https://vitbhopal.ac.in/file/2021/06/Dr.Venkat-Prasad-Padhy1_C.jpg"
                        alt="teacher"
                        className='w-full h-full rounded-xl'
                    />
                </div>
                <div>
                    <p><span className='text-gray-500'>Name: </span>/Dr.Venkat-Prasad-Padhy</p>
                    <p><span className='text-gray-500'>Subject: </span>Subject</p>
                    <p><span className='text-gray-500'>Position: </span>Position</p>
                </div>
            </div>
            <div className='mx-20 border-b-2'></div>
        </>
    );
};

export default TeacherInfo;
import React from 'react';

const TeacherCard = () => {
    return (
        <>
            <div className="bg-white p-2 mb-2 mt-3 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg md:w-1/2 lg:w-64">
                <div className="w-full h-56 relative px-2">
                    <img
                        src="https://vitbhopal.ac.in/file/2021/06/Dr.Venkat-Prasad-Padhy1_C.jpg"
                        alt="faculty"
                        className="w-full h-full rounded-2xl"
                    />
                </div>
                <div className="my-1 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium px-4">Dr. Venkat Padhy</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeacherCard;
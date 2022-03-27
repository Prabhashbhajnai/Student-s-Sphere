import React from 'react';



const LibraryCard = () => {
    return (
        <>
            <div className="bg-white mx-2 p-2 w-full mb-2 rounded-2xl transition duration-700 ease-in-out hover:shadow-lg  md:w-1/2 lg:w-1/4">
                <div className="w-full h-56 lg:64 relative">
                    <img
                        src="https://media.istockphoto.com/photos/newspapers-picture-id513051742?b=1&k=20&m=513051742&s=170667a&w=0&h=ax1sVBU4REigOoOp3c28CntSSDKvg-eHIiSzOIPV6sM="
                        alt="Books"
                        className="w-full h-full rounded-2xl"
                    />
                </div>
                <div className=" my-2 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                        <h4 className="text-xl font-medium">Newspaper</h4>
                    </div>
                    <div className="flex items-center justify-between text-grey-500">
                        <p>Hindustan Times, Times Of India, Amar Ujala</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LibraryCard;
import React from 'react';

// coomponents
import TeacherCard from '../../components/Library/Teachers/TeacherCard';

const Teachers = () => {
    return (
        <>
            <div className='lg:flex lg:flex-wrap lg:px-20 w-full gap-5'>
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard />
                <TeacherCard /> 

            </div>
        </>
    )
}

export default Teachers
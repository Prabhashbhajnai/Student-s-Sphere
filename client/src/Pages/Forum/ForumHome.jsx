import React from 'react';

// components
import QuestionCard from '../../components/Forum/QuestionCard';

const ForumHome = () => {
    return (
        <>
            <div className='flex flex-col gap-3 items-center'>
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
            </div>
        </>
    );
};

export default ForumHome;
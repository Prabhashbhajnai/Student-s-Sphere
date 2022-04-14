import React from 'react';

// components
import QuestionCard from '../../components/Forum/QuestionCard';
import AddQuestionCard from '../../components/Forum/AddQuestionCard';

const ForumHome = () => {
    return (
        <>
            <div className='flex bg-grey-50'>
                <div className='flex flex-col mb-4 w-9/12 gap-3 items-center'>
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
            </div>
        </>
    );
};

export default ForumHome;
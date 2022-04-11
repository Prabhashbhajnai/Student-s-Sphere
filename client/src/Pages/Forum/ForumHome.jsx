import React from 'react';

// components
import QuestionCard from '../../components/Forum/QuestionCard';
import AddQuestionCard from '../../components/Forum/AddQuestionCard';

const ForumHome = () => {
    return (
        <>
            <div className='flex bg-grey-50'>
                <div className='flex flex-col w-9/12 gap-3 items-center'>
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                    <QuestionCard />
                </div>
                <div className='h-10 sticky top-0'>
                    <AddQuestionCard />
                </div>
            </div>
        </>
    );
};

export default ForumHome;
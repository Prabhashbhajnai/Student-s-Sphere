import React from 'react';

// components
import QuestionPaperCard from '../../components/Library/QuestionPaper/QuestionpaperCard';

const Questionpaper = () => {
    return (
        <>
            <div className='lg:px-20 items-center'>
                <QuestionPaperCard />
                <QuestionPaperCard />
                <QuestionPaperCard />
                <QuestionPaperCard />
            </div>
        </>
    );
};

export default Questionpaper;
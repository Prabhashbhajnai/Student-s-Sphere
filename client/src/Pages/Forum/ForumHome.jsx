import React, { useState } from 'react';

// components
import QuestionCard from '../../components/Forum/QuestionCard';
import AddQuestionCard from '../../components/Forum/AddQuestionCard';
import FAQCard from '../../components/Forum/FAQCard';


const ForumHome = () => {

    const [sourceLiist, setSourceList] = useState([
        {
            _id: "1",
            question: "How is the infrastructure?",
            link: "",
        },
        {
            _id: "2",
            question: "How is the placement record?",
            link: "",
        },
        {
            _id: "3",
            question: "What departments or programs have the best reputations?",
            link: "",
        },
        {
            _id: "4",
            question: "Are most of your classes taught by professors or teaching assistants?",
            link: "",
        },
        {
            _id: "5",
            question: "Do your professors hold office hours, and will they meet with you outside of class?",
            link: "",
        },
        {
            _id: "6",
            question: "Are your classes lecture-based or discussion-based?",
            link: "",
        },
    ])


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
                <div className='w-1/4 ml-10 px-6 border-l-2 border-grey-100'>
                    <h1 className='border-b-2 border-grey-100 pb-2 text-xl font-medium font-sans '>Frequently Asked Questions</h1>
                    <div className='flex flex-col mt-3 gap-3'>
                        {
                            sourceLiist.map((sources) => (
                                <FAQCard{...sources} key={sources._id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForumHome;
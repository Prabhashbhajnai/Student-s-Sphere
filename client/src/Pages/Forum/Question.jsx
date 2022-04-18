import React, { useEffect, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// components
import ReplyCard from '../../components/Forum/ReplyCard';
import FAQCard from '../../components/Forum/FAQCard';

// redux action
import { getSpecificQuestion } from '../../Redux/Reducer/Forum/forum.action';
import { getUser } from '../../Redux/Reducer/user/user.action';

const Question = (props) => {

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
    ]);

    const [question, setQuestion] = useState({
        user: "",
        questionSubject: "",
        questionText: "",
    });

    const [user, setUser] = useState({});

    const { id } = useParams()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(question.user)).then(data => setUser(data.payload.user))
    }, []);

    useEffect(() => {
        dispatch(getSpecificQuestion(id)).then((data) => {
            setQuestion((prev) => ({
                ...prev,
                ...data.payload.question
            }));
        });

    }, []);

    return (
        <>
            <div className='flex px-24 mt-7'>
                <div className='flex flex-wrap w-3/4'>
                    <div className='w-full'>
                        <div className='flex mb-3 gap-5 items-center'>
                            <FaRegUserCircle className='text-5xl' />
                            <div className=''>
                                <h2 className='font-semibold text-xl'>{user.fullname}</h2>
                                <h5 className='text-grey-300'>Timestamp</h5>
                            </div>
                        </div>
                        <h1 className='w-full font-serif text-5xl pb-3 border-b-2 border-grey-100'>{question.questionSubject}</h1>
                    </div>

                    <p className='mt-4 font-sans text-lg'>{question.questionText}</p>

                    <form className='mt-3 w-full relative'>
                        <input
                            type="text"
                            id="TextArea"
                            placeholder="Add a comment"
                            className="w-full h-12 border border-grey-400 px-3 py-2 rounded-xl focus:outline-grey-400 focus:border-customPink-400 z-0"
                        />
                        <div className='absolute right-2 bottom-2'>
                            <button className='flex items-center bg-blue-500 text-white px-3 py-1 rounded-3xl border hover:bg-grey-300 hover:text-black'>Submit
                            </button>
                        </div>
                    </form>

                    <div className='bg-grey-50 mt-4'>
                        <div className='w-full h-full mt-4'>
                            <div className='flex flex-col gap-3'>
                                <ReplyCard />
                                <ReplyCard />
                            </div>
                        </div>
                    </div>
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
            </div >
        </>
    );
};

export default Question;
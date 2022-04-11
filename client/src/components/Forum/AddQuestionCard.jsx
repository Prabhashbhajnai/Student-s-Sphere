import React, { useState } from 'react';
import { MdArrowRight } from 'react-icons/md';

// components
import QuestionModal from './QuestionModal';

const AddQuestionCard = () => {
    let [isOpen, setIsOpen] = useState(false);

    const openModal = () => {setIsOpen(true)};

    return (
        <>
            <QuestionModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <button onClick={openModal} className='flex flex-wrap items-center text-black mt-4'>
                Post a Question <MdArrowRight className='text-lg' />
            </button>
        </>
    )
}

export default AddQuestionCard
import React from 'react';

//Components
import Navbar from '../../components/Navbar';
import TeacherInfo from '../../components/Library/QuestionPaper/TeacherInfo';

const LibraryQuestionpaperLayout = (props) => {
    return (
        <>
            <Navbar />
            <TeacherInfo />
            <div className="">
                {props.children}
            </div>
        </>
    );
};

export default LibraryQuestionpaperLayout;
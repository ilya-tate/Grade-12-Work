import React, { useState } from 'react';

const Questions = ({ data }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    return (
        <div className="question-box">
            <h4>{ data }</h4>
        </div>
    );
}

export default Questions;

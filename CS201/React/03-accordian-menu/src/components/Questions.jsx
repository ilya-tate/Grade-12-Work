import React from 'react';
import Question from '../pages/Question';

const Questions = ({ data }) => {
  return (
    <article>
        { data.map(question => {
          return (
            <Question data={ question } />
          );
        }) }
    </article>
  );
}

export default Questions;

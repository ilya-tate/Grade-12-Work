import React, { useState } from 'react';

const Question = ({ data }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  return (
    <section>
      <div className="question">
        <h3>
          { data.title }
        </h3>
        <button onClick={ () => setIsInfoVisible(!isInfoVisible) }>
          { isInfoVisible ? '-' : '+' }
        </button>
      </div>
      { isInfoVisible ? <p>{ data.info }</p> : null }
    </section>
  );
}

export default Question;

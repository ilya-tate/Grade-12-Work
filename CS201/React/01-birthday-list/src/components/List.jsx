import React from 'react';

const List = ({ people, removePerson }) => {
  return people.map(person => {
    const { id, name, age, image } = person;
    return (
      <article className="list" key={ id } >
        <img src={ image } alt={ name } />
        <div>
          <h4>{ name }</h4>
          <p>{ age }</p>
          <button onClick={ () => removePerson(id) }>Remove</button>
        </div>
      </article>
    );
  });
}

export default List

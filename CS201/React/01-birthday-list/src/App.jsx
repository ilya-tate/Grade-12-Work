import React, { useState } from 'react';
import data from './util/data';
import List from './components/List';

function App() {
  const [people, setPeople] = useState(data);
  const removePerson = id => {
    const newPeople = people.filter(person => {
      return person.id !== id;
    });
    setPeople(newPeople);
  }

  return (
    <main>
      <section className="container">
        <h3>{ people.length } Birthdays Today</h3>
        <List people={ people } removePerson={ removePerson } />
        <div className="buttons">
          <button onClick={ () => setPeople([]) }>Clear All</button>
          <button onClick={ () => setPeople(data) }>Reset</button>
        </div>
      </section>
    </main>
  );
}

export default App;

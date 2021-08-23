import { default as data } from './util/questions';
import Questions from './components/Questions';

function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and answers about login</h3>
        <Questions data={ data } ></Questions>
      </div>
    </main>
  );
}

export default App;

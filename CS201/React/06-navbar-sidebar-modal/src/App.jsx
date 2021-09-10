import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { Home } from './Pages';
import { links } from './util/consts';

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        {/* <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="*">
        <Error />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
        { links
          .filter(link => link.text !== 'Home')
          .map(link => {
            const { id, url, page } = link;
            return (
            <Route key={ id } path={ url }>
              { page }
            </Route>
            );
          })
        }
      </Switch>
    </>
  );
}

export default App;

import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Products from './Pages/Products';
import Error from './Pages/Error';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/">
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
        </Route>
      </Switch>
    </>
  );
}

export default App;

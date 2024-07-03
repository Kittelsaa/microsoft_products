import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import Products from './pages/Products';
import Support from './pages/Support';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <Home /> 
          </Route>
          <Route path="/products" exact>
            <Products /> 
          </Route>
          <Route path="/support" exact>
            <Support /> 
          </Route>
        </Switch>
    </Router>
  );
}

export default App;


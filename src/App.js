import React from 'react';
import { Route, Link } from "react-router-dom";

//Components
import Signup from './components/Signup';
import Login from './components/Login';
import ProductList from './components/products/ProductList';

//Authentication
import PrivateRoute from './utils/PrivateRoute';



function App() {
  return (
    <div className="App">
      <div className="nav-links">
          <Link to="/signup">Sign up!</Link>
          <Link to="/">Login</Link>
          <Link to="/">Products</Link>
      </div>
         <Route exact path="/" component={ProductList} />
         <Route  path="/signup" component={Signup} />
         <Route  path="/login" component={Login} />
  
    </div>
  );
}

export default App;

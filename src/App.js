import './App.css';
import Login from './login';
import SignUp from './signup'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="box">
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

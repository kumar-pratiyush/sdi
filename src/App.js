import './App.css';
import Login from './login';
import SignUp from './signup';
import Registered from './registered';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './landing';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="box">
            <Switch>
              <Route exact path='/' component={SignUp} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/registered" component={Registered} />
              <Route path="/landing" component={Landing} />
            </Switch>
          
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

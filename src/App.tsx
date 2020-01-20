import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Join from './pages/Join';
import Host from './pages/Host';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact path="/" to="join" />
        <Route path="/join" component={Join} />
        <Route path="/host" component={Host} />
      </Switch>
    </Router>
  );
};

export default App;

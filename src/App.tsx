import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import firebase, { auth, provider } from './firebase';
import Join from './pages/Join';
import Host from './pages/Host';
import Welcome from './pages/Welcome';
import GetStarted from './pages/GetStarted';

import UserContext from './context/UserContext';

interface Props {
  location: string;
}
const NoMatch = ({ location }: Props) => (
  <div>No route found for {location}</div>
);

const App: React.FC = () => {
  const [user, setUser] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    auth.onAuthStateChanged(newUser => {
      if (newUser) {
        setUser(newUser);
      }
    });
  }, []);

  const logOutUser = React.useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => (window.location.href = '/'));
  }, []);

  const WhoAmI = () => {
    return (<UserContext.Consumer>
      {value => <div>{value?.displayName}</div>}
    </UserContext.Consumer>);
  }

  const redirectTo = user ? '/getStarted' : '/welcome';

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Switch>
          <Redirect exact path="/" to={redirectTo} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/getStarted" component={GetStarted} />
          {/* <Route path="/join" component={Join} /> */}
          {/* <Route path="/host" component={Host} /> */}
          {/* <Route path="/who" component={WhoAmI} /> */}
          <Route component={NoMatch} />
        </Switch>
        <button onClick={logOutUser}>Log Out</button>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

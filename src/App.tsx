import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import firebase, { auth, provider } from "./firebase";
import Join from "./pages/Join";
import Host from "./pages/Host";
import Welcome from "./pages/Welcome";
import GetStarted from "./pages/GetStarted";

import StatusBar from "./components/StatusBar";

import UserContext from "./context/UserContext";

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

  const redirectTo = user ? "/getStarted" : "/welcome";

  const guestRoutes = (
    <>
      <Redirect exact path="/" to={redirectTo} />
      <Route path="/welcome" component={Welcome} />
    </>
  );

  const authRoutes = (
    <>
      <Route path="/getStarted" component={GetStarted} />
      <Redirect to="/getStarted" />
    </>
  );

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Switch>
          {user ? authRoutes : guestRoutes}
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;

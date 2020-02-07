import React from "react";

import firebase from "../firebase";

import UserContext from "../context/UserContext";

interface UserTextProps {
  user: firebase.User | null;
}

const logOutUser = () => {
  firebase
    .auth()
    .signOut()
    .then(() => (window.location.href = "/"));
};

const UserText = ({ user }: UserTextProps) => {
  if (!user) {
    return <span>Loading…</span>;
  }

  return <span>Welcome, {user.displayName}</span>;
};

const StatusBar = () => (
  <>
    <UserContext.Consumer>
      {user => <UserText user={user} />}
    </UserContext.Consumer>
    <button onClick={logOutUser}>Log Out</button>
  </>
);

export default StatusBar;

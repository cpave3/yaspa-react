import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/MainWrapper';
import { Link } from 'react-router-dom';

import firebase, { database } from '../firebase';

const FormWrapper = styled.form`
  width: 250px;
  > * {
    margin: 15px 0;
  }
`;

const Host: React.FC = () => {
  const [code, setCode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  const handleSubmit = React.useCallback((event: React.FormEvent) => {
    event.preventDefault();
    firebase
      .auth()
      .signInAnonymously()
      .then(async (value) => {
        const user = firebase.auth().currentUser;
        if (user !== null) {
          await user.updateProfile({ displayName: name });
        }
        return user;
      })
      .then((user) => {
        const session = {
          password,
          ownerUid: user?.uid,
        };
        database.ref(`sessions/${code}`).set(session, () => console.log('set done'));
      })
      .then(() => (window.location.href = '/who')) 
      .catch(error => console.error(error.message));
  }, [name, code, password]);

  return (
    <Main>
      <FormWrapper onSubmit={handleSubmit}>
        <Header title="Host." subtitle="Your own session." />
        <InputField
          placeholder="Your Name"
          value={name}
          onChange={setName}
          fullWidth
        />
        <InputField
          placeholder="Room Code"
          value={code}
          onChange={setCode}
          fullWidth
        />
        <InputField
          placeholder="Password"
          value={password}
          onChange={setPassword}
          fullWidth
        />
        <Button text="Host" color={colors.emerald} fullWidth type="submit" />
      </FormWrapper>
      <Footer>
        <Link to="/join">
          <Button text="Join an existing session" color={colors.peterRiver} />
        </Link>
      </Footer>
    </Main>
  );
};

export default Host;

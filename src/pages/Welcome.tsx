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

const Welcome: React.FC = () => {
  const [name, setName] = React.useState('');

  const handleSubmit = React.useCallback((event: React.FormEvent) => {
    event.preventDefault();
    firebase
      .auth()
      .signInAnonymously()
      .then(async (_value) => {
        const user = firebase.auth().currentUser;
        if (user !== null) {
          await user.updateProfile({ displayName: name });
        }
        return user;
      })
      .then(() => (window.location.href = '/')) 
      .catch(error => console.error(error.message));
  }, [name]);

  return (
    <Main>
      <FormWrapper onSubmit={handleSubmit}>
        <Header title="Welcome." subtitle="Let's get started." />
        <InputField
          placeholder="What is your name?"
          value={name}
          onChange={setName}
          fullWidth
        />
        <Button disabled={!name} text="Looks Good" color={colors.emerald} fullWidth type="submit" />
      </FormWrapper>
    </Main>
  );
};

export default Welcome;

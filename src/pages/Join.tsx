import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../constants/colors';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Main = styled.main`
  font-family: 'Montserrat', sans-serif;
  background-color: ${colors.belizeHole};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.form`
  width: 250px;
  > * {
    margin: 15px 0;
  }
`;

const Title = styled.h1`
  font-family: cursive;
  color: ${colors.peterRiver};
  margin: 0;
  padding: 0;
`;

const Join: React.FC = () => {
  const [code, setCode] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Main>
      <Header>
        <Title>Yaspa</Title>
      </Header>
      <FormWrapper>
        <InputField
          placeholder="Room Code"
          value={code}
          onChange={setCode}
          label="Enter your room code"
          darkMode
          fullWidth
        />
        <InputField
          placeholder="Password"
          value={password}
          onChange={setPassword}
          label="Enter the password"
          darkMode
          fullWidth
        />
        <Button text="Connect" color={colors.emerald} fullWidth />
      </FormWrapper>
      <Footer>
        <Link to="host">
          <Button text="Or Host your own" color={colors.peterRiver} />
        </Link>
      </Footer>
    </Main>
  );
};

export default Join;

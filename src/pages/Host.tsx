import React from 'react';
import styled from 'styled-components';
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

const Host: React.FC = () => {
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
          label="Name your new room!"
          darkMode
          fullWidth
        />
        <InputField
          placeholder="Password"
          value={password}
          onChange={setPassword}
          label="Set a password (optional)"
          darkMode
          fullWidth
        />
        <Button text="Host" color={colors.emerald} fullWidth />
      </FormWrapper>
      <Footer>
        <a href="/">Or join an existing session</a>
      </Footer>
    </Main>
  );
};

export default Host;

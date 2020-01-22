import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import colors from '../constants/colors';
import InputField from '../components/InputField';
import Button from '../components/Button';
import Header from '../components/Header';
import Main from '../components/MainWrapper';



const FormWrapper = styled.form`
  width: 250px;
  > * {
    margin: 15px 0 0 0;
  }
`;

const Join: React.FC = () => {
  const [code, setCode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    <Main>
      <FormWrapper>
        <Header title="Join." subtitle="An existing session." />
        <InputField
          placeholder="Your Name"
          value={name}
          onChange={setName}
          darkMode
          fullWidth
        />
        <InputField
          placeholder="Room Code"
          value={code}
          onChange={setCode}
          darkMode
          fullWidth
        />
        <InputField
          placeholder="Password"
          value={password}
          onChange={setPassword}
          darkMode
          fullWidth
        />
        <Button text="Connect" color={colors.emerald} fullWidth />
        <Link to="/host">or host your own</Link>
      </FormWrapper>
    </Main>
  );
};

export default Join;

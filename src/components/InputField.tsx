import * as React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

interface Props {
  placeholder: string;
  value?: string;
  darkMode?: boolean;
  fullWidth?: boolean;
  onChange: (value: string) => void;
}

const InputFieldElement = styled.input`
  border-radius: 0px;
  border: 1px solid ${colors.clouds};
  padding: 10px;
  background-color: white;
  color: ${colors.midnightBlue};
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  font-size: 1.1rem;
  ::placeholder {
    color: ${colors.silver}
  }
`;

const LabelElement = styled.label`
  color: ${colors.wetAsphalt};
  margin-bottom: 5px;
  position: absolute;
  top: 25px; 
  left: 10px;
  font-size: 1.1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding-top: 15px;
`;

const InputField = ({ onChange, placeholder, value }: Props) => {
  return (
    <Wrapper>
      <InputFieldElement
        key={1}
        type="text"
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </Wrapper>
  );
};

export default InputField;

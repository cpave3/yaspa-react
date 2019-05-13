import * as React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface IProps {
  placeholder: string;
  value?: string;
  label: string;
  darkMode?: boolean;
  fullWidth?: boolean;
  onChange: (value: string) => void;
}

const InputFieldElement = styled.input`
  border-radius: 3px;
  border-color: ${colors.silver};
  padding: 10px;
  background-color: ${colors.clouds};
  color: ${colors.midnightBlue};
  width: 100%;
  -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
  max-width: 100%;
  box-sizing: border-box;
`;

const LabelElement = styled.label`
  color: ${colors.clouds};
  margin-bottom: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const InputField = (props: IProps) => {
  return (
    <Wrapper>
      <LabelElement>{props.label}</LabelElement>
      <InputFieldElement
        key={1}
        type="text"
        onChange={e => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        value={props.value}
      />
    </Wrapper>
  );
};

export default InputField;

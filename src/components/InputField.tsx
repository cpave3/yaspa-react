import * as React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface IProps {
  placeholder: string;
  value: string;
  label: string;
  darkMode?: boolean;
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = (props: IProps) => {
  const InputFieldElement = styled.input`
    border-radius: 3px;
    border-color: ${colors.silver};
    padding: 10px;
    background-color: ${colors.clouds};
    color: ${colors.midnightBlue};
    min-width: ${props.fullWidth ? "100%" : "150px"};
    -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
  `;

  const LabelElement = styled.label`
    color: ${props.darkMode ? colors.clouds : colors.midnightBlue};
    margin-bottom: 5px;
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  return (
    <Wrapper>
      <LabelElement>{props.label}</LabelElement>
      <InputFieldElement
        type="text"
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    </Wrapper>
  );
};

export default InputField;

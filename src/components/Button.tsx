import * as React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface IProps {
  text: string;
  fullWidth: boolean;
  color?: string;
  onClick?: () => void;
}

const Button = (props: IProps) => {
  const ButtonElement = styled.button`
    border-radius: 5px;
    border-color: transparent;
    padding: 10px;
    background-color: ${props.color || colors.peterRiver};
    color: ${colors.clouds};
    min-width: ${props.fullWidth ? "100%" : "150px"};
    -webkit-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.75);
  `;

  return <ButtonElement onClick={props.onClick}>{props.text}</ButtonElement>;
};

export default Button;

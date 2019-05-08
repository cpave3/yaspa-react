import * as React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

interface IProps {
  text: String;
  extraLarge: Boolean;
  onClick?: () => void;
}

const Button = (props: IProps) => {

  const ButtonElement = styled.button`
    border-radius: 5px;
    padding: 10px;
    background-color: ${colors.peterRiver};
    color: ${colors.clouds};
    min-width: 150px;
  `;

  return (
    <ButtonElement 
      onClick={props.onClick}
    >
      {props.text}
    </ButtonElement>
  );
};

export default Button;

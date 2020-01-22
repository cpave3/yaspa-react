import * as React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

interface Props {
  text: string;
  fullWidth?: boolean;
  color?: string;
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonElement = styled.button`
  border-color: transparent;
  padding: 10px;
  font-size: 1.1rem;
  background-color: ${colors.emerald};
  color: ${colors.clouds};
  min-width: 100%;
`;

const Button = ({ disabled, onClick, text, color, type }: Props) => {
  const background = disabled ? colors.silver : color || colors.emerald;
  return (
    <ButtonElement disabled={disabled} onClick={onClick} style={{ background }} type={type || 'button'}>
      {text}
    </ButtonElement>
  );
};

export default Button;

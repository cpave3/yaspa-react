import * as React from "react";
import styled from "styled-components";

import colors from '../constants/colors';

interface IProps {
  children: React.ReactNode;
}

const FooterElement = styled.footer`
  color: ${colors.clouds};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
`;

const Footer = (props: IProps) => {
  return (
    <FooterElement>
      {props.children}
    </FooterElement>
  );
};

export default Footer;

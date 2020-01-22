import * as React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

interface Props {
  title: string;
  subtitle: string;
}

const Title = styled.h1`
  color: ${colors.midnightBlue};
  margin: 0;
  font-size: 3.1rem;
  letter-spacing: 5px;
  padding: 0;
  font-weight: 400;
`;

const Subtitle = styled.sub`
  font-size: 1.1rem;
  color: ${colors.silver};
  padding-left: 5px;
`;

const Header = ({ title, subtitle}: Props) => {
  return (
    <>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </>
  );
};

export default Header;

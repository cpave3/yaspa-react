import React, { FunctionComponent } from "react";
import StatusBar from "./StatusBar";

import styled from "styled-components";

const STATUS_BAR_HEIGHT = 30;

const Main = styled.main`
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${STATUS_BAR_HEIGHT}px);
`;

const StatusBarContainer = styled.div`
  height: ${STATUS_BAR_HEIGHT}px;
`;

const MainWrapper: FunctionComponent = ({ children }) => (
  <Main>
    {children}
    <StatusBarContainer>
      <StatusBar />
    </StatusBarContainer>
  </Main>
);

export default MainWrapper;

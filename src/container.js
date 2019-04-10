import * as React from "react";
import styled from "styled-components";

const screen = {
  large: 1366,
  medium: 768,
  small: 375
};

const ContainerStyle = styled.div`
  margin: auto;
  @media (min-width: ${screen.large}) {
    width: 50%;
  }
`;

export const Container = ({ children }) => (
  <ContainerStyle>{children}</ContainerStyle>
);

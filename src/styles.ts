import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const colors = {
  primary: '#FFC93F',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: #222;
    color: #fff;
  }

  body, input {
    font-family: 'Roboto', sans-serif;
  }
`;

export const Layout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 35px;
`;

export const Nav = styled.nav`
  display: flex;
  margin-bottom: 45px;
`;

export const TabButton = styled(NavLink)`
  align-items: center;
  background: #000;
  color: #fff;
  display: flex;
  height: 62px;
  justify-content: center;
  text-decoration: none;
  width: 120px;

  &:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &.active {
    background: ${colors.primary};
    color: #000;
  }
`;


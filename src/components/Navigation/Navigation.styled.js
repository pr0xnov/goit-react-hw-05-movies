import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  color: #000000;
  margin: 0 0.8rem;
  font-size: 1.3rem;
  list-style: none;
  &.active {
    border-bottom: 3px solid red;
    color: red;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin-bottom: 20px;
`;

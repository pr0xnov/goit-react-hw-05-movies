import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BlockDetails = styled.div`
  display: flex;
  padding: 20px;
`;
export const BlockInfo = styled.div`
  margin-left: 20px;
`;
export const BlocLinks = styled.div`
  margin-bottom: 20px;
`;

export const Links = styled(NavLink)`
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
`;

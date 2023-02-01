import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: 50px;
  border-bottom: 2px solid #ff6c00;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: #000;
  font-size: 17px;
  margin-left: 20px;
  font-weight: 600;
  transition: color 300ms linear;

  &:hover {
    color: #ff6c00;
  }

  &.active {
    color: #ff6c00;
  }
`;

export const Nav = styled.nav`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

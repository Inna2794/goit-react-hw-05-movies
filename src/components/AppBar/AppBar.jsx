import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink } from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/goit-react-hw-05-movies/">Home</StyledLink>
          <StyledLink to="/goit-react-hw-05-movies/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};

export default AppBar;

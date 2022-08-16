// import { NavLink } from 'react-router-dom';
import { Nav, Link } from './Navigation.styled';
import { ToastContainer } from 'react-toastify';

const Navigation = () => {
  return (
    <>
      <Nav>
        <Link to="/" activeclassname="current">
          Home
        </Link>
        <Link to="/movies" activeclassname="current">
          Movies
        </Link>
      </Nav>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default Navigation;

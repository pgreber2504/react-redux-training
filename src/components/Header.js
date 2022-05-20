import { useDispatch } from 'react-redux'
import classes from './Header.module.css';

import { authActions } from '../store/Auth';

const Header = (props) => {
  const dispatch = useDispatch();

  const logoutHandler = e => {
    dispatch(authActions.logout())
  }

  const navLinks = (
    <nav>
      <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  )

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {props.isAuth && navLinks}
    </header>
  );
};

export default Header;

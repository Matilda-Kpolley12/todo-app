import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/protected">Protected</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    );
}

export default Header

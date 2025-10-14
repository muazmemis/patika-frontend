import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/users">Users</NavLink>
    </nav>
  );
}

export default Navbar;

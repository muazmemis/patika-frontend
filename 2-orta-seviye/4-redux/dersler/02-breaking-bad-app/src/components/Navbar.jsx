import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '1rem',
        fontSize: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/location">Location</NavLink>
    </nav>
  );
}

export default Navbar;

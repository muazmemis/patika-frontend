import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { loggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">Ecommerce</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            {/* <Link to="/">Home</Link> */}
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>

      <div className={styles.right}>
        {loggedIn ? (
          <>
            {/* <Link to="/cart">
              <Button>Cart</Button>
            </Link> */}
            <Link to="/profile">
              <Button>Profile</Button>
            </Link>
            {/* <Link to="/logout">
              <Button>Logout</Button>
            </Link> */}
          </>
        ) : (
          <>
            <Link to="/signin">
              <Button colorScheme="pink">Login</Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="pink">Register</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

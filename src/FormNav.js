import { NavLink } from "react-router-dom";
import styles from "./SignupForm.module.css";
import { FaUserCircle } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { useSignupContext } from "./SignupContext";
const FormNav = () => {
  const { profile, social } = useSignupContext();
  return (
    <nav className={styles.nav_container}>
      <ul>
        <li>
          <NavLink activeClassName={styles.selected} to="/" exact>
            <FaUserCircle className={styles.icon} />
            Profile
            <FaCircle className={styles.circle_icon} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.selected} to="/social">
            <FaShareAlt
              className={styles.icon}
              style={social && { color: "#999" }}
            />
            Social
            <FaCircle className={styles.circle_icon} />
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={styles.selected} to="/review" exact>
            Review
            <FaCircle className={styles.circle_icon} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default FormNav;

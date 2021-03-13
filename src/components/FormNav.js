import { NavLink } from "react-router-dom";
import styles from "./SignupForm.module.css";
import { FaUserCircle } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import { useSignupContext } from "./SignupContext";
const FormNav = () => {
  const { profile, social } = useSignupContext();
  return (
    <nav className={styles.nav_container}>
      <ul>
        <li>
          <NavLink activeClassName={styles.selected} to="/" exact>
            <FaUserCircle
              className={styles.icon}
              style={!profile.name && { color: "#999" }}
            />
            Profile
            <FaCircle className={styles.circle_icon} />
          </NavLink>
        </li>
        <li>
          {profile.name ? (
            <NavLink activeClassName={styles.selected} to="/social">
              <FaShareAlt
                className={styles.icon}
                style={!social.twitter && { color: "#999" }}
              />
              Social
              <FaCircle className={styles.circle_icon} />
            </NavLink>
          ) : (
            <a className={styles.disabled}>
              <FaShareAlt
                className={styles.icon}
                style={!social.twitter && { color: "#999" }}
              />
              Social
              <FaCircle className={styles.circle_icon} />
            </a>
          )}
        </li>
        <li>
          {profile.name && social.twitter ? (
            <NavLink activeClassName={styles.selected} to="/review">
              <FaCheckDouble
                className={styles.icon}
                style={!(profile.name && social.twitter) && { color: "#999" }}
              />
              Review
              <FaCircle className={styles.circle_icon} />
            </NavLink>
          ) : (
            <a className={styles.disabled}>
              <FaCheckDouble
                className={styles.icon}
                style={!(profile.name && social.twitter) && { color: "#999" }}
              />
              Review
              <FaCircle className={styles.circle_icon} />
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default FormNav;

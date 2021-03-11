import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";
import styles from "./SignupForm.module.css";
import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import ReviewForm from "./ReviewForm";
import { SignupContextProvider } from "./SignupContext";
import { FaUserCircle } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
const SignupForm = () => {
  return (
    <BrowserRouter>
      <SignupContextProvider>
        <nav className={styles.nav_container}>
          <ul>
            <li>
              <NavLink to="/">
                <FaUserCircle className={styles.icon} />
                Profile
                <FaCircle className={styles.circle_icon} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/social">
                <FaShareAlt className={styles.icon} />
                Social
                <FaCircle className={styles.circle_icon} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/review">
                Review
                <FaCircle className={styles.circle_icon} />
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={ProfileForm} />
          <Route path="/social" component={SocialForm} />
          <Route path="/review" component={ReviewForm} />
        </Switch>
      </SignupContextProvider>
    </BrowserRouter>
  );
};

export default SignupForm;

import { Switch, Route, BrowserRouter, NavLink } from "react-router-dom";

import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import ReviewForm from "./ReviewForm";
import { SignupContextProvider } from "./SignupContext";

const SignupForm = () => {
  return (
    <BrowserRouter>
      <SignupContextProvider>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/social">Social</NavLink>
            </li>
            <li>
              <NavLink to="/review">Review</NavLink>
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

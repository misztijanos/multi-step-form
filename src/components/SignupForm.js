import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import ReviewForm from "./ReviewForm";

const SignupForm = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/social">Social</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact>
          <ProfileForm />
        </Route>
        <Route path="/social">
          <SocialForm />
        </Route>
        <Route path="/review">
          <ReviewForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default SignupForm;

import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import ReviewForm from "./ReviewForm";

const FormTabs = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={ProfileForm} />
        <Route path="/social" component={SocialForm} />
        <Route path="/review" component={ReviewForm} />
      </Switch>
    </AnimatePresence>
  );
};
export default FormTabs;

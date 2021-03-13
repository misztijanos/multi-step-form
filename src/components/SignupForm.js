import { BrowserRouter } from "react-router-dom";

import FormNav from "./FormNav";
import FormTabs from "./FormTabs";
import { SignupContextProvider } from "./SignupContext";

const SignupForm = () => {
  return (
    <BrowserRouter>
      <SignupContextProvider>
        <FormNav />
        <FormTabs />
      </SignupContextProvider>
    </BrowserRouter>
  );
};

export default SignupForm;

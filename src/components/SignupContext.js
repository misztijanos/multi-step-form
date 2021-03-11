import { createContext, useContext, useState } from "react";

const signupContext = createContext(null);
export const useSignupContext = () => useContext(signupContext);

export function SignupContextProvider({ children }) {
  const [profile, setProfile] = useState({});
  const [social, setSocial] = useState({});
  return (
    <signupContext.Provider value={{ profile, setProfile, social, setSocial }}>
      {children}
    </signupContext.Provider>
  );
}

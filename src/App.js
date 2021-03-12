import "./App.css";
import background from "./817603_l.jpg";

import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="app" style={{ background: `url(${background})` }}>
      <div className="form-container">
        <SignupForm />
      </div>
    </div>
  );
}

export default App;

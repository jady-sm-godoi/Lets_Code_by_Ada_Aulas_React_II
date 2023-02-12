import { useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/home";
import { Login } from "./pages/Login/login";
import { SignUp } from "./pages/SignUp/signup";

function App() {
  const [actualPage, setActualPage] = useState("login");

  const newPage = () => {
    if (actualPage === "login") {
      return (
        <Login
          goToSignUp={() => setActualPage("signup")}
          changePage={() => setActualPage("home")}
        />
      );
    } else if (actualPage === "signup") {
      return <SignUp changePage={() => setActualPage("login")}/>;
    } else if (actualPage === "home") {
      return <Home changePage={() => setActualPage("login")} />;
    }
  };

  return <>{newPage()}</>;
}

export default App;

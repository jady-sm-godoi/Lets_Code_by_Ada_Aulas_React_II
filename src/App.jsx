import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/home";
import { Login } from "./pages/Login/login";
import { SignUp } from "./pages/SignUp/signup";

function App() {
  // const [actualPage, setActualPage] = useState("login");

  return (
    <Router>
      <Routes>
        <Route exact path="/sign-up" element={<SignUp />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
    
    // <>
    //   {actualPage === "login" && (
    //     <Login
    //       goToSignUp={() => setActualPage("signup")}
    //       changePage={() => setActualPage("home")}
    //     />
    //   )}
    //   {actualPage === "signup" && (
    //     <SignUp changePage={() => setActualPage("login")} />
    //   )}
    //   {actualPage === "home" && (
    //     <Home changePage={() => setActualPage("login")} />
    //   )}
    // </>
  );
}

export default App;

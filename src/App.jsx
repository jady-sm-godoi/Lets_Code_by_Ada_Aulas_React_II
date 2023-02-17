import { useReducer, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/home";
import { Login } from "./pages/Login/login";
import { SignUp } from "./pages/SignUp/signup";

const initialState = { currentPage: "login" };

function reducer(state, action) {
  switch (action.type) {
    case "change_page":
      return {
        currentPage: action.payload,
      };
  }
}

function App() {
  // const [actualPage, setActualPage] = useState("login");
  
  //NAVEGAÇÃO ENTRE PAG. COM USEREDUCER
  const [globalState, dispatch] = useReducer(reducer, initialState);

  const handleOnClickGoPage = (page) => {
    dispatch({ type: "change_page", payload: page });
  };

  return (
    <>
      {globalState.currentPage === "login" && (
        <Login
          goToSignUp={handleOnClickGoPage}
          changePage={handleOnClickGoPage}
        />
      )}
      {globalState.currentPage === "signup" && (
        <SignUp changePage={handleOnClickGoPage} />
      )}
      {globalState.currentPage === "home" && (
        <Home changePage={handleOnClickGoPage} />
      )}
    </>

    //NAVEGAÇÃO ENTRE PAG. COM REACT-ROUTER-DOM
    // <Router>
    //   <Routes>
    //     <Route exact path="/sign-up" element={<SignUp />}></Route>
    //     <Route exact path="/login" element={<Login />}></Route>
    //     <Route exact path="/" element={<Home />}></Route>
    //   </Routes>
    // </Router>

    //NAVEGAÇÃO ENTRE PAG. COM USESTATE:
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

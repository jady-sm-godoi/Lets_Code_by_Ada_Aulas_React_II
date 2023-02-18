import { createContext, useReducer, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Home } from "./pages/Home/";
import { Login } from "./pages/Login/";
import { Photo } from "./pages/Photo/";
import { SignUp } from "./pages/SignUp/";

const initialState = {
  currentPage: "login",
  user: {
    userName: "@adatech",
    photos: [],
    highLightImage: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "change_page":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "add_user":
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
      };
    case "add_photos_user":
      return {
        ...state,
        user: {
          ...state.user,
          photos: action.payload,
        },
      };
    case "add_highlight_image":
      const selectedImage = state.user.photos.find((photo) => {
        return photo.id === action.payload;
      });
      return {
        ...state,
        user: {
          ...state.user,
          highLightImage: selectedImage,
        },
      };
      case "remove_highlight_image":
        return{
          ...state,
          user: {
            ...state.user,
            highLightImage: null
          }
        }
    default:
      return state;
  }
}

//NAVEGAÇÃO ENTRE PAG. COM USEREDUCER e CREATECONTEXT
export const InstaContext = createContext(initialState);

function App() {
  // const [actualPage, setActualPage] = useState("login");

  //NAVEGAÇÃO ENTRE PAG. COM USEREDUCER
  const [globalState, dispatch] = useReducer(reducer, initialState);

  // const handleOnClickGoPage = (page) => {
  //   dispatch({ type: "change_page", payload: page });
  // };

  return (
    <InstaContext.Provider value={{ state: globalState, dispatch: dispatch }}>
      {globalState.currentPage === "login" && <Login />}
      {globalState.currentPage === "signup" && <SignUp />}
      {globalState.currentPage === "home" && <Home />}
      {globalState.currentPage === "photo" && <Photo />}
    </InstaContext.Provider>

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

import React from "react";
import styled from "styled-components";
import { Route, Routes, BrowserRouter as Router, NavLink } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import NewsBoard from "./Pages/NewsBoard/NewsBoard";

function App() {
  const obj = {
    color: "black",
    fontSize: "30px",
    textDecoration: "none",
  };

  const Button = styled.button`
    color: red;
  `;
  return (
    <div className='App'>
      <Router>
        <div>
          <NavLink to='/' style={obj}>
            <Button>main</Button>
            <br />
          </NavLink>
          <NavLink to='/posts' style={obj}>
            posts
            <br />
          </NavLink>
        </div>
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<NewsBoard />} path='/posts' />
        </Routes>
      </Router>
      <NewsBoard />
    </div>
  );
}

export default App;

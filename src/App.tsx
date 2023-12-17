import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainPage from "./Pages/MainPage";
import NewsBoard from "./Pages/NewsBlock/NewsBoard/index";
import AboutUs from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<NewsBoard />} path='/posts' />
          <Route element={<AboutUs />} path='/about-us' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

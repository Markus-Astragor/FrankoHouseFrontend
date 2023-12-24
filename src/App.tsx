import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainPage from "./Pages/MainPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import NewsBoardRoutes from "./Pages/NewsBlock/NewsBoard/NewsBoardRoutes";

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<NewsBoardRoutes />} path='/posts/*' />
          <Route element={<AboutUs />} path='/about-us' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

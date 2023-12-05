import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import MainPage from "./Pages/MainPage/MainPage";
import NewsBoard from "./Pages/NewsBlock/NewsBoard/NewsBoard";

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route element={<MainPage />} path='/' />
          <Route element={<NewsBoard />} path='/posts' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

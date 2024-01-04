import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainPage from "./Pages/MainPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import NewsBoardRoutes from "./Pages/NewsBlock/NewsBoard/NewsBoardRoutes";
import { LanguageContext } from "./Context/LanguageContext";
import AdminAuth from "./Pages/AdminAuth/AdminAuth";

function App() {
  const [language, setLanguage] = useState<string>("ua");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className='App'>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route element={<MainPage />} path='/' />
            <Route element={<NewsBoardRoutes />} path='/posts/*' />
            <Route element={<AboutUs />} path='/about-us' />
            <Route element={<AdminAuth />} path='/admin/auth' />
          </Routes>
        </Router>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;

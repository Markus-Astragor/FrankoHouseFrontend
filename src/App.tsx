import React, { useState } from "react";
import { LanguageContext } from "./Context/LanguageContext";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainPage from "./Pages/MainPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import NewsBoardRoutes from "./Pages/NewsBlock/NewsBoard/NewsBoardRoutes";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import AdminAuth from "./Pages/AdminAuth/AdminAuth";
import GetPosts from "./Pages/AdminPanel/GetPosts/GetPosts";
import CreatePost from "./Pages/AdminPanel/CreatePost/CreatePost";

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
            <Route element={<AdminPanel />} path='admin'>
              <Route path='view-posts' element={<GetPosts />} />
              <Route path='create-post' element={<CreatePost />} />
            </Route>
            <Route element={<AdminAuth />} path='/admin/auth' />
          </Routes>
        </Router>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;

import React, { useState } from "react";
import { LanguageContext } from "./Context/LanguageContext";
// import NewsBoardRoutes from "./Pages/NewsBlock/NewsBoard/NewsBoardRoutes";

import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import MainPage from "./Pages/MainPage";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import AdminAuth from "./Pages/AdminAuth/AdminAuth";
import GetPosts from "./Pages/AdminPanel/GetPosts/GetPosts";
import CreatePost from "./Pages/AdminPanel/CreatePost/CreatePost";
import AddMuseum from "./Pages/AdminPanel/AddMuseum/AddMuseum";
import EditPost from "./Pages/AdminPanel/EditPost/EditPost";
import GetMuseums from "./Pages/AdminPanel/GetMuseums/GetMuseums";
import NewsBoardRoutes from "./Pages/NewsBlock/NewsBoard/NewsBoardRoutes";

function App() {
  const [language, setLanguage] = useState<string>("ua");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className='App'>
        <GlobalStyles />
        <Router>
          <Routes>
            <Route element={<MainPage />} path='/' />
            <Route element={<NewsBoardRoutes />} path='/*' />
            <Route element={<AdminPanel />} path='admin'>
              <Route index element={<Navigate to='view-posts' replace />} />
              <Route path='view-posts' element={<GetPosts />} />
              <Route path='view-museums' element={<GetMuseums />} />
              <Route path='view-posts/:id' element={<EditPost />} />
              <Route path='create-post' element={<CreatePost />} />
              <Route path='add-museum' element={<AddMuseum />} />
            </Route>
            <Route element={<AdminAuth />} path='/admin/auth' />
          </Routes>
        </Router>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;

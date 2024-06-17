import React from "react";
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
import CreatePartner from "./Pages/AdminPanel/Partners/CreatePartner/CreatePartner";
import GetPartners from "./Pages/AdminPanel/Partners/GetPartners/GetPartners";
import EditMuseum from "./Pages/AdminPanel/EditMuseum/EditMuseum";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/*' element={<Navigate to='/404' replace />} />

          <Route path='/' element={<MainPage />} />
          <Route path='/*' element={<NewsBoardRoutes />} />
          <Route path='admin' element={<AdminPanel />}>
            <Route index element={<Navigate to='view-posts' replace />} />
            <Route path='view-posts' element={<GetPosts />} />
            <Route path='view-museums' element={<GetMuseums />} />
            <Route path='view-museums/:id' element={<EditMuseum />} />
            <Route path='view-posts/:id' element={<EditPost />} />
            <Route path='create-post' element={<CreatePost />} />
            <Route path='create-partner' element={<CreatePartner />} />
            <Route path='view-partners' element={<GetPartners />} />
            <Route path='add-museum' element={<AddMuseum />} />
          </Route>
          <Route path='/admin/auth' element={<AdminAuth />} />
          <Route path='/404' element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

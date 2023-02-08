import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "../page/LoginPage";


const Router = () => (
    <React.Suspense>
        <Routes>
            <Route path="login" element={<LoginPage/>} />
        </Routes>
    </React.Suspense>
  );
  
  export default Router;
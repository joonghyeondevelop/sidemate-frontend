import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import HomePage from "../pages/HomePage/HomePage";
import ProjectDetailPage from "../pages/ProjectDetailPage/ProjectDetailPage";
import ProjectManagePage from "../pages/ProjectManagePage/ProjectManagePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/projects" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/projects/:id/manage" element={<ProjectManagePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

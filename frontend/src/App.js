import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/main/login";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import Dashboard from "./components/admin/dashboard";
import Signup from "./components/main/signup";
import NotFound from "./components/main/notFound";
import Home from "./components/main/home";
import AdminProfile from "./components/admin/profile";
import AddSlide from "./components/admin/addSlide";
import ManageSlide from "./components/admin/manageSlides";
// import BrowseSlides from "./components/main/browseSlides";
import { Toaster } from "react-hot-toast";
// import PPTViewer from "./components/main/pptViewer";
import ResetPassword from "./components/main/resetPassword";
import AdminAuthorisor from "./components/adminAuth";
import Authorisor from "./components/authenticator";
import BrowseSlides from "./components/main/browseSlides";
import PPTViewer from "./components/main/pptViewer";
import UserProfile from "./components/user/profile";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />

      <Routes>
        <Route
          element={
            <AdminAuthorisor>
              <Admin />
            </AdminAuthorisor>
          }
          path="admin"
        >
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<AddSlide />} path="addslide" />
          <Route element={<ManageSlide />} path="manageslide" />
          <Route element={<AdminProfile />} path="profile" />
        </Route>
        <Route
          element={
            <Authorisor>
              <User />
            </Authorisor>
          }
          path="user"
        >
          <Route element={<UserProfile />} path="profile" />
        </Route>
        <Route element={<Main />} path="main">
          <Route element={<Login />} path="signin" />
          <Route element={<Signup />} path="signup" />
          <Route element={<ResetPassword />} path="resetpassword" />
          <Route element={<Home />} path="home" />
          <Route element={<BrowseSlides />} path="browseSlides" />
          <Route element={<PPTViewer />} path="pptviewer/:id" />
          <Route element={<NotFound />} path="404" />
        </Route>
        <Route element={<Navigate to="/main/home" />} path="" />
        <Route element={<Navigate to="/main/404" />} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

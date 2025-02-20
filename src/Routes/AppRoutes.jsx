import Login from "../Layout/LoginLayout/Login";
import Signup from "../Layout/LoginLayout/Signup";
import ForgotPassword from "../Layout/LoginLayout/ForgotPassword";
import VerifyCode from "../Layout/LoginLayout/VerifyCode";
import MainLayout from "../Layout/DashboardLayout/DashboardLayout";
import {
  Dashboard,
  MyAttendence,
  Leaves,
  AddLeaves,
  ChangePassword,
  Profile,
} from "../pages";
import { Routes, Route } from "react-router-dom";

import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import NewPassword from "../Layout/LoginLayout/NewPassword";
import ProductList from "../Layout/ProductLayout/Collection";
import ProductLayout from "../Layout/ProductLayout/ProductLayout";
import Collection from "../Layout/ProductLayout/Collection";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginLayout />}>
        {/* <Route path="login" element={<ProductList />} />- */}
        <Route path="login" element={<Login />} />-
        <Route path="signup" element={<Signup />} />-
        <Route path="forgotpassword" element={<ForgotPassword />} />-
        <Route path="new-password" element={<NewPassword />} />-
        <Route path="verify-code" element={<VerifyCode />} />-
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="my-attendence" element={<MyAttendence />} />
        <Route path="leaves" element={<Leaves />} />

        <Route path="leaves/add-leaves" element={<AddLeaves />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="/" element={<ProductLayout />}>
        <Route path="product-list" element={<Collection />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

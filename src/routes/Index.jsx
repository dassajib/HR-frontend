import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "../pages/SignIn/Index";
import SignUp from "../pages/SignUp/Index";
import Dashboard from "../pages/Dashboard/Index";
import AppLayout from "../appLayout/Index";
import Information from "../pages/Information/Index";
import Attendance from "../pages/Attendance/Index";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="information" element={<Information />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;

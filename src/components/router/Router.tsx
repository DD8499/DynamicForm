import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LoginForm from "../Form/LoginForm";
import SignupForm from "../Form/SignupForm";

const Router = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/sign-up");
  }, []);
  return (
    <>
      <Routes>
        <Route index path="/login" element={<LoginForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
      </Routes>
    </>
  );
};

export default Router;

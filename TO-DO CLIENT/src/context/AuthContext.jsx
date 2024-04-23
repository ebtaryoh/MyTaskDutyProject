import { createContext, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children  }) => {
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || null;
  });

  const signInUser = async (formData, props) => {
    try {
      const { data } = await axiosInstance.post("/api/auth/signin", formData);
      console.log(data);
      setToken(data.token);
      localStorage.setItem("token", JSON.stringify(data.token));
      props.onHide();
    } catch (error) {
      console.log(error);
    }
  };
  const signUpUser = async (formData, props) => {
    try {
      const { data } = await axiosInstance.post("/api/auth/register", formData);
      console.log(data);
      setToken(data.token);
      localStorage.setItem("token", JSON.stringify(data.token));
      props.onHide();
    } catch (error) {
      console.log(error);
    }
  };

  const contextData = {
    name: "Ibitayo",
    token: token,

    signInUser,
    signUpUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

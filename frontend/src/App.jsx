import React from "react";
import Right from "./home/rightpart/Right";
import Left from "./home/leftpart/Left";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/Authprovider";
import { Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen overflow-hidden">
                <Left></Left>
                <Right></Right>
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="signup"
          element={authUser ? <Navigate to={"/"} /> : <Signup />}
        />
        <Route
          path="login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
      </Routes>
      <Toaster></Toaster>
    </>
    // <Loading/>
  );
};

export default App;

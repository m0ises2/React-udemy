import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1> Main App </h1>

      <NavBar />

      <hr />

      <Routes>
        <Route element={ <HomePage /> } path="/" />
        <Route element={ <LoginPage /> } path="login" />
        <Route element={ <AboutPage /> } path="about" />

        {/* This line will show the about component when the route does not exits,
        BUT will keep the not found url in the brwoser */}
          {/* <Route element={<AboutPage />} path="/*"/>  */}

        {/*
          This line will show the about component when the rout does not exits, but will change 
          the url to the one specified. In other terms it will redirect the user
          to the specified path
        */}
        <Route element={<Navigate to="/about" />} path="/*"/> 
      </Routes>
    </UserProvider>
  )
}

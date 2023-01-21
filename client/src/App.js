import "./bootstrap.min.css";
import Template from "./components/template2/Template";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar";
import Template1 from "./components/template1/Template1";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoutes";
import Home from "./components/home/home";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <Routes>
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Login" element={<Login />} />
      {
        
      }
      <Route
        path="/"
        element={
          <PrivateRoute
          >
            <NavigationBar />
            <Routes>
            <Route index={true} element={<HomePage />} />
            <Route path="resumes" element={<Home />} />
            <Route path="temp2" element={<Template1></Template1>} />
            <Route path="temp1" element={<Template></Template>} />
            </Routes>
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;

import "./bootstrap.min.css";
import Template from "./components/template2/Template";
import { Routes, Route, Navigate } from "react-router-dom";
import NavigationBar from "./components/navbar/Navbar";
import Template1 from "./components/template1/Template1";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoutes";
import HomePage from "./components/HomePage/HomePage";
import Resume from "./components/resume/Resume";
import { useAuth } from "./context/AuthContext";
function App() {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route exact path="/" element={<NavigationBar />}>
        <Route index={true} element={<HomePage />} />
        <Route path="resumes" element={<Resume />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Login" element={<Login />} />
        {currentUser && (
          <>
            <Route exact path="/temp2" element={<Template1></Template1>} />
            <Route exact path="temp1" element={<Template></Template>} />
          </>
        )}
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;

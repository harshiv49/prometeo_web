
import './bootstrap.min.css';
import Template from './components/template2/Template';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/navbar/Navbar';
import Template1 from "./components/template1/Template1";
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
         <Route path="/" element={<NavigationBar></NavigationBar>}>
         <Route index={true} element={<Template></Template>} />
         <Route index={true} path="template1" element={<Template1></Template1>}/>
         <Route path="SignUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;

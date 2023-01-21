import Template1 from './components/template1/Template1';
import Template from './components/template2/Template';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/navbar/Navbar';
import Home from './components/home/home';
import './bootstrap.min.css'
function App() {
  return (
    <Routes>
         <Route path="/" element={<NavigationBar></NavigationBar>}>
         <Route index={true} element={<Home/>} />
         <Route path='temp2' element={<Template1></Template1>} />
         <Route path='temp1' element={<Template></Template>} />
      </Route>
    </Routes>
  );
}

export default App;

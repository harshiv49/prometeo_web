
import './App.css';
import './bootstrap.min.css';
import Template from './components/template2/Template';
import { Routes, Route } from "react-router-dom";
import NavigationBar from './components/navbar/Navbar';


function App() {
  return (
    <Routes>
         <Route path="/" element={<NavigationBar></NavigationBar>}>
         <Route index={true} element={<Template></Template>} />
         
      </Route>
    </Routes>
  );
}

export default App;

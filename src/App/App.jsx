import {Route,Routes,} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
function App() {

  return (
   <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/ourRooms" element={<Home/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
   </Routes>
  )
}

export default App

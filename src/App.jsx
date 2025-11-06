import {BrowserRouter as Router,Route,Routes}from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";




import './App.css'
const App =()=>
{
 return(
   <div className="appcon">
    <Router>
     <Routes>
   
       <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/Skills" element={<Skills/>}/>
       <Route path="/Projects" element={<Projects/>}/>

     


     </Routes>  
     
   </Router>
   </div>
 )
}
export default App
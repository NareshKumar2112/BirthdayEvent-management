import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Services from "./pages/Services"
import Footer from "./components/Footer"
import Sidepanel from "./components/Sidepanel"
import Dashboard from "./pages/Dashboard"
import Bookingform from "./pages/Bookingform"
import Admin from "./pages/Admin"
import AdminNav from "./components/AdminNav"
import Thankyou from "./pages/Thankyou"
import Adminform from "./pages/Adminform"
import View from "./pages/View"
import Cancel from "./pages/Cancel"

function App() {

  return (

  <Router>
  
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/service" element={<Services/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/sidepanel" element={<Sidepanel/>}/>
  <Route path="/booking" element={<Bookingform/>}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/adminvav" element={<AdminNav/>}/>
  <Route path="/thankyou" element={<Thankyou/>}/>
  <Route path="/adminform" element={<Adminform/>}/>
  <Route path="/view" element={<View/>}/>
  <Route path="/cancel" element={<Cancel/>}/>
  </Routes>
  </Router>
  )
}

export default App

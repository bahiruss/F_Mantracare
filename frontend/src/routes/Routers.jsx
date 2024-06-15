import { Home } from "../pages/Home"
import Services from "../pages/Services"
import Contact from "../pages/Contact"
import DoctorDetails from "../pages/Doctors/DoctorDetails"
import Doctors from "../pages/Doctors/Doctors"
import { Routes, Route } from "react-router-dom"
import MyAccount from "../Dashboard/UserAccount/MyAccount"
import Dashboard from "../Dashboard/DoctorAccount/Dashboard"
import Signup_Login_Form from "../pages/Signup_Login_Form/Signup_Login_Form"

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/doctor" element={<Doctors/>}/>
    <Route path="/doctor/:id" element={<DoctorDetails/>}/>
    <Route path="/login" element={<Signup_Login_Form hideHeader={true}/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/users/profile/me" element={<MyAccount/>}/>
    <Route path="/users/profiles/me" element={<Dashboard/>}/>
  </Routes>
}

export default Routers

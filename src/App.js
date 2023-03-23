//import area
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/ui/Layout'
import BusinessRegister from './pages/BusinessRegister'
import Details from './pages/Details'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

//defination area
export default function App() {
  
    // hooks area


    //function defination area


    //return statement
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="details" element={<Details />}></Route>
                    {
                        //console.log(window.localStorage.getItem('jwt_token') )
                        window.localStorage.getItem('jwt_token')!==null && 
                        <Route path="business-register" element={<BusinessRegister />}></Route>
                    }
                   
                </Route>
            </Routes>
        </Router>
  )
}

//export area


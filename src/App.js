//import area
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/ui/Layout'
import BusinessRegister from './pages/BusinessRegister'
import Details from './pages/Details'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import SearchFilter from './pages/SearchFilter'

//funtional componantes
export default function App() {
    /*
    if(window.localStorage.getItem('jwt_token')===null){
        return <Login />
    }*/


    //return statement
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="details" element={<Details />}></Route>
                    <Route path="business-register" element={<BusinessRegister />}></Route>
                    <Route path="search" element={<SearchFilter />}></Route>
                </Route>
            </Routes>
        </Router>
  )
}

//export area


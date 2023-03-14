import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    return (
        <>
            <Container className='a_tbdr'>
                <h1>home</h1>
                <Header></Header>
                <main>
                    <Outlet></Outlet>
                </main>
                <Footer></Footer>
            </Container>
        </>
    )
}

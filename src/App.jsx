import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Aboutsn from "./sections/Aboutsn.jsx";

const App = () => {
    return (
        <main className={"max-w-7xl mx-auto z-10"}>
            <Navbar/>
            <Hero/>
            <Aboutsn />


        </main>
    )
}
export default App

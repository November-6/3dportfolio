import React from 'react'
import {useState} from 'react'

import { navLinks } from '../constants/index.js';

const NavItems = () => {
    return (
        <ul className={"nav-ul"}>
            {navLinks.map((item) => (
                <li key={item.id} className={"nav-li"}>
                    <a href={item.href} className={"nav-li_a"} onClick={() => {}}>
                        {item.name}
                    </a>

                </li>
            ))}
        </ul>
    )
}



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={" relative top-0 left-0 right-0 bg-black-100 "}>
            <div className={" max-w-7xl mx-auto bg-black-100 z-50"}>
                <div className={"flex justify-between items-center py-5 mx-auto relative c-space"}>
                    <a href="/" className={"text-blue-300 font-bold text-xl hover:text-green-400 transition-colors"}>
                    Notieeeeee
                    </a>

                    <button
                        onClick={toggleMenu}
                        className={"text-blue-200 hover:text-green-300 focus:outline-none sm:hidden flex"
                        }>
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6"/>
                    </button>


                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems onClick={closeMenu} />
                </nav>
            </div>
        </header>
    );
};
export default Navbar;
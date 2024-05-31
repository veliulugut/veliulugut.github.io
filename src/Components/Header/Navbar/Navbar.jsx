import './Navbar.css'
import {NavLink} from "react-router-dom";
import Currency from "../../Currency/Currency.jsx";
import Weather from "../../Weather/Weather.jsx";
const Navbar = () => {
    const checkScroll = () => {
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 150){
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled')
        }
    }
    window.addEventListener('scroll',checkScroll);
    return (
        <div className="navbar flex justify-around items-center fixed top-0 left-0 w-screen pt-1">
            <Currency/>

            <div className="logo inline-block text-3xl font-bold">
                <NavLink to="/">Ulugut Hotel</NavLink>
            </div>
            <div className="links inline-block">
                <ul className="flex">
                    <li className="pl-10 p-5"><NavLink to="/">Home</NavLink></li>
                    <li className="pl-10 p-5"><NavLink to="/about">About</NavLink></li>
                    <li className="pl-10 p-5"><NavLink to="/ourrooms">Our Rooms</NavLink></li>
                    <li className="pl-10 p-5"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>

            <Weather/>
        </div>
    )
}

export default Navbar;
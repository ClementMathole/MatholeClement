import { Link } from "react-router-dom";
import { useState } from "react";
import GitHub from '../assets/icons8-github-64.png';

const Navbar = () => {
    const spanDeco = '</>';
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="nav">
            <h1><span id="gradient-txt">{spanDeco}</span> Clement</h1>
            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/aboutMore'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Works</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <a target="blank" href="https://github.com/ClementMathole" id="contact-btn"><img src={GitHub} alt="github" style={{width: 30}}/></a>
        </nav>
    );
}

export default Navbar;
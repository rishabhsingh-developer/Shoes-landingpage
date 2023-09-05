import logo from "../images/img1.png"
import React from "react"
import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar = () =>{
    return  <div className="navbar">
    <img src={logo} alt="singlogo"/>
    
    <ul className="menu">
      <Link className="n" to={"/"}>MENU</Link>
      <Link className="n">LOCATION</Link>
      <Link className="n">ABOUT</Link>
      <Link className="n">CONTACT</Link>
    </ul>
 
    <button>Login</button>
    </div>
}
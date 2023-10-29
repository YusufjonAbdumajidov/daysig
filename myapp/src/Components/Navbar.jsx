import React, { useState } from 'react';
import { BsChevronDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logoImage from "../assets/logo1.png";

const Navbar = () => {
    const [ showDropdown, setShowDropdown ] = useState(false);
  return (
    <header>
        <div className="logo"> <Link to="/" className='logoInside'><img src={logoImage} alt="" /></Link> </div>
        <nav style={{background: "transparent"}}>
            <ul >
                <li>about</li>
                <li>signals</li>
               
                <div className="dropdown">
                  <li className='moreBtn' onClick={() => setShowDropdown(!showDropdown)} >more <BsChevronDown style={{background: "transparent"}} />   </li>
                  <div className="dropdown-content">
                    <Link to='/Register'><li>registration</li></Link> 
                    <li>market</li>
                    <li>community</li>
                    <li>resources</li>
                    {/* <li onClick={() => setChangeLanguage(!changeLanguage)} ><BsGlobe2 style={{marginRight: "6px"}}/> {changeLanguage ? "Ru" : "Eng"}</li> */}
                  </div>
                </div>

            </ul>
        </nav>

       
    </header>
  )
}

export default Navbar
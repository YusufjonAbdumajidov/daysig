import React, { useState } from 'react';
import { BsGlobe2 } from "react-icons/bs";

const Navbar = () => {
    const [ showDropdown, setShowDropdown ] = useState(false);
    const [ changeLanguage, setChangeLanguage ] = useState(false)
  return (
    <header>
        <div className="logo">daysig</div>
        <nav>
            <ul>
                <li>about</li>
                <li>signals</li>
                <li onClick={() => setShowDropdown(!showDropdown)} >more</li>
                <ul className={showDropdown ? "dropDown showDropDown" : 'dropDown'}>
                  <li>registration</li>
                  <li>market</li>
                  <li>community</li>
                  <li>resources</li>
                </ul>
                <li onClick={() => setChangeLanguage(!changeLanguage)} ><BsGlobe2 style={{marginRight: "6px"}}/> {changeLanguage ? "Ru" : "Eng"}</li>
            </ul>
        </nav>

       
    </header>
  )
}

export default Navbar
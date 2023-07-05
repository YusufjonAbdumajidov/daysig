import React, { useState } from 'react';
import { BsGlobe2, BsChevronDown, BsChevronUp } from "react-icons/bs";

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
                {/* <li onClick={() => setShowDropdown(!showDropdown)} >more {showDropdown ? <BsChevronUp /> : <BsChevronDown />  }  </li> */}
                {/* <ul className={showDropdown ? "dropDown showDropDown" : 'dropDown'}>
                  <li>registration</li>
                  <li>market</li>
                  <li>community</li>
                  <li>resources</li>
                </ul> */}
                

                <div class="dropdown">
                  {/* <span>More</span> */}
                  <li onClick={() => setShowDropdown(!showDropdown)} >more   </li>
                  <div class="dropdown-content">
                    <li>registration</li>
                    <li>market</li>
                    <li>community</li>
                    <li>resources</li>
                    <li onClick={() => setChangeLanguage(!changeLanguage)} ><BsGlobe2 style={{marginRight: "6px"}}/> {changeLanguage ? "Ru" : "Eng"}</li>
                  </div>
                </div>

                
                {/* <li onClick={() => setChangeLanguage(!changeLanguage)} ><BsGlobe2 style={{marginRight: "6px"}}/> {changeLanguage ? "Ru" : "Eng"}</li> */}
            </ul>
        </nav>

       
    </header>
  )
}

export default Navbar
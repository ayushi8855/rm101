import React from 'react'
import { Link } from 'react-router-dom'
// import {Link}  from "react-router-dom";

import "./style.css"
export const Navbar = () => {
  return (
    <div className='nav'>
   <Link to="/addcity">ADD CITY</Link> 
    <Link to="/country">ADD COUNTRY</Link>  
    </div>
  )
}
 
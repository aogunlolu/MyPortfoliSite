import React, {useState} from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import {FiMenu} from "react-icons/fi"
import Sidebar from "./Sidebar"
import { tablets, mobile, smallScreens } from '../Responsive';



const Navbar = () => {
 const activeStyle = {color: "red"}

  const [sidebar, setSideBar] = useState(false);

  const showSiderBar = () => setSideBar(!sidebar);
  return (
    <>
    <Nav>
        <h4>Abigail Ogunlolu</h4>
        <div className="menu-list">
            <Link to="/" className='list-nav' activeStyle={activeStyle}>Home</Link>
            <Link to="/about" className='list-nav'>About</Link>
            <Link to="/services" className='list-nav'>Services</Link>
            <Link to="/achievement" className='list-nav'>Achivements</Link>          
            <Link to="contact" className='list-nav'>Contact Me</Link>
            </div>
        <FiMenu className="icon"
        onClick={showSiderBar}
        style={{
          position: "fixed",
          right: "14px",
      
          cursor: "pointer",
        }}/>

  {sidebar && <Sidebar active={setSideBar} />}
        </Nav> 
    </>
  )
}
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    background: rgba(19, 1, 1, 0.829);
    color: white;
    padding: 20px 100px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    font-size: 20px;
    

    ${smallScreens({padding: "21.4px 50px", fontSize:"18px"})}
 
    ${mobile({padding: "21.4px 20px", fontSize:"18px"})}

   .menu-list{
      display: flex;

      ${tablets({display:"none"})}
   } 
  
    .list-nav{
    text-decoration: none;
    color: white;
    padding: 0 20px;

   
  }

  .icon{
      display: none;
 
      ${tablets({display:"block"})}
  }

`
export default Navbar
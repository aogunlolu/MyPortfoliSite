import React from 'react';
import styled from "styled-components";
import {GiCancel} from "react-icons/gi";
import { Link } from 'react-router-dom';
import { tablets} from '../Responsive';

const Sidebar = ({active}) => {
  const closeSidebar = () => {
    active(false);
  };
  return (
    <>
      <Menu Sidebar={active}>
      <GiCancel
       style={{
        fontSize: "23px",
        cursor: "pointer",
      }}
       onClick={closeSidebar}/>
        <ul>
          <Link to="/" className='list' onClick={closeSidebar}>Home</Link>
          <Link to="/about" className='list' onClick={closeSidebar}>About</Link>
          <Link to="/achievement" className='list' onClick={closeSidebar}>Achivements</Link>
          <Link to="/services" className='list' onClick={closeSidebar}>Services</Link>
          <Link to="contact" className='list' onClick={closeSidebar}>Contact Me</Link>
        </ul>  
      </Menu> 
    </>
  )
}
const Menu = styled.div`
display: block;
background: rgba(19, 1, 1, 0.829);
padding: 30px;
position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 50%;
  z-index: 1000;
  
  animation: showSidebar 1s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
  
ul{
  display: block;
  text-align: center;
  
  ${tablets({display:"block"})}
  
}
.list{
    text-decoration: none;
    color: white;
    line-height: 3;
    display:"grid";

    ${tablets({display:"block"})} 
}  
`
export default Sidebar
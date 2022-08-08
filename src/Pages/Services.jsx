import React from 'react';
import styled from 'styled-components';
import {BsLaptop} from "react-icons/bs";
import {AiOutlineFolderOpen} from "react-icons/ai";
import {BiMobileAlt} from "react-icons/bi";
import bootstap from "../Assest/bootstrap-logo.png";
import CSSlogo from "../Assest/CSS3_logo.png";
import HTMLlogo from "../Assest/HTML-logo.png";
import JSlogo from "../Assest/Javascript-logo.png";
import Tailwind from "../Assest/Tailwind_Logo.png";
import ReactLogo from "../Assest/React-icon.png";
import { mobile, tablets} from '../Responsive';


const Services = () => {
  return (
    <>
    <Section>
        <div className="logo"> 
           <img src={ReactLogo} alt="" />  
           <img src={CSSlogo} alt="logo" />
           <img src={HTMLlogo} alt="logo" />
           <img src={Tailwind} alt="" />
           <img src={JSlogo} alt="logo" />
           <img src={bootstap} alt="logo" />
        </div>
        <Article>
        <div className="service-main">
            <h2>Services</h2>
            <h6>Awesome Features</h6>
        </div> 
        <div className="services-box">
            <div className="box-1">
                <div className="box">
                    <BsLaptop className="icon"/>
                    <h3>Web Design</h3>
                    <p>Assess UX /UI designs for technical feasibility.</p>
                </div>
                <div className="box">
                    <AiOutlineFolderOpen className="icon"/>
                    <h3>Web Development</h3>
                    <p>Create Web Application from high fidelity wireframe.</p>
                </div>
                <div className="box">
                    <BiMobileAlt className="icon"/>
                    <h3>Fully Responsive</h3>
                    <p>User friendly</p>
                </div>
            </div>
        </div>
        </Article>        
    </Section>
    </>
  )
}
const Section = styled.div`
    padding-top: 63px;
    color: rgba(19, 1, 1, 0.829);

    .service-main{
    font-size: 38px;
    padding-top: 10px;

    ${tablets({fontSize:"25px"})}
    ${mobile({fontSize:"18px"})}
        
    }

   .logo{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-around;
       background-color: rgba(19, 1, 1, 0.829);
       padding: 25px 0;
   } 
   img{
       width: 100px;
       
   }
`

const Article = styled.div`
    padding: 30px 120px;
    text-align: center;

    ${tablets({padding:"20px 50px"})}

    .box-1{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 70px;
        padding: 70px 0;
        
        ${tablets({padding:"40px 0", gap:"40px"})}
    }

    .icon{
        font-size: 120px;

        ${tablets({fontSize: "70px"})}
    }
`
export default Services
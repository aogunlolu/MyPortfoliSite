import React from 'react';
import profilepics from "../Assest/Myprofile-pic.jpeg";
import profile from "../Assest/Mypics.jpeg";
import styled from 'styled-components';
import {BiPlayCircle} from "react-icons/bi";
import {AiTwotonePhone, AiOutlineMail} from "react-icons/ai";
import {FaMapMarker} from "react-icons/fa";
import { mobile, tablets, smallScreens } from '../Responsive';
import my_resume from '../Assest/Ogunlolu Abigail.pdf';

const About = () => {
  return (
    <>
    <Header>
      <Containertext>
        <h1>Abigail Ajoke Ogunlolu</h1>
        <h3>Finance/ Data Analyst.</h3>
        <h3>Frontend Developer.</h3>
        <div className="icon">
          <p>Watch The Space</p>
          <BiPlayCircle className="biplay"/> 
        </div>     
      </Containertext>
      <ContainerImg>
       <img src={profilepics} alt="my-profile-pic" />
      </ContainerImg> 
    </Header>
    <Section>
      <div className="section1-l">
        <img src={profile} alt="profile" />
      </div>
      <div className="section1-r">
        <div className="section1-about">
          <h1>About Me</h1>
          <h3>I am Abigail Ogunlolu</h3>
          <h4>Financial Data Analyst</h4>
        </div>            
            <p>I am a seasoned Accountant with over four years of professional experience, complemented by a keen aptitude for Financial Technologies focused on delivering inventive solutions within the realm of finance. </p><br />
            <p>Throughout my career, I have excelled in roles involving Receivables analysis, Payables management, Reconciliation, Financial Statement preparation, Data analysis, and Web development. My diverse skill set encompasses proficiency in various technologies, including Excel, SQL, Tableau, JavaScript, HTML, CSS, Tailwind CSS, React.js, and GitHub, which I have strategically employed to consistently achieve outstanding results..</p><br/>
            <p>In this portfolio, I have included a variety of projects that showcase my data analytics skills. You will find links of the dashboards and reports I have created using various tools such as Tableau and Excel. These projects demonstrate my ability to analyze and present data in a clear and visually appealing way, making it easy for decision makers to understand the insights and take action.</p>
            <div className="mobile">
                <AiTwotonePhone className="icon"/>
                <p>+234-814-2312-641</p>
            </div>
            <div className="mail">
                <AiOutlineMail className="icon"/>  
                <a href="mailto: ogunloluajoke@mail.com">ogunloluajoke@gmail.com</a> 
            </div>
            <div className="map">
                <FaMapMarker className="icon"/>
                <p>Lagos, Nigeria</p>
            </div> 
          <a
            href={my_resume}
            download="Ogunlolu Abigail's Resume"
            target="_blank"
            rel="noreferrer" >
              <button>Download Resume</button>
          </a>   
         
        </div>    
    </Section>                     
    
    </>
  )
}
const Header = styled.div`
  display: flex;
  gap: 20px;
  background: linear-gradient(rgba(19, 1, 1, 0.829) 10%, rgb(5, 5, 5) 90%);
  margin-top: 63px;
  padding: 50px 120px;
  color:white;
  overflow: hidden;
  width: 100%;
  height:780px;

  ${smallScreens({padding:"30px 70px", height:"550px"})} 
  ${tablets({padding:"30px 50px", height:"450px"})}  
  ${mobile({padding:"30px 20px",height:"100%", gap:"10px"})}
`
const Containertext= styled.div`
  width: 50%;
  padding-top: 70px;

  ${tablets({paddingTop:"35px"})}
  ${mobile({paddingTop:"20px"})}

  h1{
    font-size: 72px;
    padding-bottom: 50px;
    font-size: 400;

    ${smallScreens({fontSize:"40px", paddingBottom:"30px"})}
    ${tablets({fontSize:"25px", paddingBottom:"30px"})}
    ${mobile({fontSize:"18px", paddingBottom:"20px"})}
  }
  h3{
    font-size: 30px;
    padding-bottom: 30px;

    ${tablets({fontSize:"18px", paddingBottom:"20px"})}

    ${mobile({fontSize:"16px", paddingBottom:"10px"})}
  }
.icon{
  display: flex;
  align-items: center;
  padding-top: 40px;
  gap: 20px;

  ${mobile({fontSize:"12px", paddingTop:"20px"})}
  
}
  .biplay{
    font-size: 80px;
    color: rgba(146, 69, 24, 0.938);

    ${smallScreens({fontSize:"40px"})}

    ${mobile({fontSize:"20px"})}
  }
`
const ContainerImg= styled.div`
  width: 50%;
  
  img{
    width: 100%;
    
    /* ${smallScreens({height:"80%"})} 
    ${mobile({height:"100%"})}  */
  }

  
`
const Section = styled.div`
display: flex;
padding: 80px 120px;
gap: 30px;

${tablets({display:"grid", padding:"30px 20px"})}
  
  .section1-l{
    width: 50%;
    
    ${smallScreens({width:"100%"})}

    img{
      width: 80%;
      border-radius: 100%;
      padding-top: 20px;
      

      ${tablets({display:"none"})}
    }
  }

  .section1-r{
    width: 50%;
    line-height: 25px;
    color: rgba(37, 7, 7, 0.781); 

    ${smallScreens({width:"100%"})}

    .section1-about{
      font-size: 18px;
      line-height: 35px;
    }

    p{
      font-size: 18px;

      ${tablets({fontSize:"14px"})}
    }

    .mobile, .map, .mail{
    display: flex;
    padding: 15px 0;
    gap: 20px;
    align-items: center;
    
  }
  .mail a{
    text-decoration: none;
    color: rgba(49, 4, 4, 0.829);
}
button{
    padding: 20px 35px;
    background-color:rgba(146, 69, 24, 0.938);
    color: rgba(49, 4, 4, 0.829);
    border: none;
    margin-top: 20px;

    &:hover{
      color: white;
      transition: 1s ease-out;}

    ${tablets({padding:"20px"})}
}
.icon{
  color: rgba(146, 69, 24, 0.938);
}
  }
`
export default About
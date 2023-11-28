import React from 'react'
import styled from 'styled-components';
import tech365 from "../Assest/project1.jpeg"
import tanta from "../Assest/tanta.jpg"
import Syncskills from "../Assest/Syncskills.jpg"
import sanbox from "../Assest/project2.png"
import furnitureSite from "../Assest/funiturre.png"
import Movieapp from "../Assest/Movieapp.png"
import Admin from "../Assest/admin-dashboard.png"
import { mobile, tablets} from '../Responsive';




const Achivements = () => {

  return (
    <>
    <Section>
      <div className="service-main">
          <h2>Achievements</h2>
            <h6>Projects</h6>
      </div> 
        <div className="project-link">
          <div className="project-box">
                <a href="https://tantainnovatives.com/"><img src={tanta}alt="Tanta Innovative"/></a>
                <a href="https://tantainnovatives.com/"><p>Built with React and Javascript</p></a>
               <p>Tanta Inovatives Website</p>
            </div>
            <div className="project-box">
                <a href="https://www.syncskills.com.au/"><img src={Syncskills}alt="Syncskills"/></a>
                <a href="hhttps://www.syncskills.com.au/"><p>Built with React and Tailwind</p></a>
             <p>SyncSkills Website</p>
            </div>
            <div className="project-box">
                <a href="https://tech365.ng/"><img src={tech365}alt="tech365"/></a>
                <a href="https://tech365.ng/"><p>Built with HTML and CSS</p></a>
           <p>Tech365 Website</p>
            </div>
            <div className="project-box">
                <a href="https://furniturrr.netlify.app/"><img src={furnitureSite} alt="furnituresite"/></a>
                <a href="https://furniturrr.netlify.app/"><p>Built with React</p></a>
                <p>Furniture Website</p>
            </div> 
            <div className="project-box">
                <a href="https://abi-admin-dashboard.netlify.app/"><img src={Admin} alt="dashboard"/></a>
                <a href="https://abi-admin-dashboard.netlify.app/"><p>Built with React and TailwindCSS</p></a>
                <p>Admin Dashboard</p>
            </div>
        </div>
    </Section>     
    </>
  )
}
const Section = styled.div`
  margin-top: 63px;
  text-align: center;
  padding: 0 100px;

  ${tablets({padding:"0 30px"})}

.service-main{
  font-size: 38px;
  padding-top: 10px;

  ${tablets({fontSize:"25px"})}
  ${mobile({fontSize:"18px"})}
}

.project-link{
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding:50px 0;

  ${tablets({gap:"25px"})}
}

.project-box{
  width: 350px;
  height: 100%;
  line-height: 2;
  

img{
  width: 100%;
  height: 340px;
}

}
.project-box:hover{
    box-shadow:15px 15px 10px 15px silver;
 }
 .project-box a{
  text-decoration: none;
  color: rgb(187, 87, 104);
}
.project-box p{
    font-size: 18px;
    text-align: center;

    ${mobile({fontSize:"14px"})}
}
`
export default Achivements
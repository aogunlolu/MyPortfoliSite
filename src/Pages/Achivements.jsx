import React from 'react'
import styled from 'styled-components';
import tech365 from "../Assest/project1.jpeg"
import sanbox from "../Assest/project2.png"
import furnitureSite from "../Assest/funiturre.png"
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
                <a href="https://aogunlolu.github.io/technew/HTML/index.html"><img src={tech365}alt=""/></a>
                <a href="https://aogunlolu.github.io/technew/HTML/index.html"><p>Built with HTML and CSS</p></a>
                <p>Web Development</p>
            </div>
            <div className="project-box">
                <a href="https://aogunlolu.github.io/sandbox/HTML/index.html"><img src={sanbox} alt=""/></a>
                <a href="https://aogunlolu.github.io/sandbox/HTML/index.html"><p>Built with HTML, CSS and Bootstrap</p></a>
                <p>Web Development</p>
            </div>
            <div className="project-box">
                <a href="https://furniturrr.netlify.app/"><img src={furnitureSite} alt=""/></a>
                <a href="https://furniturrr.netlify.app/"><p>Built with React</p></a>
                <p>Web Development</p>
            </div> 
            <div className="project-box">
                {/* <a href="https://aogunlolu.github.io/technew/HTML/index.html"><img src="../Asset/project1.jpeg" alt="" width="350px"></a> */}
                <a href="https://aogunlolu.github.io/technew/HTML/index.html"><p>Built with HTML and CSS</p></a>
                <p>Web Development</p>
            </div>
            <div className="project-box">
                {/* <a href="https://aogunlolu.github.io/sandbox/HTML/index.html"><img src="../Asset/project2.png" alt="" width="350px" height="350px"></a> */}
                <a href="https://aogunlolu.github.io/sandbox/HTML/index.html"><p>Built with HTML, CSS and Bootstrap</p></a>
                <p>Web Development</p>
            </div>
            <div className="project-box">
                {/* <a href="#"><img src="../Asset/Tech365.png" alt="" width="350px" height="350px"></a> */}
                <a href="#"><p>Built with HTML and CSS</p></a>
                <p>Web Development</p>              
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
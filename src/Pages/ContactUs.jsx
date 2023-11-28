import React from 'react'
import styled from 'styled-components';
import {AiTwotonePhone, AiOutlineMail} from "react-icons/ai";
import {FaMapMarker} from "react-icons/fa";
import { mobile, tablets, smallScreens} from '../Responsive';


const ContactUs = () => {
  return (
    <>
    <Section>
      <h1>Contact Me</h1>
      <Form>
        <div className="contact-l">    
          <div className="contact-area">
            <AiTwotonePhone className="icon"/>
            <p>+234-814-2312-641</p>
          </div>
          <div className="contact-area">
          <AiOutlineMail className="icon"/>    
            <a href="mailto: ogunloluajoke@mail.com">ogunloluajoke@gmail.com</a>
          </div>
          <div className="contact-area">
          <FaMapMarker className="icon"/>
            <p>Lagos, Nigeria</p>
          </div>  
        </div>
        <div className="contact-r">
          <form>
            <label>Name:</label> 
            <input type="text" />
            <label>Email:</label>
            <input type="email" />
            <label>Message:</label>
            <textarea name="" id="" cols="120" rows="5"></textarea>      
          </form>
          <a href="mailto:ogunloluajoke@gmail.com">
            <button type='submit'>Submit</button>
          </a>
           
        </div>
        </Form>
    </Section>    
    </>
  )
}
const Section = styled.div`
    margin-top: 63px;
    color: white;
    background-color: rgba(19, 1, 1, 0.829);
    padding: 60px 150px;
    width: 100%;
    height: 760px;

    ${smallScreens({padding:"40px 50px", height:"100%"})}
    
    
    h1{
      font-size: 36px;
    }
`
const Form = styled.div`
  display: flex;
  gap: 40px;
  padding-top: 50px;

  ${tablets({display:"grid"})}

.contact-l{
width: 40%;
line-height: 3;
border: 1px solid white;
padding: 40px 30px;


${tablets({width:"100%"})}
}

.icon{
  font-size: 25px;
  color: rgba(146, 69, 24, 0.938);
  
}


.contact-r{
  width: 60%;
  ${tablets({width:"100%"})}
}
  .contact-area{
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .contact-area a{
    text-decoration: none;
    color: white;
  }

  form{
  display: grid;
  line-height: 3;
  font-size: 18px;
}
input{
  border: none;
  padding: 10px;
  outline: none;
}
textarea{
  border: none;
  padding: 10px;
  outline: none;
}
button{
    padding: 20px 35px;
    background-color:rgba(146, 69, 24, 0.938);
    font-size: 18px;
    margin-top: 30px;
    border: none;

    &:hover{
      color: white;
      transition: 1s ease-out;}

    ${mobile({padding:"15px 30px"})}
}
`
export default ContactUs
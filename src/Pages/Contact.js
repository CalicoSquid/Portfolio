import { Link } from "react-router-dom";
import Logos from "../Components/Logos";
import laptopLight from "../Images/laptop-light.png";
import laptopDark from "../Images/laptop.png";
import ContactForm from "../Components/ContactForm";

export default function Contact(props) {
    return (
        <div className="contact-page flex column justify-space-between">
            
            <div className="contact-head flex justify-center">
                <div className="contact-head-text">
                    <h1>Contact Me</h1>
                    <br/>
                    <p>
                        Thanks for stopping by checking out my portfolio. 
                        <br/>
                        Please feel free to get in touch by phone or email, fill in the contact form below, or check out 
                        {" "}
                        <Link to="/projects" className="highlight">my current projects</Link> 
                        {" "}
                        here.
                    </p>
                    <br/>

                    <div className="contact-link flex ">
                        <i class="fa-brands fa-whatsapp highlight"></i>
                        {" "}
                        +382 063242695
                    </div>
                    <div className=" contact-link flex justify-flex-start">
                        <i class="fa-regular fa-envelope highlight"></i> 
                        {" "}
                        <p 
                        onClick={() =>  navigator.clipboard.writeText('calicosquidcode@gmail.com')}
                        style={{cursor: "copy"}}
                        >calicosquidcode@gmail.com</p>
                    </div>
                </div>
                <img src={props.darkMode ? laptopDark : laptopLight} className="contact-image" style={{width: "60%"}} alt=""/>
            </div>

            <ContactForm />
            
            <Logos />
            
        </div>
    )
}
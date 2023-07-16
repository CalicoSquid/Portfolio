import Logos from "./Logos"
import laptopLight from "../Images/laptop-light.png"
import laptopDark from "../Images/laptop.png"


export default function Contact(props) {
    return (
        <div className="contact-page flex column justify-space-between">
            
            <div className="contact-head flex justify-flex-start">
                <div className="contact-head-text">
                    <h1>Get in touch</h1>
                    <p>Some sort of description text</p>
                    <br/>

                    <div className="contact-link flex">
                        <i class="fa-brands fa-whatsapp"></i>
                        {" "}
                        +382 063242695
                    </div>
                    <div className=" contact-link flex justify-flex-start">
                        <i class="fa-regular fa-envelope"></i> 
                        {" "}
                        calicosquidcode@gmail.com
                    </div>
                </div>
                <img src={props.darkMode ? laptopDark : laptopLight} className="contact-image" style={{width: "60%"}} alt=""/>
            </div>

            
            <Logos />
            
        </div>
    )
}
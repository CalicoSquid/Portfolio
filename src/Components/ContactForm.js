import { useState } from "react"
export default function ContactForm() {

    const [status, setStatus] = useState("Send")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name] : value
              }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("Sending...");
        let response = await fetch("https://portfolio-email-server-ei5k.onrender.com/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formData),
        });

        let result = await response.json();

        if (result.status === "Message Sent") {
            setStatus("submitted");
        } else {
            setStatus("Try Again");
        }
        //console.log(result.status);

        setFormData({
            name: "",
            email: "",
            message: "",
        })
    }


    return (
        <form onSubmit={handleSubmit} className="form flex column">
        
            <label htmlFor="name">Name <i className="fa-solid fa-arrow-right-long highlight"></i></label>
            <input 
            type="text" 
            id="name" 
            name="name" 
            onChange={handleChange} 
            value={formData.name}
            className="input"
            />

            <label htmlFor="email">Email <i className="fa-solid fa-arrow-right-long highlight"></i></label>
            <input 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            name="email" 
            id="text"
            className="input"
            required
            />

            <label htmlFor="message">Message <i className="fa-solid fa-arrow-right-long highlight"></i></label>
            <textarea 
            value={formData.message} 
            onChange={handleChange} 
            id="message" 
            className="message-text" 
            name="message"
            placeholder="Say hi!"
            />

            {
                status !== "submitted" ?
                <input type="submit" value={status} className="border-animation submit" /> :
                <p>Thank you<span className="highlight"> !</span></p>
            }

      </form>
    )
}
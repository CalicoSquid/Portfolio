import squid from "../Images/code.png";

import { Link } from "react-router-dom";
import Logos from "./Logos"

export default function About() {
    return (
        <div className="info-page flex column">

            <section className="about-head flex ">
                <div className="info-head flex column justify-flex-start">
                    <h1 className="highlight">Caleb Mow</h1>
                    <h2>Calico Squid Code</h2>
                    <p>Grinding to full stack on a mountain in Montenegro...</p>
                    <Link className="border-animation" to="/projects">My Work</Link>
                </div>
                <img 
                    src={squid} 
                    style={{height: "350px"}} 
                    alt="Calico cat logo" 
                    className="calico"
                />
            </section>

            <section className="description flex column">
                <div className="textbox">
                    <h2>More about me</h2>
                    <p>
                    Hello! I'm Caleb, an American-British front-end developer based in beautiful Montenegro.<br/>
                    From exploring the stunning landscapes to conquering new heights through hiking and rock climbing, I find inspiration in the outdoors.<br/>
                    When I'm not casting a line in the tranquil waters for a relaxing fishing session, you'll often find me immersed in the world of code, bringing ideas to life through frontend development with a focus on React.<br/>
                    What started as a hobby has evolved into a deep passion, and I'm thrilled to be pursuing a career change at the age of 36 to make coding my full-time pursuit.<br/>
                    Combining my years of coding experience with a creative mindset, I'm committed to creating engaging and user-centric web experiences.<br/>
                    Let's collaborate and build something remarkable together!<br/>
                    </p>
                </div>
                
            </section>
            <Logos />

            
        </div>
    )
}
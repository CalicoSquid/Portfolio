import code from "../Images/code.png";
import { Link } from "react-router-dom";
import Logos from "../Components/Logos"

export default function About() {
    return (
        <div className="info-page flex column">

            <section className="about-head flex ">
                <div className="info-head flex column justify-flex-start">
                    <h1 className="highlight">Caleb Mow</h1>
                    <h2>Calico Squid Code</h2>
                    <p>Grinding to full stack on a mountain in Montenegro...</p>
                    <Link className="border-animation" to="/projects/savor">My Work</Link>
                </div>
                <img 
                    src={code} 
                    style={{height: "350px"}} 
                    alt="" 
                />
            </section>

            <section className="description flex column">
                <div className="textbox">
                    <h2>More about me</h2>
                    <p>
                    Hello! I'm Caleb, an American-British aspiring front-end developer based in the stunning seaside country of Montenegro<br/>
                    I have always found inspiration in the outdoors, so when i am not glued to a screen writing code, you can almost always find me hiking up mountains, rock climbing, swimming or fishing.<br/>
                    As a former professional chef, I have spent most of my life travelling the world, and now am focusing on bringing my ideas to life through frontend development, with a focus on React.<br/>
                    I have had a facination with programming and code for as long as i can remember, and what began as a hobby in my spare time has evolved into a deep passion. <br/> 
                    I'm thrilled to be pursuing a career change at the young age of 36 to make coding my full-time pursuit.<br/>
                    Combining my years of coding experience with the creative mindset forged in the (literal) fires of a professional kitchen, I'm committed to creating engaging and user-centric web experiences with a personal touch.<br/>
                    Let's collaborate and build something remarkable together!<br/>
                    </p>
                </div>
                
            </section>

            <section className="about-logos flex justify-center">
                <Logos />
            </section>
            

            
        </div>
    )
}
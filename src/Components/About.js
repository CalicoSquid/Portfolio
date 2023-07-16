import squid from "../Images/code.png";

import { Link } from "react-router-dom";
import Logos from "./Logos"

export default function About() {
    return (
        <div className="info-page flex column">

            <section className="about-head flex ">
                <div className="info-head flex column justify-flex-start">
                    <h1>CalicoSquid</h1>
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis reiciendis quasi aperiam expedita.</p>
                    <Link to="/projects">My Work</Link>
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae, omnis impedit ratione quam rem, illo nam veritatis debitis explicabo natus dolores perspiciatis neque recusandae unde aspernatur corrupti hic. Necessitatibus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae, omnis impedit ratione quam rem, illo nam veritatis debitis explicabo natus dolores perspiciatis neque recusandae unde aspernatur corrupti hic. Necessitatibus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae, omnis impedit ratione quam rem, illo nam veritatis debitis explicabo natus dolores perspiciatis neque recusandae unde aspernatur corrupti hic. Necessitatibus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae, omnis impedit ratione quam rem, illo nam veritatis debitis explicabo natus dolores perspiciatis neque recusandae unde aspernatur corrupti hic. Necessitatibus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae, omnis impedit ratione quam rem, illo nam veritatis debitis explicabo natus dolores perspiciatis neque recusandae unde aspernatur corrupti hic. Necessitatibus.
                    </p>
                </div>
                
            </section>
            <Logos />

            
        </div>
    )
}
import notFound from "../Images/404.png";
import notFoundLight from "../Images/404-light.png";
import { Link } from "react-router-dom";


export default function NotFound(props) {
    return (
        <div className="not-found flex column justify-center">
            <Link to=".."><h3>&larr; Go Back</h3></Link>
            <img src={props.darkMode ? notFound : notFoundLight} style={{height: "300px"}} />
        </div>
        
    )
}
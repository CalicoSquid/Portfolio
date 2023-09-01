import notFound from "../Images/404.png";
import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <div className="not-found flex column justify-center">
            <Link to=".."><h3>&larr; Go Back</h3></Link>
            <img 
            src={notFound} 
            style={{height: "300px"}}
            alt=""
             />
        </div>
        
    )
}
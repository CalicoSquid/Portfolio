import errorImg from "../Images/error1.png";
import { Link, useRouteError } from "react-router-dom";
import Pushers from "./Pushers";

export default function Error(props) {

    console.log(props.error)
    const error = useRouteError()

        return (
            <div className="project-page error-page justify-center flex">
                
                <div className="error-container project-container flex justify-center" >
                <Pushers />
                <img src={errorImg} style={{height: "300px"}} alt=""/>
                    <div className="error-text project-text flex column justify-space-between">
                        <h1>Ooops...</h1>
                        <h3 className="broken">Something's gone horribly wrong.</h3>
                        { error?.status ? <h2>{error?.status}</h2> : "" }
                        { error?.statusText ? <pre>{error?.statusText}</pre> : "" }
                        {
                            error?.message ?
                            <p className=""><b>Error Message:</b> {error?.message}</p> :
                            props.error ? 
                            <p className=""><b>Error Message:</b> {props.error.message}</p> :
                            <p>Unknown error</p>
                        }
                        <br/>
                        
                     
                        {props.broken && <h3 onClick={props.breakEverything} className="fixit"><i className="fa-solid fa-arrow-up-long"></i> Fix Everything</h3>}
                        <Link 
                        to=".." 
                        path="relative" 
                        onClick={props.broken}
                        >
                        <h3><i className="fa-solid fa-arrow-left-long"></i> Go Back</h3>
                        </Link>
                    </div>
                    
                </div>
            </div>
            
        
    )
}
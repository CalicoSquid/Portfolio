import { pushers } from "../Images/pushers/pushers";

export default function Pushers() {
    return (
    <>
    <img src={pushers[Math.floor(Math.random() * pushers.length)]} style={{height: "80px"}} alt="pusher" className="pusher" />
    <img src={pushers[Math.floor(Math.random() * pushers.length)]} style={{height: "80px"}} alt="pusher" className="pusher pusher-2" />
    </>   
    )
}
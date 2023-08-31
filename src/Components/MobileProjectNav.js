import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import arrow from "../Images/arrow3.png"

export default function MobileNav(props) {

  const currentPage = useLocation().pathname
  const [image, setImage] = useState("")
  const [icon, setIcon] = useState("")
  const [color, setColor] = useState("")
  const [leftArrow, setLeftArrow] = useState(".")
  const [rightArrow, setRightArrow] = useState(".")
  const colorArray = ["yellow", "yellow", "red", "blue"];
 
  const linkArray = props.projectData.map((project, i) => {
    return {
      to: `/projects/${project.to}`,
      img: project.img,
      name: project.name,
      icon: project.icon,
      color: colorArray[i]
      }
  })

  useEffect(() => {
    setImage(linkArray[currentIndex].name)
    setIcon(linkArray[currentIndex].icon)
    setColor(linkArray[currentIndex].color)
    setLeftArrow(linkArray[prevIndex].to)
    setRightArrow(linkArray[nextIndex].to)
  })


  const currentIndex = linkArray.findIndex(x => x.to === currentPage)
  const nextIndex = currentIndex !== (linkArray.length - 1) ? currentIndex + 1 : currentIndex;
  const prevIndex = currentIndex !== 0 ? currentIndex - 1 : currentIndex;

  return (
    <nav className="mobile-nav flex justify-center">
      <Link 
      className="arrows flex column" 
      to={leftArrow} >
        <img 
        src={arrow}
        style={{height: "60px", width: "80px", transform: "rotate(180deg)"}} 
        alt=""/>
        <p className={currentIndex === 0 ? "hide" : ""}>Previous</p>
      </Link>
      <div className={`card3 flex column justify-space-between bg-hover-${color}-dark-1 ${color}`}>
                    <i className={ `fa-solid ${icon}`}></i>
                    <h2>{image}</h2>
                    </div>
      <Link 
      className="arrows flex column" 
      to={rightArrow} >
        <img src={arrow} style={{height: "60px", width: "80px"}} alt=""/>
        <p className={currentIndex === (linkArray.length - 1) ? "hide" : ""}>Next</p>
      </Link>
    </nav>
  )
}
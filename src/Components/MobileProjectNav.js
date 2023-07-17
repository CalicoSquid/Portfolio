import { Link, useLocation } from "react-router-dom"
import arrow from "../Images/arrow3.png"

export default function MobileNav(props) {

  const currentPage = useLocation().pathname
 
  const linkArray = props.projectData.map(project => {
    return {
      to: `/projects/${project.to}`,
      img: project.img
      }
  })

  linkArray.unshift({to: "/projects", img: props.image});

  const currentIndex = linkArray.findIndex(x => x.to === currentPage)

  const nextIndex = currentIndex !== (linkArray.length - 1) ? currentIndex + 1 : currentIndex;
  const prevIndex = currentIndex !== 0 ? currentIndex - 1 : currentIndex;

  const rightArrow = linkArray[nextIndex].to
  const leftArrow = linkArray[prevIndex].to
  const image = linkArray[currentIndex].img

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
      <img 
      src={image} 
      style={{height: "100px"}} 
      alt=""
      />
      <Link 
      className="arrows flex column" 
      to={rightArrow} >
        <img src={arrow} style={{height: "60px", width: "80px"}} alt=""/>
        <p className={currentIndex === (linkArray.length - 1) ? "hide" : ""}>Next</p>
      </Link>
    </nav>
  )
}
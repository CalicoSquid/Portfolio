
import './Sass/index.scss';
import { useState, useEffect } from 'react';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Main, {loader as cardLoader} from './Components/Main';
import Layout from './Components/Layout';
import About from './Components/About';
import Contact from './Components/Contact';
import ProjectLayout, {loader as navLoader} from './Components/ProjectsLayout';
import ProjectDetails, { loader as projectLoader } from './Components/ProjectDetails';
import Project from './Components/Project';
import NotFound from './Components/NotFound';
import Error from './Components/Error';



function App() {

  const [toggle, setToggle] = useState(true)
  const [broken, setBroken] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(false)
  const isMobile = width <= 640;

  function toggleDarkLight() {
    setToggle(prev => !prev)
  }

  function breakEverything() {
    setBroken(prev => !prev)
  }

  function toggleNav() { 
    setShowNav(prev => !prev) 
  }

  function closeNav() {
    setShowNav(false)
  }


    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));

        return () => { 
            window.removeEventListener('resize', () => setWidth(window.innerWidth));
        }
    }, []);

  

 const router = 
  createBrowserRouter(
    createRoutesFromElements(
      <Route 
        element={
        <Layout 
          toggle={toggleDarkLight} 
          darkMode={toggle}
          showNav={showNav}
          closeNav={closeNav}
          toggleNav={toggleNav}
          isMobile={isMobile}
        />}
        errorElement={<Error breakEverything={breakEverything}/>}
      >

        <Route 
          path="/" 
          element={ <Main broken={broken}/> } 
          errorElement={<Error />}
          loader={cardLoader}
        />

        <Route 
          path="about" 
          element={ <About /> } 
          errorElement={<Error />} 
        />

        <Route 
          path="contact" 
          element={ <Contact 
          darkMode={toggle}/>} 
          errorElement={<Error />}
        />
        
        <Route 
          path="projects" 
          element={
          <ProjectLayout 
            darkMode={toggle} 
            breakEverything={breakEverything}
            broken={broken}
            isMobile={isMobile}
          /> }
          errorElement={<Error breakEverything={breakEverything}/>}
          loader= {navLoader}
        >
          <Route 
            index 
            element={<Project breakEverything={breakEverything} broken={broken}/> } 
            errorElement={<Error />}
          />

          <Route 
            path=":id" 
            element={ <ProjectDetails broken={broken} />} 
            loader={projectLoader} 
            errorElement={<Error breakEverything={breakEverything}/>}
          />
        </Route>

        <Route path="*" element={<NotFound darkMode={toggle}/>} />
      </Route>
    )
  )

  


    return (
        <div className={`App flex column justify-space-between ${toggle && "dark-mode"}`}>
          <RouterProvider router={router} />
        </div>   
    );
  }

export default App;

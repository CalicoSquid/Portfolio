
import './Sass/index.scss';
import { useState, useEffect } from 'react';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Main, {loader as cardLoader} from './Pages/Main';
import Layout from './Components/Layout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProjectLayout, {loader as navLoader} from './Pages/ProjectsLayout';
import ProjectDetails, { loader as projectLoader } from './Components/ProjectDetails';
import Project from './Components/Project';
import NotFound from './Components/NotFound';
import Error from './Components/Error';



function App() {

  const [broken, setBroken] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(false)
  const isMobile = width <= 640;

  function breakEverything() {
    setBroken(prev => !prev)
  }

  function toggleNav() { 
    setShowNav(prev => !prev) 
  }

  function closeNav() {
    if (showNav) {
      setShowNav(false)
    }
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
          showNav={showNav}
          closeNav={closeNav}
          toggleNav={toggleNav}
          isMobile={isMobile}
        />}
        errorElement={
        <Error 
          breakEverything={breakEverything}
          broken={broken}
        />}
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
          element={ <Contact />} 
          errorElement={<Error />}
        />
        
        <Route 
          path="projects" 
          element={
          <ProjectLayout 
            breakEverything={breakEverything}
            broken={broken}
            isMobile={isMobile}
          /> }
          errorElement={<Error breakEverything={breakEverything} broken={broken}/>}
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
            errorElement={<Error breakEverything={breakEverything} broken={broken}/>}
          />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  


    return (
        <div className={`App flex column justify-space-between`}>
          <RouterProvider router={router} />
        </div>   
    );
  }

export default App;

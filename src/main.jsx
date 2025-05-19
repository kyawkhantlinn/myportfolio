import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import NavBar from "./components/NavBar.jsx";
import Home from './components/Home.jsx';
import AboutMe from "./components/AboutMe.jsx";
import Toolkit from './components/ToolKit.jsx';
import MyWork from './components/MyWork.jsx';
import ContactMe from './components/ContactMe.jsx';

createRoot(document.getElementById('root')).render(
  <div>
    <NavBar />
    <Home />
    <AboutMe />
    <Toolkit />
    <MyWork />
    <ContactMe />
  </div>,
)

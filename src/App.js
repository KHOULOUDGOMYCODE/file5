import React from 'react';
import './styles.css';


import NavBar from './Component/NavBar';
import About from './Component/About';
import ProjectCard from './Component/ProjectCard';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

const navLinks=[
  {link: 'About', href:'#About'},
  {link: 'Projects', href:'#Projects'},
  {link: 'Contact', href:'#Contact'},]
const project=[
{picture:"proj.png" , para:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.' , href:'# ', lien:'Link'},
{picture:"proj.png" , para:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.' , href:'# ', lien:'Link'},
{picture:"proj.png" , para:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.' , href:'# ', lien:'Link'},
{picture:"proj.png" , para:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.' , href:'# ', lien:'Link'},
{picture:"proj.png" , para:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.' , href:'# ', lien:'Link'},
{picture:"proj.png" , para:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptatibus ex natus quis beatae perspiciatis repellat laudantiumaliquam.' , href:'# ', lien:'Link'},]

const name='John doe'
const image='John-Doe.jpg'
const year='2020'
function App() {
  return (
  <div>
    <NavBar navLinks={navLinks}/>
    <About name={name} image={image}/>
   <h2 className="text-important">Projects</h2>
    <div className='projects-container' >
    <ProjectCard project={project} />
    </div >
    
    <Contact/>
    <Footer year={year}/>
    </div>)}
    
  
  
    

export default App;

import React from'react';


const NavBar = (props) => {
    return ( <header>
    <h1>John Doe</h1>
    <ul class="navmenu">
     {props.navLinks.map ((el, i )=> { 
         return <li key= {i}><a href={el.href}> {el.link}</a> </li>
     })}
    </ul>
    </header> )};

    export default NavBar;

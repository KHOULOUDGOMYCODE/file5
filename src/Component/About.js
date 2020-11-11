import React from'react';

const About = ({name,image}) => {
    return (  <section id="about-me">
    <h1>
      Hello my name is <span class="text-important">{name}</span> ,<br />
      and i make a horrible websites
    </h1>
    <img class="avatar" src={image} alt="jhon-doe" />
  </section>)};

    export default About;
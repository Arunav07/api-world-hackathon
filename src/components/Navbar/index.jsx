import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const Index = () => {
    gsap.registerPlugin(ScrollTrigger) 
    ScrollTrigger.create({
  start: '200vh -80',
  end: 999999,
  scrub: true,
  toggleClass: {className: 'main-header--scrolled', targets: '.main-header'},
});


    return (
        <article className="main-header">
<h1 className="name">Arunav Chandra</h1></article>
    );
}

export default Index;

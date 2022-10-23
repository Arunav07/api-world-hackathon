import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

const Index = () => {
    gsap.registerPlugin(ScrollTrigger) 
    ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: {className: 'main-header--scrolled', targets: '.main-header'}
});


    return (
        <div className="main-header">
Header
        </div>
    );
}

export default Index;

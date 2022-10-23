import React from 'react'
import gsap from 'gsap/dist/gsap';
import Navbar from '../../components/Navbar';

export default function Index() {
    gsap.set("main article *", { autoAlpha: 0, y: "1rem" });

    const animateVisible = (block, ratio, isIntersecting) => {
      if (ratio > 0 && isIntersecting) {
        gsap.to(block.querySelectorAll("*"), {
          duration: 1,
          autoAlpha: 1,
          y: "0",
          stagger: 0.3,
          ease: "power3.inOut"
        });
      } else {
        gsap.set(block.querySelectorAll("*"), {
          autoAlpha: 0,
          y: "1rem"
        });
      }
    };
    
    const blocks = document.querySelectorAll("main article");

    const blocksObserver = new IntersectionObserver(
      (entries) => {
        return entries.forEach((event) => {
          const { target, intersectionRatio, isIntersecting } = event;
          animateVisible(target, intersectionRatio, isIntersecting);
        });
      },
      { threshold: 0.5 }
    );
    
    for (const block of blocks) {
      blocksObserver.observe(block);
    }
    
  return (
    <main>
            <Navbar />

        <article>
            <h2>I'm a Full Stack Developer</h2>
        </article>
        <article>
            <h3>And I'm a Web Designer</h3>
        </article>

    </main>
  )
}

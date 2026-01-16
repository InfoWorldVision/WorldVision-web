import React, { useEffect, useRef } from "react";
import anime from "animejs";
import "../Styles/Header.css";

const Header = () => {
   const navRef = useRef(null);

   useEffect(() => {
      // Navbar slide down
      anime({
         targets: navRef.current,
         translateY: [-60, 0],
         opacity: [0, 1],
         duration: 800,
         easing: "easeOutExpo",
      });

      // Menu items stagger animation
      anime({
         targets: ".nav-item",
         translateY: [20, 0],
         opacity: [0, 1],
         delay: anime.stagger(120),
         duration: 600,
         easing: "easeOutExpo",
      });
   }, []);

   return (
      <header className="navbar" ref={navRef}>
         <div className="logo">WorldVision</div>

         <nav>
            <ul>
               <li className="nav-item">Home</li>
               <li className="nav-item">About Us</li>
               <li className="nav-item">Products</li>
               <li className="nav-item">Contact</li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;

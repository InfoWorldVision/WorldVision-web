import { Link } from "react-router-dom";
import anime from "animejs";
import { useRef } from "react";

export const productData = [
   { id: "intraocular-lenses", name: "Intraocular Lenses" },
   { id: "veterinary", name: "Veterinary" }
];

const styles = {
   header: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backdropFilter: "blur(10px)",
      background: "rgba(8, 48, 107, 0.9)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
   },

   nav: {
      height: "70px",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 36px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
   },

   logo: {
      color: "#FFFFFF",
      fontSize: "19px",
      fontWeight: 700,
      letterSpacing: "1.4px"
   },

   menu: {
      listStyle: "none",
      display: "flex",
      gap: "32px",
      position: "relative",
      margin: 0,
      padding: 0
   },

   item: {
      position: "relative",
      paddingBottom: "12px" // 🔑 creates hover bridge
   },

   link: {
      color: "#E3F2FD",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: 500
   },

   underline: {
      position: "absolute",
      bottom: "4px",
      height: "2px",
      background: "#C62828",
      borderRadius: "2px",
      opacity: 0
   },

   dropdown: {
      position: "absolute",
      top: "100%",       // 🔑 directly attached
      left: 0,
      marginTop: "6px",  // 🔑 small gap, no flicker
      background: "#FFFFFF",
      borderRadius: "10px",
      padding: "8px",
      minWidth: "220px", // 🔑 smaller width
      display: "none",
      boxShadow: "0 16px 30px rgba(0,0,0,0.15)"
   },

   dropdownLink: {
      display: "block",
      padding: "10px 14px",
      textDecoration: "none",
      color: "#08306B",
      fontWeight: 500,
      borderRadius: "6px"
   }
};


const Navbar = () => {
   const dropdownRef = useRef(null);
   const underlineRef = useRef(null);

   /* Underline animation */
   const moveUnderline = (e) => {
      const el = e.currentTarget;
      anime({
         targets: underlineRef.current,
         width: el.offsetWidth,
         left: el.offsetLeft,
         opacity: 1,
         duration: 250,
         easing: "easeOutExpo"
      });
   };

   const hideUnderline = () => {
      anime({
         targets: underlineRef.current,
         opacity: 0,
         duration: 150
      });
   };

   /* Dropdown animation */
   const openDropdown = () => {
      anime.remove(dropdownRef.current);
      dropdownRef.current.style.display = "block";

      anime({
         targets: dropdownRef.current,
         opacity: [0, 1],
         translateY: [-4, 0],
         duration: 200,
         easing: "easeOutCubic"
      });
   };

   const closeDropdown = () => {
      anime.remove(dropdownRef.current);

      anime({
         targets: dropdownRef.current,
         opacity: [1, 0],
         translateY: [0, -4],
         duration: 150,
         easing: "easeInCubic",
         complete: () => {
            dropdownRef.current.style.display = "none";
         }
      });
   };

   return (
      <header style={styles.header}>
         <nav style={styles.nav}>
            {/* Logo */}
            <div style={styles.logo}>WORLD VISION</div>

            {/* Menu */}
            <ul style={styles.menu} onMouseLeave={hideUnderline}>
               <li style={styles.item} onMouseEnter={moveUnderline}>
                  <Link to="/" style={styles.link}>Home</Link>
               </li>

               {/* Products */}
               <li
                  style={styles.item}
                  onMouseEnter={(e) => {
                     moveUnderline(e);
                     openDropdown();
                  }}
                  onMouseLeave={closeDropdown}
               >
                  <span style={styles.link}>Our Products</span>

                  {/* Dropdown */}
                  <div
                     ref={dropdownRef}
                     style={styles.dropdown}
                     onMouseEnter={openDropdown}
                     onMouseLeave={closeDropdown}
                  >
                     {productData.map(item => (
                        <Link
                           key={item.id}
                           to={`/our-products/${item.id}`}
                           style={styles.dropdownLink}
                        >
                           {item.name}
                        </Link>
                     ))}
                  </div>
               </li>

               <li style={styles.item} onMouseEnter={moveUnderline}>
                  <Link to="/aboutus" style={styles.link}>About Us</Link>
               </li>

               {/* Underline */}
               <span ref={underlineRef} style={styles.underline} />
            </ul>
         </nav>
      </header>
   );
};

export default Navbar;
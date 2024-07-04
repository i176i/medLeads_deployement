// import React from 'react';

// const Header = () => {
//   return (
//     <header className="flex justify-between items-center w-full px-6 py-4 bg-white shadow-md  top-0 left-0 right-0 z-10000">
//       <div className="text-2xl font-bold text-purple-800">PartnerHQ</div>
//       <nav className="flex space-x-6">
//         <a href="#resources" className="text-purple-800">Resources</a>
//         <a href="#earn-intros" className="text-purple-800">Earn Making Intros</a>
//       </nav>
//     </header>
//   );
// };

// export default Header;





import React, { useState, useEffect } from "react";
import vasu_hospital_logo from "../assets/vasu_hospital_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const items = (
    <ul className="flex flex-col sm:flex-row  items-center mt-12 sm:mt-0">
      <li className="inline sm:mr-6 text-lg ">
        <a href="#whatWeDo" onClick={closeMenu}>
          What we do
        </a>
      </li>
      <li className="inline sm:mr-6 text-lg ">
        <a href="#whatWeDo" className="text-center" onClick={closeMenu}>
          What we do
        </a>
      </li>
    </ul>
  );

  return (
    <div className="shadow-sm sm:shadow-md header flex flex-row items-center justify-between px-4 py-4 md:px-10 sm:py-4 relative">
      <div className="logo max-h-9 max-w-9 sm:max-h-12 sm:max-w-12">
        <img
          src={vasu_hospital_logo}
          className="m-0 h-full w-full object-cover"
          alt="Logo"
        />
      </div>
      <div className="menu_items pt-8 sm:pt-0 hidden sm:block">{items}</div>
      <div className="sm:pt-0 flex items-center justify-center sm:hidden">
        <FaBars
          size={28}
          onClick={toggleMenu}
          style={{ strokeWidth: "1" }}
          strokeWidth={5}
        />
      </div>
      {/* {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-5" onClick={toggleMenu}></div>
      )} */}
      <div
        className={`fixed top-[14px] right-0 h-full w-56 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-10 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4 ">
          <FaTimes size={28} onClick={toggleMenu} fontWeight={1} />
        </div>
        <div className="p-4">{items}</div>
      </div>
    </div>
  );
}

export default Header;

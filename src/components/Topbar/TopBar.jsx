import React, { useEffect, useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import useScrollListener from "../useScrollListener/index";

import { Link } from "react-router-dom";



import './TopBar.css';

const Navbar = () => {
  
  
  const [toggleMenu, setToggleMenu] = useState(false)
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);





  return (

    <nav className={navClassList.join(" ")}>
      <div className="app__navbar-logo" >
        <p className="logo">Caffe Berlin</p>

      </div>

      {/* <ul className="app__navbar-links">

        <li className="p__opensans">

          <a  href={`${process.env.PUBLIC_URL}/#home`}>Početna</a>

        </li>

        <li className="p__opensans">

          <a  href={`${process.env.PUBLIC_URL}/#o_nama`}>O nama</a>

        </li>

        <li className="p__opensans">

          <a  href={`${process.env.PUBLIC_URL}/#menu`}>Meni</a>

        </li>
        <li className="p__opensans"><a  href={`${process.env.PUBLIC_URL}/#nasa_prica`}>Naša priča</a></li>
        <li className="p__opensans"><a  href={`${process.env.PUBLIC_URL}/#galerija`}>Galerija</a></li>
        <li className="p__opensans"><a   href={`${process.env.PUBLIC_URL}/#contact`}>Kontakt</a></li>
      </ul> */}

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Prijava / Registracija</a>
        <div />
        <a href="/" className="p__opensans">Резервишите сто</a>
      </div>


      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />


        {toggleMenu && (

          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li  className="p__opensans"><a onClick={() => (setToggleMenu(false)) } href={`${process.env.PUBLIC_URL}/#home`}>Početna</a></li>
              <li className="p__opensans"><a onClick={() => (setToggleMenu(false))} href={`${process.env.PUBLIC_URL}/#o_nama`}>O nama</a></li>
              <li className="p__opensans"><a onClick={() => (setToggleMenu(false))} href={`${process.env.PUBLIC_URL}/#menu`}>Meni</a></li>
              <li className="p__opensans"><a onClick={() => (setToggleMenu(false))} href={`${process.env.PUBLIC_URL}/#galerija`}>Galerija</a></li>
              <li className="p__opensans"><a onClick={() => (setToggleMenu(false))} href={`${process.env.PUBLIC_URL}/#contact`}>Kontakt</a></li>
            </ul>
          </div>

        )}



      </div>

    </nav>
  )
};

export default Navbar;

import React, { useEffect, useState, useRef } from 'react';
import { Link } from "gatsby"
import Search from "./search";

const Header = ({title = "Udonis"}) => {

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    menuRef.current.value = window.location.pathname;
  }, []);

  const scrollMenu = (direction) => {
    if (direction === 'left') {
      menuRef.current.scrollLeft -= 200;
    } else {
      menuRef.current.scrollLeft += 200;
    }
  };

  
  const [isSearch, setSearch] = useState(false);

  const searchToggle = () => {
    setSearch(!isSearch);
    setActive(false);
  };

  
  let menu = [
    {
      path: "#",
      name: "Services",
      class: "nav__services",
      submenu: [
        {
          path: "https://udonis.co/acquisition",
          name: "user acquisition",
          submenu: [],
          class: "nav__acquisition"
        },
        {
          path: "https://udonis.co/creative-production",
          name: "creative production",
          submenu: [],
          class: "nav__portfolio"
        },
        {
          path: "https://udonis.co/mobile-business-development",
          name: "mobile business development",
          submenu: [],
          class: "nav__mbd"
        },
        {
          path: "https://udonis.co/reporting-development",
          name: "reporting development",
          submenu: [],
          class: "nav__reporting"
        },
      ]
    },
    {
      path: "https://udonis.co/about",
      name: "About",
      submenu: [],
      class: "nav__about bec"
    },
    {
      path: "/",
      name: "Blog",
      submenu: [],
      class: "nav__blog bec"
    },
    {
      path: "https://udonis.co/careers",
      name: "Careers",
      submenu: [],
      class: "nav__career bec"
    },
    {
      path: "https://udonis.co/contact",
      name: "Contact us",
      submenu: [],
      class: "nav__contact bec"
    }
  ]

  
  let submenu = [
    {
      path: "/",
      name: "All Categories",
      submenu: [],
      class: "nav__any"
    },
    {
      path: "/topics/mobile-marketing/mobile-games/",
      name: "Mobile Games",
      submenu: [],
      class: "nav__sub"
    },
    {
      path: "/topics/mobile-game-dissections/",
      name: "Mobile Game Dissections",
      submenu: [],
      class: "nav__sub"
    },
    {
      path: "/topics/mobile-marketing/mobile-apps/",
      name: "Mobile Apps",
      submenu: [],
      class: "nav__sub"
    },
    {
      path: "/topics/blockchain/",
      name: "Blockchain",
      submenu: [],
      class: "nav__sub"
    },
    {
      path: "/topics/mobile-marketing/",
      name: "Mobile Marketing",
      submenu: [],
      class: "nav__sub"
    },
    {
      path: "/topics/digital-marketing/",
      name: "Digital Marketing",
      submenu: [],
      class: "nav__sub"
    },
    {
      path: "/topics/blockchain-game-dissections/",
      name: "Blockchain Game Dissections",
      submenu: [],
      class: "nav__sub"
    }
  ]


  return (
    <>
      <header className="header liquid">
          <div className="header__container container">
              <Link className="header__leftside header__leftside-logo navbar-brand" to="/">
                  <img src={`/svg/logo.svg`} alt="Udonis"/>
              </Link>
              <ul className={`${isActive ? "header__nav toggle nav active" : "header__nav toggle nav"}`}>
                  
            {menu.map((link) => (
              <li
                className={
                  link.submenu && link.submenu.length > 0
                    ? "header__nav-li nav-item header__submenu-parent"
                    : "header__nav-li nav-item"
                }
                key={link.name}
              >
                <a
                  className={"header__nav-link nav-link headm " + link.class}
                  href={link.path}
                  bec={link.name}
                >
                  {link.name}
                </a>
                {link.submenu && link.submenu.length > 0 ? (
                  <ul className="header__submenu">
                    {link.submenu.map((sublink) => (
                      <li className="header__submenu-item" key={sublink.name}>
                        <a
                          className={"header__nav-link nav-link " + sublink.class}
                          href={sublink.path}
                        >
                          {sublink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
              </ul>
              <div className="header__toggle-block">
                <button className={`${isActive ? "app header__menu toggle active" : " app header__menu toggle"}`} onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
              </div>
          </div>
    </header>
    <div className='catmenu-out'>
      <div className="container">
        <div className='catm'>
        <h3 className='hp__title--text'>{title}</h3>
        <div className='catm-in'>
            <div className="catm__selector">
              <select
                  className="selector"
                  ref={menuRef}
                  onChange={(e) => (window.location.href = e.target.value)}
                >
                  {submenu.map((item, index) => (
                    <option
                      value={item.path}
                      key={`menu-item-${index}`}
                      className={item.class}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
            </div>
            <div className="catm__search">
              <div className="catm__search--input">
                <Search/>
              </div>
              <div className="catm__search--buttons">
                <button
                  className='header__msearch'
                  onClick={searchToggle}
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.8504 9.5102L8.70825 7.36842C8.61157 7.27175 8.4805 7.21805 8.34299 7.21805H7.99277C8.58578 6.45972 8.93815 5.50591 8.93815 4.46831C8.93815 2 6.93781 0 4.46908 0C2.00034 0 0 2 0 4.46831C0 6.93663 2.00034 8.93663 4.46908 8.93663C5.50685 8.93663 6.46082 8.58432 7.21928 7.99141V8.34157C7.21928 8.47905 7.27299 8.6101 7.36968 8.70677L9.51183 10.8485C9.7138 11.0505 10.0404 11.0505 10.2402 10.8485L10.8483 10.2406C11.0502 10.0387 11.0502 9.71214 10.8504 9.5102ZM4.46908 7.21805C2.95002 7.21805 1.71888 5.98926 1.71888 4.46831C1.71888 2.94952 2.94787 1.71858 4.46908 1.71858C5.98813 1.71858 7.21928 2.94737 7.21928 4.46831C7.21928 5.98711 5.99028 7.21805 4.46908 7.21805Z" fill="#171F26"/>
                  </svg>
                </button>
                <button
                  className='header__msearch-close'
                  onClick={searchToggle}
                >
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.10358 4.81068L7.5 8.20711L8.20711 7.5L4.81068 4.10358L8.20711 0.707153L7.5 4.64022e-05L4.10358 3.39647L0.707107 0L0 0.707107L3.39647 4.10358L0 7.50005L0.707107 8.20715L4.10358 4.81068Z" fill="#171F26"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header

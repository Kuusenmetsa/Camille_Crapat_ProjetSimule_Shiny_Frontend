import { Link } from 'react-router-dom';
import { useContext } from 'react';

import './index.css';

import logo_light from '../../assets/img/dark-logo.png';
import logo_dark from '../../assets/img/light-logo.png';

import Switch from '../Switch';

import { ThemeContext } from '../../utils/context';
import { useState } from 'react';

function Header() {
   const { theme } = useContext(ThemeContext);
   const [openNav, setOpenNav] = useState(false);
   return (
      <header
         className={
            theme === 'dark'
               ? `whiteText blueBackground`
               : `blackText whiteBackground`
         }
      >
         <img
            className="logo"
            src={theme === 'dark' ? logo_dark : logo_light}
            alt="Logo de la société Shiny"
         />

         <nav className={openNav & `open whiteBackground`}>
            <ul>
               <li>
                  <Link
                     to="/"
                     onClick={() => setOpenNav(false)}
                     className="menu__item"
                  >
                     Accueil
                  </Link>
               </li>
               <li>
                  <Link
                     to="/freelances"
                     onClick={() => setOpenNav(false)}
                     className="menu__item"
                  >
                     Profils
                  </Link>
               </li>
               <li>
                  <Link
                     to="/survey/1"
                     onClick={() => setOpenNav(false)}
                     className="menu__item menu__item--survey"
                  >
                     Faire le test
                  </Link>
               </li>
               <Switch />
            </ul>
         </nav>
         <div
            className={openNav ? `show-nav menu__burger` : `menu__burger`}
            onClick={() => setOpenNav(!openNav)}
         >
            <span className="show-nav menu__burger__bar"></span>
         </div>
      </header>
   );
}

export default Header;

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import { ThemeContext } from '../../utils/context';

import home from '../../assets/img/home-illustration.svg';

function Home() {
   const { theme } = useContext(ThemeContext);
   return (
      <div
         className={
            theme === 'dark' ? `home blueBackground` : `home whiteBackground`
         }
      >
         <div
            className={
               theme === 'dark'
                  ? `home__background purpleBackground`
                  : `home__background greyBackground`
            }
         >
            <div className="home__leftContainer">
               <h2 className={theme === 'dark' ? `whiteText` : `blackText`}>
                  Repérez vos besoins, on s'occupe du reste, avec les meilleurs
                  talent
               </h2>
               <Link to="/survey/1">Faire le test</Link>
            </div>
            <div className="home__rightContainer">
               <img src={home} alt="illustration" />
            </div>
         </div>
      </div>
   );
}

export default Home;

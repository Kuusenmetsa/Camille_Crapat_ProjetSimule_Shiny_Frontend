import { useContext } from 'react';

import './index.css';

import error from '../../assets/img/404.svg';

import { ThemeContext } from '../../utils/context';

function Error() {
   const { theme } = useContext(ThemeContext);
   return (
      <div
         className={
            theme === 'dark' ? `error blueBackground` : `error whiteBackground`
         }
      >
         <div
            className={
               theme === 'dark'
                  ? `error--background purpleBackground`
                  : `error--background greyBackground`
            }
         >
            <h2
               className={
                  theme === 'dark'
                     ? `error__title whiteText`
                     : `error__title blackText`
               }
            >
               Oups...
            </h2>
            <img
               src={error}
               alt="La page que vous demandez n'est pas disponible"
            />
            <h2
               className={
                  theme === 'dark'
                     ? `error__title whiteText`
                     : `error__title blackText`
               }
            >
               Il semblerait qu'il y ait un problème
            </h2>
         </div>
      </div>
   );
}

export default Error;

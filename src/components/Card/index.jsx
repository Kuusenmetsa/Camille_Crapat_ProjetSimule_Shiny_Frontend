import PropTypes from 'prop-types';
import { useContext } from 'react';

import './index.css';

import { ThemeContext } from '../../utils/context';

function Card({ label = 'Développeur', title = 'Jean DUPONT', picture }) {
   const { theme } = useContext(ThemeContext);
   return (
      <div
         className={
            theme === 'dark' ? `card purpleBackground` : `card greyBackground`
         }
      >
         <h2
            className={
               theme === 'dark'
                  ? `card__label whiteText`
                  : `card__label purpleText`
            }
         >
            {label}
         </h2>
         <img src={picture} alt="freelance" />
         <p
            className={
               theme === 'dark'
                  ? `card__name whiteText`
                  : `card__name blackText`
            }
         >
            {title}
         </p>
      </div>
   );
}

Card.propTypes = {
   label: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   picture: PropTypes.string.isRequired,
};

export default Card;

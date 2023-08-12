import { useContext } from 'react';

import Card from '../../components/Card';
import Loader from '../../components/Loader';

import './index.css';

import { ThemeContext } from '../../utils/context';
import { useFetch } from '../../utils/hook';

function Freelances() {
   const { theme } = useContext(ThemeContext);
   const { data, isLoading, error } = useFetch(
      'https://api-shiny.camille-crapat.fr/freelances'
   );

   const { freelancersList } = data;

   if (error) {
      return <span>une erreur est survenu</span>;
   }

   return (
      <div
         className={
            theme === 'dark'
               ? `freelances blueBackground`
               : ` freelances whiteBackground`
         }
      >
         <h1
            className={
               theme === 'dark'
                  ? `freelances__title whiteText`
                  : `freelances__title blackText`
            }
         >
            Trouvez votre prestataire
         </h1>
         <h2
            className={
               theme === 'dark'
                  ? `freelances__subtitle whiteText`
                  : `freelances__subtitle greyText`
            }
         >
            Chez Shiny nous réunissons les meilleurs profils pour vous
         </h2>
         {isLoading ? (
            <Loader />
         ) : (
            <div className="cardContainer">
               {freelancersList &&
                  freelancersList.map((profile) => (
                     <Card
                        key={profile.id}
                        label={profile.job}
                        title={profile.name}
                        picture={profile.picture}
                     />
                  ))}
            </div>
         )}
      </div>
   );
}

export default Freelances;

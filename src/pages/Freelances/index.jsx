import styled from 'styled-components';
import { useContext } from 'react';

import Card from '../../components/Card';
import Loader from '../../utils/style/loader';

import { ThemeContext } from '../../utils/context';
import { useFetch } from '../../utils/hook';

const FreelanceStyle = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   padding: 70px 0 40px 0;
`;

const FreelanceTitleStyle = styled.h1`
   font-size: 30px;
   font-weight: bold;
`;

const FreelanceTextStyle = styled.h2`
   color: ${(props) => (props.$isDarkTheme ? `#fff` : `#8186a0`)};
   font-size: 20px;
   font-weight: bold;
   margin: 75px auto 100px auto;
`;

const ContainerCardStyle = styled.div`
   width: 48%;
   display: flex;
   justify-content: space-between;
   align-items: space-between;
   flex-wrap: wrap;
`;

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
      <FreelanceStyle>
         <FreelanceTitleStyle>Trouvez votre prestataire</FreelanceTitleStyle>
         <FreelanceTextStyle $isDarkTheme={theme === 'dark'}>
            Chez Shiny nous réunissons les meilleurs profils pour vous
         </FreelanceTextStyle>
         {isLoading ? (
            <Loader />
         ) : (
            <ContainerCardStyle>
               {freelancersList &&
                  freelancersList.map((profile) => (
                     <Card
                        key={profile.id}
                        label={profile.job}
                        title={profile.name}
                        picture={profile.picture}
                     />
                  ))}
            </ContainerCardStyle>
         )}
      </FreelanceStyle>
   );
}

export default Freelances;

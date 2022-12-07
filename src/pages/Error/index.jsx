import styled from 'styled-components';
import { useContext } from 'react';

import colors from '../../utils/style/colors';

import error from '../../assets/img/404.svg';

import { ThemeContext } from '../../utils/context';

const ErrorStyle = styled.div`
   padding: 70px 33px 0 33px;
   width: 100%;
   height: auto;
`;

const BackgroundStyle = styled.div`
   width: 100%;
   height: 824px;
   background-color: ${(props) =>
      props.$isDarkTheme ? `#4F4C6B` : colors.background};
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
`;

const TextStyle = styled.h2``;

const ImgStyle = styled.img`
   height: 476px;
`;

function Error() {
   const { theme } = useContext(ThemeContext);
   return (
      <ErrorStyle>
         <BackgroundStyle $isDarkTheme={theme === 'dark'}>
            <TextStyle>Oups...</TextStyle>
            <ImgStyle
               src={error}
               alt="La page que vous demandez n'est pas disponible"
            />
            <TextStyle>Il semblerait qu'il y ait un problème</TextStyle>
         </BackgroundStyle>
      </ErrorStyle>
   );
}

export default Error;

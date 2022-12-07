import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import { ThemeContext } from '../../utils/context';

import colors from '../../utils/style/colors';

import home from '../../assets/img/home-illustration.svg';

const HomeStyle = styled.div`
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
   justify-content: space-between;
   align-items: center;
   padding: 0 100px;
`;

const LeftContainerStyle = styled.div`
   width: 45%;
`;

const TextStyle = styled.h2`
   font-size: 50px;
   font-weight: bold;
   line-height: 160%;
`;

const LinkStyle = styled(Link)`
   margin-top: 70px;
   width: 261px;
   height: 40px;
   background-color: ${colors.primary};
   border-radius: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   color: #fff;
   text-decoration: none;
`;

const RightContainerStyle = styled.div`
   width: 45%;
`;

const ImgStyle = styled.img`
   width: 100%;
`;

function Home() {
   const { theme } = useContext(ThemeContext);
   return (
      <HomeStyle>
         <BackgroundStyle $isDarkTheme={theme === 'dark'}>
            <LeftContainerStyle>
               <TextStyle>
                  Repérez vos besoins, on s'occupe du reste, avec les meilleurs
                  talent
               </TextStyle>
               <LinkStyle to="/survey/1">Faire le test</LinkStyle>
            </LeftContainerStyle>
            <RightContainerStyle>
               <ImgStyle src={home} alt="image d'illustration" />
            </RightContainerStyle>
         </BackgroundStyle>
      </HomeStyle>
   );
}

export default Home;

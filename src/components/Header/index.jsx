import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import logo_light from '../../assets/img/dark-logo.png';
import logo_dark from '../../assets/img/light-logo.png';

import colors from '../../utils/style/colors';

import Switch from '../Switch';

import { ThemeContext } from '../../utils/context';

const HeaderStyle = styled.header`
   width: 100%;
   height: 130px;
   padding: 0 33px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const LogoStyle = styled.img`
   height: 70px;
`;

const NavStyle = styled.nav`
   width: 32%;
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const LinkStyle = styled(Link)`
   color: ${(props) => (props.$isDarkTheme ? `#fff` : `#8186a0`)};
   font-weight: 700;
   font-size: 20px;
   text-decoration: none;
   ${(props) =>
      props.$survey &&
      `background-color: ${colors.primary}; 
      color: #fff;
      border-radius: 30px; 
      height: 40px; 
      width: 174px;
      display: flex; 
      justify-content: center; 
      align-items: center;`}
`;

function Header() {
   const { theme } = useContext(ThemeContext);
   return (
      <HeaderStyle>
         <LogoStyle
            src={theme === 'dark' ? logo_dark : logo_light}
            alt="Logo de la société Shiny"
         />
         <NavStyle>
            <LinkStyle to="/" $isDarkTheme={theme === 'dark'}>
               Accueil
            </LinkStyle>
            <LinkStyle to="/freelances" $isDarkTheme={theme === 'dark'}>
               Profils
            </LinkStyle>
            <LinkStyle to="/survey/1" $survey>
               Faire le test
            </LinkStyle>
            <Switch />
         </NavStyle>
      </HeaderStyle>
   );
}

export default Header;

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import colors from '../../utils/style/colors';

import { ThemeContext } from '../../utils/context';

const CardStyle = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   border-radius: 30px;
   background-color: ${(props) => (props.$isDarkTheme ? `#4F4C6B` : `#f9f9fc`)};
   height: 334px;
   width: 339px;
   padding: 25px 30px;
   margin-bottom: 40px;
`;

const ImgStyle = styled.img`
   width: 148px;
   height: 148px;
   border-radius: 148px;
`;

const LabelStyle = styled.h2`
   align-self: flex-start;
   font-size: 22px;
   color: ${(props) => (props.$isDarkTheme ? `#fff` : colors.primary)};
`;

const TitleStyle = styled.p`
   font-size: 25px;
`;

function Card({ label = 'Développeur', title = 'Jean DUPONT', picture }) {
   const { theme } = useContext(ThemeContext);
   return (
      <CardStyle $isDarkTheme={theme === 'dark'}>
         <LabelStyle $isDarkTheme={theme === 'dark'}>{label}</LabelStyle>
         <ImgStyle src={picture} alt="photo d'un freelance" />
         <TitleStyle>{title}</TitleStyle>
      </CardStyle>
   );
}

Card.propTypes = {
   label: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   picture: PropTypes.string.isRequired,
};

export default Card;

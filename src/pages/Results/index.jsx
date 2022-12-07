import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../utils/style/colors';

import { SurveyContext, ThemeContext } from '../../utils/context';

import { useFetch } from '../../utils/hook/index';

import Loader from '../../utils/style/loader';

const ResultsStyle = styled.div`
   padding: 70px 33px 0 33px;
   width: 100%;
   height: auto;
`;

const BackgroundStyle = styled.div`
   width: 100%;
   background-color: ${(props) =>
      props.$isDarkTheme ? `#4F4C6B` : colors.background};
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 85px 0 100px 0;
`;

const ErrorStyle = styled.div``;

const TitleStyle = styled.h1`
   max-width: 30%;
   text-align: center;
   font-size: 30px;
   font-weight: bold;
   & > span {
      padding-left: 10px;
   }
`;

const TitleRespStyle = styled.span`
   color: ${(props) => (props.$isDarkTheme ? `#fff` : colors.primary)};
   text-transform: capitalize;
   display: inline-block;
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
   font-size: 2àpx;
`;

const BesoinsContainerStyle = styled.div`
   margin-top: 70px;
   width: 800px;
`;

const BesoinStyle = styled.div`
   &:first-child {
      margin-top: 0px;
   }
   margin-top: 20px;
`;

const BesoinTitleStyle = styled.h2`
   color: ${(props) => (props.$isDarkTheme ? `#fff` : colors.primary)};
   text-transform: capitalize;
   font-size: 20px;
`;

const BesoinTextStyle = styled.p`
   color: ${(props) => (props.$isDarkTheme ? `#fff` : `#8186a0`)};
   font-size: 20px;
   margin-top: 5px;
`;

function Results() {
   const { answers } = useContext(SurveyContext);
   const { theme } = useContext(ThemeContext);

   const formatResult = (answers) => {
      const answerNumber = Object.keys(answers);

      return answerNumber.reduce((previousParams, answerNumber, index) => {
         const firstAnswer = index === 0;
         const separator = firstAnswer ? '' : '&';
         return `${previousParams}${separator}a${answerNumber}=${
            answers[answerNumber] === true ? '1' : '0'
         }`;
      }, '');
   };

   const questionsString = formatResult(answers);

   const { data, isLoading, error } = useFetch(
      `https://api-shiny.camille-crapat.fr/results?${questionsString}`
   );

   const { resultsData } = data;

   return (
      <ResultsStyle>
         {isLoading ? (
            <BackgroundStyle $isDarkTheme={theme === 'dark'}>
               <Loader />
            </BackgroundStyle>
         ) : error ? (
            <BackgroundStyle $isDarkTheme={theme === 'dark'}>
               <ErrorStyle>Une erreur est survenu !</ErrorStyle>
            </BackgroundStyle>
         ) : (
            <BackgroundStyle $isDarkTheme={theme === 'dark'}>
               <TitleStyle>
                  Les compétences dont vous avez besoin :{' '}
                  {resultsData &&
                     resultsData.map((result, index) => (
                        <TitleRespStyle
                           key={`result-title-${index} - ${result.title}`}
                           $isDarkTheme={theme === 'dark'}
                        >
                           {result.title}
                           {index === resultsData.length - 1 ? '' : ','}
                        </TitleRespStyle>
                     ))}
               </TitleStyle>
               <LinkStyle to="/freelances">Découvrez nos profils</LinkStyle>
               <BesoinsContainerStyle>
                  {resultsData &&
                     resultsData.map((result, index) => (
                        <BesoinStyle key={`${result.title} - ${index}`}>
                           <BesoinTitleStyle $isDarkTheme={theme === 'dark'}>
                              {result.title}
                           </BesoinTitleStyle>
                           <BesoinTextStyle $isDarkTheme={theme === 'dark'}>
                              {result.description}
                           </BesoinTextStyle>
                        </BesoinStyle>
                     ))}
               </BesoinsContainerStyle>
            </BackgroundStyle>
         )}
      </ResultsStyle>
   );
}

export default Results;

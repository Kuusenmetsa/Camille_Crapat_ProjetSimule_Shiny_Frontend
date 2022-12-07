import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';

import colors from '../../utils/style/colors';

import Loader from '../../utils/style/loader';

import { ThemeContext } from '../../utils/context';
import { SurveyContext } from '../../utils/context';
import { useFetch } from '../../utils/hook';

const SurveyStyle = styled.div`
   width: 100%;
   min-height: 83vh;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   padding-top: 50px;
`;

const ContainerStyle = styled.div`
   width: 55%;
   height: 65vh;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   text-align: center;
`;

const TitleStyle = styled.h2`
   font-size: 25px;
   font-weight: bold;
   border-bottom: 2px solid ${colors.primary};
`;

const TextStyle = styled.p`
   font-size: 20px;
   font-weight: normal;
`;

const ContainerRowStyle = styled.div`
   width: 600px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   ${(props) => props.$link && `width: 250px;`}
`;

const ButtonQuestionStyle = styled.button`
   height: 95px;
   width: 290px;
   border-radius: 30px;
   background-color: ${(props) => (props.$isDarkTheme ? `#4F4C6B` : `#f9f9fc`)};
   border: none;
   font-size: 25px;
   font-weight: bold;
   &:active {
      border: 2px solid ${colors.primary};
   }
   ${(props) => props.$select && `border: 2px solid ${colors.primary};`};
   cursor: pointer;
`;

const ButtonChangeQuestion = styled(Link)`
   font-size: 18px;
`;

function Survey() {
   const { theme } = useContext(ThemeContext);
   const { answers, saveAnswers } = useContext(SurveyContext);
   const { data, isLoading, error } = useFetch(
      'https://api-shiny.camille-crapat.fr/survey'
   );

   let { questionNumber } = useParams();
   let questionNumberInt = parseInt(questionNumber);
   let prevQuestionNumber = questionNumberInt <= 1 ? 1 : questionNumberInt - 1;
   let nextQuestionNumber = questionNumberInt + 1;

   const { surveyData } = data;

   if (error) {
      return <span>une erreur est survenu</span>;
   }

   const saveReply = (answer) => {
      saveAnswers({ [questionNumber]: answer });
   };

   return (
      <SurveyStyle>
         <ContainerStyle>
            <TitleStyle>Question {questionNumber}</TitleStyle>
            {isLoading ? (
               <Loader />
            ) : (
               <TextStyle>{surveyData && surveyData[questionNumber]}</TextStyle>
            )}

            <ContainerRowStyle>
               <ButtonQuestionStyle
                  $select={answers[questionNumber] === true}
                  $isDarkTheme={theme === 'dark'}
                  onClick={() => saveReply(true)}
               >
                  Oui
               </ButtonQuestionStyle>
               <ButtonQuestionStyle
                  $select={answers[questionNumber] === false}
                  $isDarkTheme={theme === 'dark'}
                  onClick={() => saveReply(false)}
               >
                  Non
               </ButtonQuestionStyle>
            </ContainerRowStyle>
            <ContainerRowStyle $link>
               <ButtonChangeQuestion to={`/survey/${prevQuestionNumber}`}>
                  Précedente
               </ButtonChangeQuestion>
               {surveyData && surveyData[questionNumberInt + 1] ? (
                  <ButtonChangeQuestion to={`/survey/${nextQuestionNumber}`}>
                     Suivante
                  </ButtonChangeQuestion>
               ) : (
                  <ButtonChangeQuestion to="/results">
                     Résultats
                  </ButtonChangeQuestion>
               )}
            </ContainerRowStyle>
         </ContainerStyle>
      </SurveyStyle>
   );
}

export default Survey;

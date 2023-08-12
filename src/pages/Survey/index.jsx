import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';

import './index.css';

import Loader from '../../components/Loader';

import { ThemeContext } from '../../utils/context';
import { SurveyContext } from '../../utils/context';
import { useFetch } from '../../utils/hook';

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
      return (
         <span className={theme === 'dark' ? `whiteText` : `blackText`}>
            une erreur est survenu
         </span>
      );
   }

   const saveReply = (answer) => {
      saveAnswers({ [questionNumber]: answer });
   };

   return (
      <div
         className={
            theme === 'dark'
               ? `survey blueBackground`
               : `survey whiteBackground`
         }
      >
         <div className="surveyContainer">
            <h2
               className={
                  theme === 'dark'
                     ? `surveyContainer__questionNumber whiteText`
                     : `surveyContainer__questionNumber blackText`
               }
            >
               Question {questionNumber}
            </h2>
            {isLoading ? (
               <Loader />
            ) : (
               <p
                  className={
                     theme === 'dark'
                        ? `surveyContainer__question whiteText`
                        : `surveyContainer__question blackText`
                  }
               >
                  {surveyData && surveyData[questionNumber]}
               </p>
            )}

            <div className="surveyContainer__answers">
               <div
                  className={
                     answers[questionNumber] === true
                        ? theme === 'dark'
                           ? `select purpleBackground whiteText surveyContainer__answer`
                           : `select greyBackground blackText surveyContainer__answer`
                        : theme === 'dark'
                        ? `purpleBackground whiteText surveyContainer__answer`
                        : `greyBackground blackText surveyContainer__answer`
                  }
                  onClick={() => saveReply(true)}
               >
                  Oui
               </div>
               <div
                  className={
                     answers[questionNumber] === false
                        ? theme === 'dark'
                           ? `select purpleBackground whiteText surveyContainer__answer`
                           : `select greyBackground blackText surveyContainer__answer`
                        : theme === 'dark'
                        ? `purpleBackground whiteText surveyContainer__answer`
                        : `greyBackground blackText surveyContainer__answer`
                  }
                  onClick={() => saveReply(false)}
               >
                  Non
               </div>
            </div>
            <div
               className={
                  theme === 'dark'
                     ? `surveyContainer__changeQuestion whiteText`
                     : `surveyContainer__changeQuestion blackText`
               }
            >
               <Link to={`/survey/${prevQuestionNumber}`}>Précedente</Link>
               {surveyData && surveyData[questionNumberInt + 1] ? (
                  <Link to={`/survey/${nextQuestionNumber}`}>Suivante</Link>
               ) : (
                  <Link to="/results">Résultats</Link>
               )}
            </div>
         </div>
      </div>
   );
}

export default Survey;

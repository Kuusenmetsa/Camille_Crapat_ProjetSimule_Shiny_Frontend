import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import { SurveyContext, ThemeContext } from '../../utils/context';

import { useFetch } from '../../utils/hook/index';

import Loader from '../../components/Loader';

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
      <div
         className={
            theme === 'dark'
               ? `results blueBackground`
               : `results whiteBackground`
         }
      >
         {isLoading ? (
            <div
               className={
                  theme === 'dark'
                     ? `results__background purpleBackground`
                     : `results__background greyBackground`
               }
            >
               <Loader />
            </div>
         ) : error ? (
            <div
               className={
                  theme === 'dark'
                     ? `results__background purpleBackground`
                     : `results__background greyBackground`
               }
            >
               <div
                  className={
                     theme === 'dark'
                        ? `results__errors whiteText`
                        : `results__errors blackText`
                  }
               >
                  Une erreur est survenu !
               </div>
            </div>
         ) : (
            <div
               className={
                  theme === 'dark'
                     ? `results__background purpleBackground`
                     : `results__background greyBackground`
               }
            >
               <h1 className={theme === 'dark' ? `whiteText` : `blackText`}>
                  Les compétences dont vous avez besoin :{' '}
                  {resultsData &&
                     resultsData.map((result, index) => (
                        <span
                           key={`result-title-${index} - ${result.title}`}
                           className={
                              theme === 'dark' ? `whiteText` : `purpleText`
                           }
                        >
                           {result.title}
                           {index === resultsData.length - 1 ? '' : ','}
                        </span>
                     ))}
               </h1>
               <Link to="/freelances">Découvrez nos profils</Link>
               <div className="results__detailled__container">
                  {resultsData &&
                     resultsData.map((result, index) => (
                        <div
                           className="results__detailled"
                           key={`${result.title} - ${index}`}
                        >
                           <h2
                              className={
                                 theme === 'dark'
                                    ? `results__detailled--title whiteText`
                                    : `results__detailled--title purpleText`
                              }
                           >
                              {result.title}
                           </h2>
                           <p
                              className={
                                 theme === 'dark'
                                    ? `results__detailled--text whiteText`
                                    : `results__detailled--text greyText`
                              }
                           >
                              {result.description}
                           </p>
                        </div>
                     ))}
               </div>
            </div>
         )}
      </div>
   );
}

export default Results;

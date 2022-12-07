import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Freelances from './pages/Freelances';
import Survey from './pages/Survey';
import Results from './pages/Results';
import Error from './pages/Error';

import { ThemeProvider } from './utils/context';
import { SurveyProvider } from './utils/context';

import GlobalStyle from './utils/style/base';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <ThemeProvider>
         <SurveyProvider>
            <Router>
               <GlobalStyle />
               <Header />
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/freelances" element={<Freelances />} />
                  <Route path="/survey/:questionNumber" element={<Survey />} />
                  <Route path="results" element={<Results />} />
                  <Route path="*" element={<Error />} />
               </Routes>
            </Router>
         </SurveyProvider>
      </ThemeProvider>
   </React.StrictMode>
);

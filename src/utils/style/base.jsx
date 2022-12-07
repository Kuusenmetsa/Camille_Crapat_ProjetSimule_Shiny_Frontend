import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';

import { ThemeContext } from '../context';

function GlobalStyle() {
   const { theme } = useContext(ThemeContext);
   return <StyledGlobalStyle $isDarkMode={theme === 'dark'} />;
}

const StyledGlobalStyle = createGlobalStyle`
*{
  font-family: Trebuchet MS, Arial;
  color: ${(props) => (props.$isDarkMode ? `#fff` : `#2f2e41`)};
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body{
  background-color: ${(props) => (props.$isDarkMode ? `#2F2E41` : `#fff`)};
}
`;

export default GlobalStyle;

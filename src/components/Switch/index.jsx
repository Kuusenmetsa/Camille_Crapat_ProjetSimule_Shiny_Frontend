import { useContext } from 'react';

import './index.css';

import { ThemeContext } from '../../utils/context';

function Switch() {
   const { theme, toggleTheme } = useContext(ThemeContext);
   return (
      <div className="container">
         <div className="switch">
            <input
               type="checkbox"
               checked={theme}
               onChange={() => toggleTheme()}
               className="switch__checkbox"
            />
            <label
               htmlFor="test"
               onClick={() => toggleTheme()}
               className="switch__label"
            >
               <span
                  className={
                     theme === 'dark' ? `switch__inner dark` : `switch__inner`
                  }
               />
               <span
                  className={
                     theme === 'dark' ? `switch__button dark` : `switch__button`
                  }
               />
            </label>
         </div>
      </div>
   );
}

export default Switch;

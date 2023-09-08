import { useContext } from 'react';

import './index.css';

import { ThemeContext } from '../../utils/context';

function Switch() {
   const { theme, toggleTheme } = useContext(ThemeContext);
   return (
      <div className="container">
         <div className="switch">
            <label
               htmlFor="switchInput"
               onClick={() => toggleTheme()}
               className="switch__label"
            >
               <input
                  type="checkbox"
                  checked={theme}
                  onChange={() => toggleTheme()}
                  className="switch__checkbox"
                  name="switchInput"
               />
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

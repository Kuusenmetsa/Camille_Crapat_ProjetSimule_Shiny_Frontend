import styled from 'styled-components';
import { useContext } from 'react';

import { ThemeContext } from '../../utils/context';

const SwitchStyle = styled.div`
   text-align: center;
`;

const ToogleSwitchStyle = styled.div`
   position: relative;
   width: 75px;
   display: inline-block;
   text-align: left;
`;

const LabelStyle = styled.label`
   display: block;
   overflow: hidden;
   cursor: pointer;
   border: 0 solid #bbb;
   border-radius: 20px;
`;

const InnerStyle = styled.span`
   display: block;
   width: 200%;
   margin-left: -100%;
   transition: margin-left 0.3s ease-in 0s;
   &:before,
   &:after {
      float: left;
      width: 50%;
      height: 36px;
      padding: 0;
      line-height: 36px;
      color: #fff;
      font-weight: bold;
      box-sizing: border-box;
   }
   &:before {
      content: '🌛';
      padding-left: 10px;
      background-color: #000;
      color: #fff;
   }
   &:after {
      content: '☀️';
      padding-right: 10px;
      background-color: #ffc726;
      color: #fff;
      text-align: right;
   }

   ${(props) => props.$theme === 'dark' && `margin-left: 0;`}
`;

const SwitchButtonStyle = styled.span`
   display: block;
   width: 24px;
   margin: 5px;
   background: #fff;
   position: absolute;
   top: 0;
   bottom: 0;
   right: 40px;
   border: 0 solid #bbb;
   border-radius: 20px;
   transition: all 0.3s ease-in 0s;
   ${(props) => props.$theme === 'dark' && `right: 0px;`}
`;

const CheckboxStyle = styled.input`
   display: none;
`;

function Switch() {
   const { theme, toggleTheme } = useContext(ThemeContext);
   return (
      <SwitchStyle>
         <ToogleSwitchStyle>
            <CheckboxStyle
               type="checkbox"
               checked={theme}
               onChange={() => toggleTheme()}
            />
            <LabelStyle htmlFor="test" onClick={() => toggleTheme()}>
               <InnerStyle $theme={theme} />
               <SwitchButtonStyle $theme={theme} />
            </LabelStyle>
         </ToogleSwitchStyle>
      </SwitchStyle>
   );
}

export default Switch;

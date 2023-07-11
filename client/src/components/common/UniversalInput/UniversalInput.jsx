import { useState } from 'react';

import s from "./UniversalInput.module.scss";
import Eye from "../../../assets/eye-regular.svg";
import EyeDashed from "../../../assets/eye-slash-regular.svg";

const UniversalInput = ({name, type, label, callback, value}) => {

   const [seePass, setSeePass] = useState(false);

   const InputType = () => {
      if(type === 'password'){
         return seePass ? 'text' : type;
      }
      if(type !== 'password'){
         return type;
      }
   }

   return (
      <div className={s.inputBox}>
         <input 
            name={name} 
            type={InputType()}
            className={s.inputBox__input}
            onChange={(e) => callback(e.target.value)}
            value={value}
            autoComplete="off"
         />
         <label htmlFor={name} className={`${s.inputBox__label} ${value.length > 0 ? s.inputBox__label_active : ''}`}>{label}</label>
         {
            type === 'password' &&
            <button className={s.inputBox__btn} onClick={(e) => `${e.preventDefault()} ${setSeePass(!seePass)}`}>
               <img src={seePass ? EyeDashed : Eye} alt="eye" className={s.inputBox__icon} />
            </button>
         }
      </div>
   );
}

export default UniversalInput;
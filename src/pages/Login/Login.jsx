import { useState } from "react";
import { auth } from "../../data/firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";

import s from "./Login.module.scss";
import UniversalInput from "../../components/common/UniversalInput/UniversalInput";
import GradientButton from "../../components/common/GradientButton";

const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState(false);
   const [keepSignIn, setKeepSignIn] = useState(false);

   const HandleSignIn = async (e) => {
      try{
         await signInWithEmailAndPassword(auth, email, password);
         keepSignIn
         ? localStorage.setItem("Login", `${auth.currentUser.email}`)
         : sessionStorage.setItem("Login", `${auth.currentUser.email}`)
      } catch(err) {
         console.log('Error found:', err);
         setError(true);
         return;
      }

      setError(false);
   }
   console.log(keepSignIn);
   return (
      <section className={s.login}>
         <h1 className={s.login__title}>Zaloguj się</h1>
         <div className={s.login__box}>
            <UniversalInput 
               name="email" 
               type="email" 
               label="E-mail" 
               callback={setEmail} 
               value={email}
            />
            <UniversalInput 
               name="password" 
               type="password" 
               label="Hasło" 
               callback={setPassword} 
               value={password}
            />
            <label className={s.login__checkbox}>
               <input type="checkbox" onChange={() => setKeepSignIn(!keepSignIn)}/>
               Nie wylogowuj mnie
            </label>
            {
               error &&
               <p className={s.error}>E-mail lub hasło nie jest poprawne!</p>
            }
            <GradientButton text="Zaloguj" execute={(e) => `${HandleSignIn()} ${e.preventDefault()}`}/>
            <div className={s.login__bottomInfo}>
               <h3>Nie masz jeszcze konta?</h3>
               <a href="register">Stwórz konto</a>
            </div>
         </div>
      </section>
   );
}
 
export default Login;
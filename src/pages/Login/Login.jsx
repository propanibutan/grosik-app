import { useState } from "react";
import { auth } from "../../data/firebase_config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import UniversalInput from "../../components/common/UniversalInput/UniversalInput";
import GradientButton from "../../components/common/GradientButton";

import s from "./Login.module.scss";

const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState(false);
   const [successMsg, setSuccessMsg] = useState(false);
   const [keepSignIn, setKeepSignIn] = useState(false);

   const HandleSignIn = async (e) => {
      setSuccessMsg(false);
      if(sessionStorage.getItem('Login')){
         alert(`Użytkownik zalogowany jako: ${sessionStorage.getItem('Login')}`);
         setEmail('');
         setPassword('');
         return;
      }
      if(localStorage.getItem('Login')){
         alert(`Użytkownik zalogowany jako: ${localStorage.getItem('Login')}`);
         setEmail('');
         setPassword('');
         return;
      }
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
      setSuccessMsg(true);
      setEmail('');
      setPassword('');
      setError(false);
   }

   const HandleSignOut = () => {
      if(sessionStorage.getItem('Login') || localStorage.getItem('Login')){
         signOut(auth);
         sessionStorage.clear();
         localStorage.clear();
         alert('Użytkownik został wylogowany.');
      } else {
         alert('Aktualnie żaden użytkownik nie jest zalogowany.')
      }
   }

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
               error && <p className={s.error}>E-mail lub hasło nie jest poprawne!</p>
            }
            {
               successMsg && <p className={s.success}>Zalogowano pomyślnie!</p>
            }
            <GradientButton text="Zaloguj" execute={(e) => `${HandleSignIn()} ${e.preventDefault()}`}/>
            <GradientButton text="Wyloguj" execute={(e) => `${HandleSignOut()} ${e.preventDefault()}`}/>
            <div className={s.login__bottomInfo}>
               <h3>Nie masz jeszcze konta?</h3>
               <a href="register">Stwórz konto</a>
            </div>
         </div>
      </section>
   );
}
 
export default Login;
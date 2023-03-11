import { useState } from "react";
import { auth } from "../../data/firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";

import s from "./Login.module.scss";
import UniversalInput from "../../components/common/UniversalInput/UniversalInput";
import GradientButton from "../../components/common/GradientButton";

const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const HandleSignIn = async (e) => {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('handle sign in');
      sessionStorage.setItem("Login", `${auth.currentUser.email}`);
   }

   return (
      <section className={s.login}>
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
               <input type="checkbox" />
               Nie wylogowuj mnie
            </label>
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
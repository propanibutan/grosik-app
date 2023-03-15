import { useState } from "react";
import { auth, database } from "../../data/firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import GradientButton from "../../components/common/GradientButton";
import UniversalInput from "../../components/common/UniversalInput/UniversalInput";

import s from "./Register.module.scss";



const Register = () => {

   const [userName, setUserName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [errorMsg, setErrorMsg] = useState(false);

   const SignIn = async (e) => {
      e.preventDefault();
      try{
         const newUser = await createUserWithEmailAndPassword(auth, email, password);
         sessionStorage.setItem("Login", `${auth.currentUser.email}`);
         await setDoc(doc(database, 'users', newUser.user.uid), {
            name: userName,
            email: email,
            password: password,
            created: serverTimestamp(),
         })
      } catch(err) {
         console.log('Error found:', err);
         setErrorMsg(true);
         console.log(errorMsg)
         return;
      }
      console.log(errorMsg)
      setErrorMsg(false);
      console.log('Register succesull');
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
   }

   return (
      <section className={s.register}>
         <h1 className={s.register__title}>Załóż konto</h1>
         <div className={s.register__box}>
            <form action="submit" className={s.register__form}>
               <UniversalInput name="name" type="text" label="Nazwa użytkownika" callback={setUserName} value={userName}/>
               <UniversalInput name="e-mail" type="email" label="E-mail" callback={setEmail} value={email}/>
               <UniversalInput name="password" type="password" label="Hasło" callback={setPassword} value={password}/>
               <UniversalInput name="confirm-password" type="password" label="Powtórz hasło" callback={setConfirmPassword} value={confirmPassword}/>
               {
                  errorMsg &&
                  <p className={s.error}>E-mail jest już w użytku!</p>
               }
               <GradientButton text="Załóż konto" execute={(e) => SignIn(e)}/>
            </form>
            <h3 className={s.register__box_h3}>
               Masz już konto? <a href="/login" className={s.register__box_link}>Zaloguj się</a>
            </h3>
            <p className={s.register__box_bottomText}><a href="#">Polityka prywatności</a> i <a href="#">Warunki świadczenia usług</a></p>
         </div>
      </section>
   );
}

export default Register;
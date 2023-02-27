import { useState } from "react";
import { auth } from "../../data/firebase_config";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

import s from "./Register.module.scss";
import DataTable from "../../components/DataTable/DataTable";

const Register = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const SignIn = async (e) => {
      // e.preventDefault();
      await createUserWithEmailAndPassword(auth, email, password);
   }
   const SignOut = async (e) => {
      try {
         await signOut(auth);
         sessionStorage.clear();
      } catch(err) {
         console.log(err);
      }
   }

   const SetSessionStorageUser = auth?.currentUser?.email !== undefined && 
      sessionStorage.setItem("Login", `${auth.currentUser.email}`);
      
   console.log(auth?.currentUser?.email)

   return (
      <section>
         <form action="submit">
            <input type="text" placeholder="Wpisz email" 
               onChange={(e) => setEmail(e.target.value)}
            />
            <input type="text" placeholder="Wpisz hasło" 
               onChange={(e) => setPassword(e.target.value)}
            />
            <input type="button" value="Zarejestruj się" 
               onClick={(e) => SignIn()}
            />
            <input type="button" value="Wyloguj się" 
               onClick={(e) => SignOut()}
            />
         </form>
         <DataTable />
      </section>
   );
}

export default Register;
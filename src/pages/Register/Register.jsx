import { useState } from "react";
import { auth } from "../../data/firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import s from "./Register.module.scss";

const Register = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const SignIn = async () => {
      await createUserWithEmailAndPassword(auth, email, password);
   }

   return (
      <section>
         <form action="">
            <input type="text" placeholder="Email" 
               onChange={(e) => setEmail(e.target.value)}
            />
            <input type="text" placeholder="Password" 
               onChange={(e) => setPassword(e.target.value)}
            />
            <input type="button" value="Sign in" 
               onClick={() => SignIn()}
            />
         </form>
      </section>
   );
}
 
export default Register;
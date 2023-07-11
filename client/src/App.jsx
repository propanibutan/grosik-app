import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Register from './pages/Register/Register';
import Home from './pages/Landing-page/Home';
import Login from './pages/Login/Login';

function App() {
const { t } = useTranslation();

  return (  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home t={t} />} />
        <Route path='login' element={<Login />} /> 
        <Route path='register' element={<Register />} />
        {/* <Route path='wylogowano' element={<Logout t={t} />} /> */}
        {/* <Route path='aplikacja' element={<Application t={t} />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
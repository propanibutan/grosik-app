import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Home from './pages/Landing-page/Home';
import { useTranslation, } from "react-i18next";

function App() {
const { t } = useTranslation();

  return (  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home t={t} />} />
        {/* <Route path='logowanie' element={<Login t={t} />} /> */}
        <Route path='register' element={<Register />} />
        {/* <Route path='wylogowano' element={<Logout t={t} />} /> */}
        {/* <Route path='aplikacja' element={<Application t={t} />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
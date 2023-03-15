
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { useTranslation } from "react-i18next";

function App() {

    const { t } = useTranslation();
  return (  
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        {/* <Route path='wylogowano' element={<Logout />} /> */}
        {/* <Route path='aplikacja' element={<Application />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;


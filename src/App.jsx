import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';

function App() {

  return (  
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='logowanie' element={<Login />} /> */}
        <Route path='register' element={<Register />} />
        {/* <Route path='wylogowano' element={<Logout />} /> */}
        {/* <Route path='aplikacja' element={<Application />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
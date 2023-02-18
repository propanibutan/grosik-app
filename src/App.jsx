import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

function App() {


  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/logowanie' element={<Login />} />
        <Route path='/rejestracja' element={<Register />} />
        <Route path='/wylogowano' element={<Logout />} />
        <Route path='/aplikacja' element={<Application />} />
      </Routes>
    </Router>
  )
}

export default App

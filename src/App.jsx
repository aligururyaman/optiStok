import './App.css'
import Error from './pages/Error/Error';
import Login from './pages/login/Login'
import MainPage from './pages/main/MainPage';
import StokTakip from './pages/stok/StokTakip';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/optistok" element={<MainPage />} />
          <Route path="/stoktakip" element={<StokTakip />} />
          <Route path="/error" element={<Error/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

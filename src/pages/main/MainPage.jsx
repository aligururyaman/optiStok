import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useAuth } from '../../context/Auth';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/error');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Navbar />
        {
          isLoggedIn && (
        <div>
          merhaba ben main
        </div>
          )
        }
    </>
  )
}

export default MainPage
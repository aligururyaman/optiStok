import { Box, Button, Card } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faDatabase,faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../context/Auth'


const Navbar = () => {
    const { isLoggedIn, login, logout } = useAuth();
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/')
    }
  return (
    <>
    {isLoggedIn && (
        <Card mt="1rem">
            <Box ml="1rem" mr="1rem" mb="1rem"  display="flex"
                justifyContent="space-between">
                <Box>
                <Link to="/optiStok">
                    <Button size='md'
                        height='3rem'
                        width='8rem'
                        border='2px'
                        borderColor='black.500'
                        leftIcon={<FontAwesomeIcon icon={faHouse} />}>
                        AnaSayfa
                    </Button>
                </Link>
                <Link to="/stoktakip">
                    <Button size='md'
                        height='3rem'
                        width='8rem'
                        border='2px'
                        borderColor='black.500'
                        leftIcon={<FontAwesomeIcon icon={faDatabase} />}
                        ml="1rem">
                        Stok Takip
                    </Button>
                    </Link>
                    </Box>
                    <Button size='md'
                        height='3rem'
                        width='8rem'
                        border='2px'
                        borderColor='black.500'
                        leftIcon={<FontAwesomeIcon icon={faDoorOpen} />}
                        ml="1rem"
                        onClick={handleLogout}>
                        Çıkış
                    </Button>
                
            </Box>
        </Card>
    )}
    </>
  )
}

export default Navbar
import React, { useEffect, useState } from 'react'
import { Alert, AlertIcon, AlertTitle, Box, Button, Center, Input, InputGroup, InputRightElement, Stack, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth'



const Login = () => {
    // Şifre Gösterme-gizleme bölümü
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    // Kullanıcı adı ve şifre alma bölümü
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState("");   
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    // Giriş yapıldı sorgusu
    const { isLoggedIn, login, logout } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "userName") {
            setUserName(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    // users loglarının axios ile çekilmesi
    useEffect(() => {
        const fetchData = async (data) => {
            try {
                const response = await axios.get('/src/data/users.JSON')
                setUserData(response.data)
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchData()
    }, [])

    // Giriş yapılan fonksiyon
    const handleSignIn = async () => {
        const userFound = userData.some(user => user.userName === userName && user.password === password);
            if (userFound) {
            await login()
            } else {
            await logout()
            setError("Kullanıcı adı veya Şifre Hatalı   ")
            }
        }
        useEffect(() => {
            if (isLoggedIn) {
                navigate('/optistok')
            }
        }, [isLoggedIn])
    
   const handleRegister = async () => {
    setError("Bu Buton henüz aktif değil.")
   }
  return (
    <div>
        {error && (
            <Center>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>{error}</AlertTitle>
            </Alert>
            </Center>
        )}
        <Center mt="5rem" >
            <Stack textAlign="center">
                <Text color="red" fontSize="3rem">
                    Kontrol Paneline Hoşgeldiniz..
                </Text>
                <Text fontSize="2rem">
                    Lütfen Giriş yapın.
                </Text>
            </Stack>
        </Center>
        <Center>
            <Box alignItems="center" borderWidth='2px' borderRadius='lg' px="3rem" h="14rem" mt="2rem">
                <InputGroup size='md' mt="2rem">
                    <Input
                        pr='4.5rem'
                        placeholder='Kullanıcı Adı'
                        name="userName"
                        value={userName}
                        onChange={handleChange}
                    />
                </InputGroup>
                <InputGroup size='md' mt="1rem">
                    <Input
                        pr='4.5rem'
                        type={show ? 'text' : 'password'}
                        placeholder='Şifre'
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Gizle' : 'Göster'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Center mt="2rem">
                    <Button 
                    rightIcon={<FontAwesomeIcon icon={faEarthAmericas} />}
                    onClick={handleSignIn}
                    mr="2rem">
                        Giriş Yap
                    </Button>
                    <Button 
                    rightIcon={<FontAwesomeIcon icon={faPenToSquare} />}
                    onClick={handleRegister}>
                        Kayıt
                    </Button>
                </Center>
            </Box>
        </Center>
        <Center>
            <Text fontSize="xs" mt="1rem">
                &copy; Ali Gurur Yaman
            </Text>
        </Center>
        
    </div>
  )
}

export default Login
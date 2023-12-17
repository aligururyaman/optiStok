import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Alert
  status='error'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Bu sayfaya giriş izniniz yok !
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Bu sayfaya girebilmek için lütfen <Link to="/"> Buraya Tıklayarak</Link>  Giriş yapın
  </AlertDescription>
</Alert>
  )
}

export default Error
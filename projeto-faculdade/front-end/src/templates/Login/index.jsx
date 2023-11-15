import {
    Box,
    Center,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    FormErrorMessage,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { login } from '../../services/api';
  
  export const Login = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const [errorValidation, setErrorValidation] = useState(false)

    return (
      <>
      <Center h="100vh">
        <Box p={10} maxW="900px" borderWidth="1px" borderRadius="md" padding={'16'} boxShadow="lg" backgroundColor={'#f4f4f4'}>
          <Heading as="h1" size="lg" mb={4}>
            Login
          </Heading>
          <form>
            <Stack spacing={3} mt={4}>
  
              <FormControl isRequired isInvalid={errorValidation} >
                <FormLabel htmlFor="email">E-mail:</FormLabel>
                <Input backgroundColor={'white'} onChange={(value) => setEmailValue(value.target.value)} type="email" id="email" name="email" />
                {errorValidation && (
                  <FormErrorMessage>Dados Incorretos</FormErrorMessage>
                )}
              </FormControl>
  
              <FormControl isRequired isInvalid={errorValidation}>
                <FormLabel>Senha:</FormLabel>
                <Input backgroundColor={'white'} onChange={(value) => setPasswordValue(value.target.value)} type="password" id="senha" name="senha" />
                {errorValidation && (
                  <FormErrorMessage>Dados Incorretos</FormErrorMessage>
                )}
              </FormControl>
  
              <Button onClick={async () => {
                login({
                  email: emailValue,
                  password: passwordValue
                }).then((response) => response).catch(() => {
                  setErrorValidation(!errorValidation)
                })
              }} type="button" colorScheme="teal" w="100%">
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
      </>
    );
  };
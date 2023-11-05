import {
    Box,
    Center,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Radio,
    RadioGroup,
    Heading,
  } from '@chakra-ui/react';
  
  export const Login = () => {
    return (
      <Center h="100vh">
        <Box p={10} maxW="900px" borderWidth="1px" borderRadius="md" padding={'16'} boxShadow="lg">
          <Heading as="h1" size="lg" mb={4}>
            Cadastro de Usuário
          </Heading>
          <form>
            <Stack spacing={3}>
              <FormControl isRequired>
                <FormLabel htmlFor="nome">Nome:</FormLabel>
                <Input type="text" id="nome" name="nome" />
              </FormControl>
  
              <FormControl isRequired>
                <FormLabel htmlFor="email">E-mail:</FormLabel>
                <Input type="email" id="email" name="email" />
              </FormControl>
  
              <FormControl isRequired>
                <FormLabel htmlFor="senha">Senha:</FormLabel>
                <Input type="password" id="senha" name="senha" />
              </FormControl>
  
              <FormControl isRequired>
                <FormLabel htmlFor="confirmar-senha">Confirmar Senha:</FormLabel>
                <Input type="password" id="confirmar-senha" name="confirmar-senha" />
              </FormControl>
  
              <FormControl>
                <FormLabel>Gênero:</FormLabel>
                <RadioGroup id="genero" name="genero">
                  <Stack direction="row">
                    <Radio value="Masculino">Masculino</Radio>
                    <Radio value="Feminino">Feminino</Radio>
                    <Radio value="Outro">Outro</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
  
              <FormControl isRequired>
                <FormLabel htmlFor="data-nascimento">Data de Nascimento:</FormLabel>
                <Input type="date" id="data-nascimento" name="data-nascimento" />
              </FormControl>
  
              <FormControl>
                <FormLabel htmlFor="cidade">Cidade:</FormLabel>
                <Input type="text" id="cidade" name="cidade" />
              </FormControl>
  
              <FormControl>
                <FormLabel htmlFor="pais">País:</FormLabel>
                <Input type="text" id="pais" name="pais" />
              </FormControl>
  
              <Button type="submit" colorScheme="teal" w="100%">
                Cadastrar
              </Button>
            </Stack>
          </form>
        </Box>
      </Center>
    );
  };
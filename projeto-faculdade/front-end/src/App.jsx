import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  useDisclosure,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { dataFields } from "./fileds/data-fields";
import ModalComp from "./components/ModalComp";
import { formatedCurrency } from './utils/formatedCurrency'
import { deleteRegister } from './services/api.js'

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);
  const [dataEdit, setDataEdit] = useState({});
  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  const calculationFields = ['Média da Receita Federal', 'Média de Custos', 'Média de Despesas Operacionais',]

  useEffect(() => {
    const db_costumer = localStorage.getItem("cad_cliente")
      ? JSON.parse(localStorage.getItem("cad_cliente"))
      : [];

    setData(db_costumer);
  }, [setData]);

  const handleRemove = async (mes) => {
    const newArray = data.filter((item) => item.mes !== mes);
    
    await deleteRegister(mes)
    setData(newArray);

    localStorage.setItem("cad_cliente", JSON.stringify(newArray));
  };

  const calculateCustos = (data) => {
    const quantidadeItems = data.length;
  
    if (quantidadeItems === 0) {
      return 0; 
    }
  
    const soma = data.reduce((acc, current) => {
      const acum = parseInt(acc)
      const currentValue = parseInt(current.custos)
      const result = acum + currentValue;
      console.log(result)
      return result
    }, 0);
  
    const media = soma / quantidadeItems;
    return media;
  }

  const calculateDespesas = (data) => {
    const quantidadeItems = data.length;
    
    if (quantidadeItems === 0) {
      return 0; 
    }
  
    const soma = data.reduce((acc, current) => {
      const acum = parseInt(acc)
      const currentValue = parseInt(current.despesas)
      const result = acum + currentValue;
      console.log(result)
      return result
    }, 0);
  
    const media = soma / quantidadeItems;
    return media;
  };

  const calculateReceita = (data) => {
    const quantidadeItems = data.length;
  
    if (quantidadeItems === 0) {
      return 0; 
    }
  
    const soma = data.reduce((acc, current) => {
      const acum = parseFloat(acc);
      const currentValue = parseFloat(current.receita);
      const result = acum + currentValue;
      console.log(result);
      return result;
    }, 0);
  
    const media = soma / quantidadeItems;
    return media;
  }

  const calculateReceitaFormated = formatedCurrency(calculateReceita(data))
  const calculateDespesasFormated = formatedCurrency(calculateDespesas(data))
  const calculateCustosFormated = formatedCurrency(calculateCustos(data))

  return (
    <Flex
      h="100vh"
      align="center"
      justify="center"
      fontSize="20px"
      fontFamily="poppins"
    >
      <Box maxW={800} w="100%" h="700px" py={10} px={2}>
        <Box overflowY="auto" height="100%">
          <Table mt="6">
            <Thead>
              <Tr>
                {dataFields.map(item  => <Th maxW={isMobile ? 5 : 100} fontSize="15px" key={item} fontFamily={"body"}>{item}</Th>)}
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ mes, receita, custos, despesas }, index) => (
                <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                  <Td maxW={isMobile ? 5 : 100} fontFamily={"body"}>{mes}</Td>
                  <Td maxW={isMobile ? 5 : 100} fontFamily={"body"}>{formatedCurrency(receita)}</Td>
                  <Td maxW={isMobile ? 5 : 100} fontFamily={"body"}>{formatedCurrency(custos)}</Td>
                  <Td maxW={isMobile ? 5 : 100} fontFamily={"body"}>{formatedCurrency(despesas)}</Td>
                  <Td p={0}>
                    <EditIcon
                      fontSize={20}
                      onClick={() => [
                        setDataEdit({ mes, receita, custos, despesas, index }),
                        onOpen(),
                      ]}
                    />
                  </Td>
                  <Td p={0}>
                    <DeleteIcon
                      fontSize={20}
                      onClick={() => handleRemove(mes)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Button colorScheme="blue" fontFamily={"body"} onClick={() => [setDataEdit({}), onOpen()]}>
          NOVO REGISTRO
        </Button>
        <Box overflowY="auto" height="300px">
          <Table mt="6">
            <Thead>
              <Tr>
                {calculationFields.map(item  => <Th maxW={isMobile ? 5 : 100} fontSize="15px" key={item} fontFamily={"body"}>{item}</Th>)}
                <Th p={0}></Th>
                <Th p={0}></Th>
              </Tr>
            </Thead>
            <Tbody>
                <Tr cursor="pointer " _hover={{ bg: "gray.100" }}>
                  <Td maxW={isMobile ? 5 : 100} fontFamily={"body"}>{calculateReceitaFormated}</Td>
                  <Td maxW={isMobile ? 5 : 100} fontFamily={"body"}>{calculateCustosFormated}</Td>
                  <Td maxW={isMobile ? 5 : 100} fontFamily={"body"}>{calculateDespesasFormated}</Td>
                </Tr>
            </Tbody>
          </Table>
        </Box>
        
      </Box>
      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          setData={setData}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
        />
      )}
    </Flex>
  );
};

export default App;
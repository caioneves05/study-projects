/* eslint-disable react/prop-types */
import { createRegister, updateRegister } from '../services/api.js'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    Box,
    Select,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  const ModalComp = ({ data, setData, dataEdit, isOpen, onClose }) => {
    const [receita, setReceita] = useState(dataEdit.receita || "");
    const [custos, setCustos] = useState(dataEdit.custos || "");
    const [despesas, setDespesas] = useState(dataEdit.despesas || "");
    const [mes, setMes] = useState('');

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const handleMonthChange = (event) => {
        setMes(event.target.value);
    };
  
    const handleSave = () => {

      if (Object.keys(dataEdit).length) {
        data[dataEdit.index] = { mes, receita, custos, despesas };
        
        const dadosNoLocalStorage = JSON.parse(localStorage.getItem("cad_cliente"))
        
        const newDataIndex = dataEdit.index
        const mesParams = dadosNoLocalStorage[newDataIndex].mes
        const setData = data[dataEdit.index]

        updateRegister(mesParams, setData)

        dadosNoLocalStorage[newDataIndex] = setData

        localStorage.setItem("cad_cliente", JSON.stringify(dadosNoLocalStorage))

      }
  
      else {
        const newDataArray = !Object.keys(dataEdit).length
          ? [...(data ? data : []), { mes, receita, custos, despesas }]
          : [...(data ? data : [])];

          const register = {
            mes, 
            receita, 
            custos, 
            despesas 
          }

          createRegister(register)

        if(mesAlreadyExists())  alert('Esse mês já foi registrado')

        else {
          localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));
        
          setData(newDataArray);
        } 
      }
      onClose();
    };


    const mesAlreadyExists = () => {
        if (dataEdit.mes !== mes && data?.length) {
          return data.find((item) => item.mes === mes);
        }
    
        return false;
      };
    
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Cadastro de Clientes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl display="flex" flexDir="column" gap={4}>
                <Box>
                  <FormLabel>Mês</FormLabel>
                  <Select value={mes} onChange={handleMonthChange}>
                    <option value={""}>Selecione o mês</option>
                    {months.map((month, index) => (
                        <option key={index} value={month}>
                            {month}
                        </option>
                    ))}
                  </Select>
                </Box>
                <Box>
                  <FormLabel>Receita</FormLabel>
                  <Input
                    type="number"
                    value={receita}
                    onChange={(e) => setReceita(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Custos</FormLabel>
                  <Input
                    type="number"
                    value={custos}
                    onChange={(e) => setCustos(e.target.value)}
                  />
                </Box>
                <Box>
                  <FormLabel>Despesas Operacionais</FormLabel>
                  <Input
                    type="number"
                    value={despesas}
                    onChange={(e) => setDespesas(e.target.value)}
                  />
                </Box>
              </FormControl>
            </ModalBody>
  
            <ModalFooter justifyContent="start">
              <Button colorScheme="green" mr={3} onClick={handleSave}>
                SALVAR
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                CANCELAR
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalComp;
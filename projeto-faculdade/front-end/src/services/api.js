/* eslint-disable no-undef */
import axios from "axios";

const urlBase = 'http://localhost:6060'


export async function getRegister() {
    try {
        const response = await axios.get(`${urlBase}/register`);
        return response
      } catch (error) {
        throw new Error(error)
      }
}

export async function createRegister(register) {
    try {
      const body = {
        mes: register.mes,
        receita: register.receita,
        custos: register.custos,
        despesas: register.despesas,
      };
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await axios.post(`${urlBase}/create`, body, config);
  
      return response.data;
  
    } catch (error) {
      return error;
    }
  }

  export async function updateRegister(mesIdentificador, newRegistro) {
    try {
      const body = {
        mes: newRegistro.mes,
        receita: newRegistro.receita,
        custos: newRegistro.custos,
        despesas: newRegistro.despesas,
      };
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
  
      const response = await axios.put(`${urlBase}/update/${mesIdentificador}`, body, config);
  
      return response.data;
  
    } catch (error) {
      return error;
    }
  }

  export async function deleteRegister(mes) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
            mes,
          },
      };
  
      const response = await axios.delete(`${urlBase}/register`, config);

      return response.data;
    } catch (error) {
      return error;
    }
  }
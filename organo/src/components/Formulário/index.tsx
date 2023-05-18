import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  times: string[]
}

const Formulario = ({ aoColaboradorCadastrado, times }: FormularioProps) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState()
  
  const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
      date: date
    })
    //Limpando os estados do formulário de forma "forçada".
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)} 
        />
        <CampoTexto 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite o seu cargo" 
          valor={cargo}
          aoAlterado={cargo => setCargo(cargo)}
        />
        <CampoTexto 
          label="Imagem" 
          placeholder="Digite a sua imagem" 
          valor={imagem}
          aoAlterado={imagem => setImagem(imagem)}
        />
        <CampoTexto 
          label="Data de entrada no time"
          placeholder=""
          valor={date}
          aoAlterado={valor => setDate(valor)}
          tipo="date"
          
        />
        <ListaSuspensa 
          required={true} 
          label='Times' itens={times}
          valor={time}
          aoAlterado={time => setTime(time)}
        />
        <Botao>
           Criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;

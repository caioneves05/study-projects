import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'UX e Design',
    'Mobile',
    'Data Science',
    'Inovação',
    'Devops'
  ]

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite o seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
        <CampoTexto label="Imagem" placeholder="Digite a sua imagem" />
        <ListaSuspensa label='Times' itens={times}/>
        <Botao>
          Criar card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;

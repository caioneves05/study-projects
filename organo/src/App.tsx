import { useState } from 'react';
import Banner from './components/Banner'
import Formulario from './components/Formulário';
import Time from './components/Time';
import { IColaborador } from './compartilhado/interfaces/IColaborador';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba85',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Inovação',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf'
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06869',
      corSecundaria: '#fde7e8'
    }
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const colaboradorAdicionado = (colaborador: IColaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png' textoAltImagem='' />
      <Formulario 
        aoColaboradorCadastrado={colaborador => colaboradorAdicionado(colaborador)}
        times={times.map(time => time.nome)}
      />
      {times.map(time => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      )}

    </div>
  );
}

export default App;

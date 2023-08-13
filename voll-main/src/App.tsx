import './App.css';
import Container from './components/Container';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tabela } from './components/Table';
import { Title } from './components/Title';
import { useDataQueries } from './useDataQueries';

function App() {

  const {data, error} = useDataQueries();

  return (
    <>
      <Header />
      <Container> 
        <Title children='Administrative area' />
        <Tabela search={data}/>
      </Container>
      <Footer />
    </>
  );
}

export default App;

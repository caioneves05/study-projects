import './App.css';
import Container from './components/Container';
import { Footer } from './components/Footer';
import { Graphic } from './components/Graphic';
import { Header } from './components/Header';
import { Tabela } from './components/Table';
import { Title } from './components/Title';
import { useDataQueries } from './useDataQueries';
import { useDataWorker } from './useDataWorkers';

function App() {

  const {data: searchs, error: searchsError} = useDataQueries();
  const {data: workers, error: workersError} = useDataWorker()

  if(searchsError || workersError) {
    console.log("Error in request.")
  }


  return (
    <>
      <Header />
      <Container> 
        <Title children='Administrative area' />
        <Tabela search={searchs}/>
        <Graphic searchs={searchs} workers={workers}  />
      </Container>
      <Footer />
    </>
  );
}

export default App;

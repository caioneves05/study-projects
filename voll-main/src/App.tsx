
import './App.css';
import { Assessment } from './components/Assessment';
import { Button } from './components/Button';
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
        <Button>Register specialist</Button>
        <Tabela search={searchs}/>
        <Button>View more</Button>
        <Title children='Specialist consultations'/>
        <Graphic searchs={searchs} workers={workers}  />
        <Title children='Expert Reviews'/>
        <Assessment workers={workers}/>
        <Button>View more</Button>
      </Container>
      <Footer />
    </>
  );
}

export default App;

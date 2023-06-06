
import style from './App.module.scss';
import Formulario from '../components/Formulário';
import Lista from '../components/Lista';
import Cronometro from '../components/Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <header className="App-header">
        <Formulario />
        <Cronometro />
        <Lista />
      </header>
    </div>
  );
}

export default App;

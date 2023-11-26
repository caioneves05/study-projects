import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainContent } from '../src/templates/MainContent/';
import { Login } from './templates/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainContent />} />
      </Routes>
    </Router>
  );
};

export default App;
import { useState } from 'react'
import './App.css'
import { Modal } from './components/Modal'

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div>
      <h2>Clique no Botão para abrir o modal</h2>
      <button onClick={() => setOpen(!open)}>Abrir modal</button> 

      <Modal isOpen={open} setOpen={setOpen}/> 
    </div>
  )
}

export default App

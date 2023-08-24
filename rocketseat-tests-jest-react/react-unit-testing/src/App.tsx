import { useState } from "react"

function App() {

  const [list, setList] = useState([ 'Caio', 'Diego', 'Rodolfo' ])
  const [newItem, setNewItem] = useState('')

  function addToList() {
    setList(state => [
      ...state,
      newItem
    ])
  }

  function removeFromList(item: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== item))
    }, 500);
  } 

  return (
    <>
      <input type="text" value={newItem} placeholder="Novo item" onChange={e => setNewItem(e.target.value)} />
      <button onClick={addToList}>Adicionar</button>
      <ul>
        {list.map(item => 
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>)}
      </ul>
    </>
  )
}

export default App

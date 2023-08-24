/* eslint-disable react/prop-types */
import ChildrenOne from './components/ChildrenOne'
import './App.css'
import AppProvider from './context/AppProvider'
import ChildrenTwo from './components/ChildrenTwo'



function App() {  

  return (
    <AppProvider >
      <ChildrenOne className="App" />
      <ChildrenTwo />      
    </AppProvider>
  )
}

export default App

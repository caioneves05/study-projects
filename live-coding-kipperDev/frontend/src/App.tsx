import { useState } from 'react'
import PrimaryInput from './components/PrimaryInput'
import './App.css'
import { Button, Spacer } from '@chakra-ui/react'

const App = () => {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <div className='container'>
      <form action="">
      <div className='name-form-container'>
        <PrimaryInput 
          value={firstName} 
          onChange={handleChange} 
          name={firstName}
          label='First Name'
          placeholder='Enter your first name'
        />
        <PrimaryInput 
          value={secondName} 
          onChange={handleChange} 
          name={secondName}
          label='Second Name'
          placeholder='Enter your second name'
        />
      </div>
      <PrimaryInput 
        value={email} 
        onChange={handleChange} 
        name={email}
        label='Email'
        placeholder='Enter your e-mail'
      />
      <Button colorScheme='blue' width="100%" marginTop="5">Send</Button>
      </form>
      <Spacer maxWidth="6"/>
      <div className="product-details">
        <p>You will pay</p>
        <span>R$ 250,00</span>
      </div>
    </div>
  )
}

export default App

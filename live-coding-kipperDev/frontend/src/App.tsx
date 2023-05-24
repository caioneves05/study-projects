import { useState } from 'react'
import PrimaryInput from './components/PrimaryInput'
import './App.css'
import { Button, Spacer } from '@chakra-ui/react'
import useIndentityMutation from './hooks/useIdentityMutation'

const App = () => {
  const { mutate } = useIndentityMutation()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const submit = () => {
    mutate({
      firstName,
      lastName: secondName,
      email
    })
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
      <Button colorScheme='blue' width="100%" marginTop="5" onClick={submit}>Send</Button>
      </form>
      <Spacer maxWidth="6"/>
      <div className="product-details">
        <h3>Monthly signature</h3>
        <Spacer maxWidth="4"/>
        <p>You will pay</p>
        <span>R$ 250,00</span>
        <Spacer maxWidth="4"/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit autem saepe eos cupiditate perspiciatis quia magni eaque voluptatem, minima sed, assumenda accusamus illum delectus nostrum ducimus quisquam. Facere, magni harum?</p>
      </div>
    </div>
  )
}

export default App

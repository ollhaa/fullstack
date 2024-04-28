import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'



const App = () => {
  //const persons = []
  const [persons, setPersons] = useState([
    //{ name: 'Arto Hellas' },
    //{ name: 'Ari Helle' }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  
  //const setNewName
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      id: persons.length +1,
      name: newName,
      number: newNumber
    }
    if(persons.find(props => props.name == nameObject.name)){
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
  
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
    }
  }
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
      <input 
        value={newName}
        onChange={handleNameChange}
      />
      <br></br>
      <input 
        value={newNumber}
        onChange={handleNumberChange}
      />

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {persons.map(name => 
      <li
        key = {name.id}> {name.name} {name.number}
      </li>)}

    </div>
  )

}


export default App
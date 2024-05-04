import { useState, useEffect } from 'react'
import axios from 'axios'
import personServise from './services/persons'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'



const Persons = ({ persons }) => {
  return(
  persons.map(name => 
    <li
      key = {name.id}> {name.name} {name.number}
    </li>)

)}

const PersonForm = ({newName, newNumber, addName, handleNameChange, handleNumberChange}) => {
  return(
  <form onSubmit={addName}>
      name: <input 
        value={newName}
        onChange={handleNameChange}
      />
      <br></br>
      number: <input 
        value={newNumber}
        onChange={handleNumberChange}
      />

        <div>
          <button type="submit">add</button>
        </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personServise
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      })
  }, [])

  
  //const setNewName
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    let id = persons.length +1
    const nameObject = {
      name: newName,
      number: newNumber,
      id: id.toString()
    }

    personServise
    .create(nameObject)
    .then(returnedPerson => {
    setPersons(persons.concat(returnedPerson))
    setNewName('')
    setNewNumber('')
  })
  

    
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
  
  
        <h3>Add a new</h3>
  
        <PersonForm addName={addName}
                    newName={newName}
                    newNumber={newNumber}
                    handleNameChange={handleNameChange}
                    handleNumberChange={handleNumberChange}
                    setNewName
        
        />
  
        <h3>Numbers</h3>
  
        <Persons persons={persons}  />
      </div>
    )
  }


export default App
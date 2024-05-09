import { useState, useEffect } from 'react'
import axios from 'axios'
import personServise from './services/persons'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

const Person = ({name, id, number, deletePerson}) => {
  return(
  <li>
    {name} {number} <Button type="submit" handleAction= {deletePerson(id)}  text="DELETE"/>
  </li>
  )
}

const Persons = (props) => {
  return(
  props.persons.map(person => 
    <Person key={person.id} name={person.name} number={person.number} deletePerson = {props.handleDeletePerson} />
  )
)}

const Notification = ({ message }) => {
  if (message === null) {
    return(
    <div className="succeed">
    {"OK"}
  </div>
    )
  }
  else {
  return (
    <div className="error">
      {message}
    </div>
  )
}
}


const Button = ({type, text, handleAction}) => {
  return (
  <button type ={type} onClick={handleAction} > {text} </button>
)
}

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
          <Button type="submit" text ="add"></Button>
        </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  const [newMessage, setnewMessage] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personServise
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      })
  }, [])

  
  const handleDeletePerson = (id) => {
    //console.log(id)
    return() => {
    const person = persons.find(n => n.id === id)
    if (window.confirm("Do you really want to delete this?")) {
      personServise
      .erasePerson(id)
      .catch(error => {
        setErrorMessage(
          `Note '${person}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 2000)
      })
      .then(() => {
        setPersons(persons)
        handleMessage("Done")
        setTimeout(() => {
          handleMessage(null), 3000
        })
    })

  }
  
  }
}
  

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
   
    setTimeout(() => {
      setErrorMessage(null)
    }, 2000)
  })
  
  }

  const handleMessage = (message) => {
    setnewMessage(message)
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
  
        <Notification message={errorMessage} />
        <h3>Add a new</h3>
  
        <PersonForm addName={addName}
                    newName={newName}
                    newNumber={newNumber}
                    handleNameChange={handleNameChange}
                    handleNumberChange={handleNumberChange}
                    setNewName
        
        />
  
        <h3>Numbers</h3>
  
        <Persons persons={persons}
          handleDeletePerson ={handleDeletePerson}
          />
      </div>
    )
  }


export default App
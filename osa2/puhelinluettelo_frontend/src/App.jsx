import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'


const Persons = ({filteredPersons}) => {
  return(
    <div >
      {filteredPersons}
    </div>
  )
}

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

const Button = ({type, text, handleNewChange}) => {
  return(
    <button type={type} onClick={handleNewChange} >{text}</button>
  )
}

const Filter = ({text, value, handleNewChange}) => {
  return(
  <div>
    {text} <input value={value} onChange={handleNewChange}/>
  </div>
  )
}

const Part = ({text, value, handleNewChange}) => {
  return(
    <div>
        {text} <input value={value} onChange={handleNewChange}/>
    </div>
  )
}

const PersonForm = ({ onSubmit, newName, newNumber, handleNewName, handleNewNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <Part text='name:' value={newName} handleNewChange={handleNewName}/>
      <Part text='number:' value={newNumber} handleNewChange={handleNewNumber}/>
      <Button text='add' type="submit" />
    </form>
  )
}


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName,setFilterName] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialResult => {
        setPersons(initialResult)
      })
  }, [])
     
  const addName = (event) => {
      event.preventDefault()
      const newObject = {
        name: newName,
        number: newNumber
      }

      const addedName = persons.find(props => props.name.toLowerCase() === newObject.name.toLowerCase())

      if(addedName && checkName.number === newObject.number){
        window.alert(`${newName} is already added!`)
      }
      
      else{
        personService
        .create(newObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setChangeMessage(`Added ${newName}`)
          setTimeout(() => {
          setErrorMessage(null)
        }, 3000)
        }) 
        .catch(error => {
          setErrorMessage(`[error] ${error.response.data.error}`)
        })
      }         
  }
  const Person = ({name, number, id}) => {
    return(
      <li>
        {name} {number} <Button text='delete' type="submit" handleNewChange={() =>  handleDeletePerson(id)} />
      </li>
    )
  }

  const handleDeletePerson = id => {
    const person = persons.find(n => n.id === id)
    if(window.confirm(`Delete ${person.name} ?`))
    {
      personService
      .erasePerson(id)
      setPersons(persons.filter(persons => persons.id !== id))
      setTimeout(() => {
        setErrorMessage("Done!")
      }, 3000)
    }
    
  }

  const handleNewName = (event) => {
    setNewName(event.target.value) 
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value) 
  } 

  const handleNewFilter = (event) => {
    setFilterName(event.target.value) 
  } 

  const filter = persons.map(props => props.name.toLowerCase().includes(filterName.toLowerCase()))?
  persons.filter(props => props.name.toLowerCase().includes(filterName.toLowerCase()))
  : persons

  

  const filteredPersons = filter.map( props =>
    <Person key={props.id} name={props.name} number={props.number} id={props.id} />
  ) 

  
  return (
    <div>
      <h2>Phonebook </h2>
      <Notification message={errorMessage} />
      <Filter text="Filter" value={filterName} handleNewChange={handleNewFilter} />
      <h2>Add a new</h2>

      <PersonForm onSubmit={addName}
                  newName={newName} 
                  newNumber={newNumber} 
                  handleNewName={handleNewName} 
                  handleNewNumber={handleNewNumber}
                  />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App
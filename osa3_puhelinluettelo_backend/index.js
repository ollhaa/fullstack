require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
//const person = require('./models/person')


const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use(cors())
app.use(express.static('dist'))

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}


app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

//app.get('/api/persons/:id', (request, response) => {
//  Person.findById(request.params.id).then(person => {
//    response.json(person)
//  })
//})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const generateId = () => {
  const newId = Math.floor(Math.random() * 10000 +1)
  return newId
}

const nameChecker = (name) => {
  if (persons.find(object => object.name === name)) {
    return true
  }

  return false

}

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
    id: generateId(),
  })

  person.save()
  .then(savedPerson => {
    response.json(savedPerson)
  })
    .catch(error => next(error))
})


  


app.get('/api/info', (request, response) => {
    let people =  persons.length
    time = new Date()
    //console.log("time")

    let rawtext = `Phonebook has info for ${people} people. ${time}`
    response.json(rawtext)
  })

  app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
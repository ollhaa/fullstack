const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  //`mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`
  `mongodb+srv://haapasalko_to:${password}@cluster0.64wf1cv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  //id: Integer,
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length ===3) {
    Person
    .find({})
    .then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })

} else {

const person = new Person({
    //id: Integer,
    name: process.argv[3],
    number: process.argv[4],
})


person.save().then(result => {
  console.log(`added ${person.name} number ${person.number} to phonebook`)
  mongoose.connection.close()
})



}
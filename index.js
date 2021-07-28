require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/person')
const morgan = require('morgan')
// const requestLogger = require('./loggerMiddleware')
const errorHandler = require('./errorMiddleware')


app.use(express.static('build'))
app.use(express.json())
// app.use(requestLogger)

morgan.token('body', req => JSON.stringify(req.body))
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body'))


app.get('/info', (request, response) => {
  const date = new Date().toString()

  Person.find({}).then( result => {
    response.send(
      `<p>Phonebook has info for ${result.length} people</p>
       <p>${ date }</p>`
    )
  })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/persons/:id', (request, response, next) => {

  Person.findById(request.params.id)
    .then( person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  
  Person.findByIdAndRemove(request.params.id) 
  .then( () => response.status(204).end() )
  .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number
  })

console.log('person', person);
  person.save()
    .then( savedPerson => {
      response.json( savedPerson )
    })
    .catch(error => next(error))
})


app.put('/api/persons/:id',(request, response) => {
  const body = request.body

  const person = {
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

//https://glacial-tundra-52621.herokuapp.com/info
//git add . or anythings ==> git commit am- "description" ==> npm run deploy  
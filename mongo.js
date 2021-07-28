  const mongoose = require('mongoose')

// process.argv = [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\Usser\\Desktop\\backend\\mongo.js',
//   'password'
// ]

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

  const password = process.argv[2]

  const url =
  `mongodb+srv://fullstack:${password}@cluster0.su2t3.mongodb.net/phonebook?retryWrites=true&w=majority`

  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


  const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
  })

  const Person = mongoose.model('Person', personSchema)


  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })


if ( process.argv.length === 5 ) {
  person.save().then( result => {
    console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook` );
    mongoose.connection.close()
  })
}


if( process.argv.length === 3 ) {
  Person.find({}).then( result => {
    console.log('phonebook:');
    result.forEach( person => {
      console.log(`${ person.name } ${ person.number }`)
    })
    mongoose.connection.close()
  })
}



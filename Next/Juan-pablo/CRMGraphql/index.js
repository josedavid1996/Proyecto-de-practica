const { ApolloServer } = require('apollo-server')
const typeDefs = require('./db/schema')
const resolvers = require('./db/resolver')
const conectarDB = require('./config/db')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'variables.env' })

// Conectar a la base de datos
conectarDB()

//servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // console.log(req.headers['authorization'])

    // console.log(req.headers);

    const token = req.headers['authorization'] || ''

    if (token) {
      try {
        const usuario = jwt.verify(token, process.env.SECRETA)
        return {
          usuario
        }
      } catch (error) {
        console.log('Hubo un error')
        console.log(error)
      }
    }
  }
})
//Arrancar el servidor
server.listen().then(({ url }) => {
  console.log(`Servidor listo en la URL ${url}`)
})

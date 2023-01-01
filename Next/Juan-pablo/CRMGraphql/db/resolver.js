const Usuario = require('../model/Usuario')
const Producto = require('../model/Producto')
const Cliente = require('../model/Cliente')
const bcryptjs = require('bcryptjs')
require('dotenv').config({ path: 'variables.env' })
const jwt = require('jsonwebtoken')

const CrearToken = (usuario, secreta, expiresIn) => {
  const { id, email, nombre, apellido } = usuario
  return jwt.sign({ id, email, nombre, apellido }, secreta, { expiresIn })
}

// Resolver

const resolvers = {
  Query: {
    obtenerUsuario: async (_, { token }) => {
      const usuarioId = await jwt.verify(token, process.env.SECRETA)
      return usuarioId
    },
    obtenerProductos: async () => {
      try {
        const productos = await Producto.find({})
        return productos
      } catch (error) {
        console.log(error)
      }
    },
    obtenerProducto: async (_, { id }) => {
      //  Revisar si el producto existe

      const producto = await Producto.findById(id)
      if (!producto) {
        throw new Error('Producto no encontrado')
      }

      return producto
    },
    obtenerClientes: async () => {
      try {
        const clientes = await Cliente.find({})
        return clientes
      } catch (error) {
        console.log(error)
      }
    },
    obtenerClienteVendedor: async (_, {}, ctx) => {
      try {
        const clientes = await Cliente.find({
          vendedor: ctx.usuario.id.toString()
        })
        return clientes
      } catch (error) {
        console.log(error)
      }
    }
  },
  Mutation: {
    nuevoUsuario: async (_, { input }) => {
      //  Revisar que el usuario ya este registrado
      const { email, password } = input

      const existeUsuario = await Usuario.findOne({ email })

      if (existeUsuario) {
        throw new Error('Usuario ya esta registrado')
      }

      // Hashear el passaword
      const salt = await bcryptjs.genSalt(10)
      input.password = await bcryptjs.hash(password, salt)

      try {
        // Guardarlo en la base de datos
        const usuario = new Usuario(input)
        usuario.save() // guardarlo en la base de datos
        return usuario
      } catch (error) {
        console.log(error)
      }
    },
    autenticarUsuario: async (_, { input }) => {
      const { email, password } = input
      // Si el usuario existe

      const existeUsuario = await Usuario.findOne({ email })
      if (!existeUsuario) {
        throw new Error('El usuario no existe')
      }

      //Revisar si el password es correcto

      const passwordCorrecto = await bcryptjs.compare(
        password,
        existeUsuario.password
      )
      if (!passwordCorrecto) {
        throw new Error('El password es Incorrecto')
      }

      //Crear el token

      return {
        token: CrearToken(existeUsuario, process.env.SECRETA, '24h')
      }
    },

    nuevoProducto: async (_, { input }) => {
      try {
        const nuevoProducto = new Producto(input)
        // Almacenar en la base de datos
        const resultado = await nuevoProducto.save()
        return resultado
      } catch (error) {
        console.log(error)
      }
    },
    actualizarProducto: async (_, { id, input }) => {
      let producto = await Producto.findById(id)
      if (!producto) {
        throw new Error('Producto no encontrado')
      }

      // Guardar en la base de datos

      producto = await Producto.findOneAndUpdate({ _id: id }, input, {
        new: true
      })
      return producto
    },
    eliminarProducto: async (_, { id }) => {
      let producto = await Producto.findById(id)
      if (!producto) {
        throw new Error('Producto no encontrado')
      }

      // Eliminar producto
      producto = await Producto.findOneAndDelete({ _id: id })
      return 'Producto eliminado'
    },
    nuevoCliente: async (_, { input }, ctx) => {
      console.log('ctx', ctx)
      //Si el cliente ya esta resgistrado
      const { email } = input

      const cliente = await Cliente.findOne({ email })
      if (cliente) {
        throw new Error('Cliente ya esta registrado')
      }
      const nuevoCliente = await new Cliente(input)
      //asignar cliente
      nuevoCliente.vendedor = ctx.usuario.id

      //guardar en la base de datos
      try {
        const resultado = await nuevoCliente.save()
        return resultado
      } catch (error) {
        console.log(error)
      }
    }
  }
}
module.exports = resolvers

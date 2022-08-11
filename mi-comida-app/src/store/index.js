import Vuex from 'vuex'
import Vue from 'vue'
import axios from'axios'

import products from './modules/products'
import users from './modules/users'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: [],
        products: [],
        usuarios: [],
        name: '',
        email: '',
        password: '',
        isAdmin: false,
        currentUsers: null
    },
    modules: {
      products, users
    },
    getters: {
      
      cart (state) {
        
          let products = state.products
          
          let carritos = state.carritos.filter (o => o.usersId === state.currentUsers.id )
          let localCarrito = []
          carritos.map(item => {
            let currentProduct = products.filter(o => o.id == item.productId)
            localCarrito.push ({
              amount: item.amount,
              productTitle: currentProduct.title,
              price: currentProduct.price,
            })
          })
          return localCarrito
       
      },
      auth (state){
        return state.currentUsers
      },
    },
    mutations: 
      { 
        // SET_CURRENT_USERS (state, payload){
        //   state.currentUsers = payload
        // },
        // SET_USERS (state, payload){
        //   state.usuarios = payload
        // },
        // SET_PORUDCTS (state, payload){
        //   state.products = payload
        // },
        SET_CARRITO (state, payload){
          state.carrito = payload
        },
        ADD_CARRITO (state, payload){
          state.carrito.unshift(payload)
        },
        DELETE_CARRITO (state, payload){
          state.carrito = payload
        },
        SET_ADMIN (state, payload){
          state.isAdmin = payload
        },

        // agregarAlCarrito: (state, payload) => {
        //   let o = state.carrito.find(x => x.id === payload.id)
        //   if(o){
            
        //     payload = {...payload,cantidadCarrito: o.id + 1 };
        //   }
        //   state.carrito.unshift(payload); //push
        // },
        
      },
    actions: {
     /*eslint-disable */
      async getCarrito (context){
        let resp = await axios.get (`https://62efbfad57311485d1278ded.mockapi.io/api/products/carrito`)
        let data = resp.data
        context.commit('SET_CARRITO', data)
      },
      async addCarrito (context, carrito){
        debugger
        let resp = await axios.post (`https://62efbfad57311485d1278ded.mockapi.io/api/products/carrito`, carrito)
        context.commit ('ADD_CARRITO', resp.data)
      },
      // async deleteCarrito (contex, payload) {

      // },

    },
});
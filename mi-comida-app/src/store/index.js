import Vuex from 'vuex'
import Vue from 'vue'
import axios from'axios'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        carrito: [],
        products: [],
        usuarios: [],
        name: '',
        email: '',
        password: '',
        isAdmin: false
    },
    mutations: 
      {
        SET_USERS (state, payload){
          state.usuarios = payload
        },
        SET_PORUDCTS (state, payload){
          state.products = payload
        },
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
      async getCarrito (context){
        let resp = await axios.get (`https://62efbfad57311485d1278ded.mockapi.io/api/products/carrito`)
        let data = resp.data

        context.commit('SET_CARRITO', data)
      },
      async addCarrito (context, carrito){
        let resp = await axios.post (`https://62efbfad57311485d1278ded.mockapi.io/api/products/carrito`, carrito)
        let data = resp.data

        context.commit ('ADD_CARRITO', data)
      },
      // async deleteCarrito (contex, payload) {

      // },

    },
});
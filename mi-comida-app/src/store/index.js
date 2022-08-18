import Vuex from 'vuex'
import Vue from 'vue'
import axios from'axios'





Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cart: [],
        products: [],
        usuarios: [],
        products_edit: [],
        name: '',
        email: '',
        password: '',
        isAdmin: false,
        currentproductos: null
    },
   
    getters: {
      
      getUsuarios: (state) => {
        return state.usuarios
      },
      getProducts: (state) => {
        return state.products
      },
      getEditProduct: (state) => {
        return state.products_edit
      }
    },
    mutations: 
      { 
       ADD_USUARIOS: (state, usuarios) =>{
        state.usuarios = usuarios;
       },

       USER_LOGGED : (state, usuarios  ) => {
        state.usuarios_logged = usuarios;
       },

       ADD_PRODUCTS: (state, products) => {
        state.products = products;
       },

       ADD_EDIT_PRODUCT: (state, products) => {
        state.products_edit = products
       },

       SET_CARRITO: (state, carrito) => {
        state.carrito = carrito;
       },

       ADD_CARRITO: (state, products) => {
        state.carrito.unshift (products);
       },

       REMOVE_CARRITO : (state, products) => {
        state.carrito.splice (products, 1)
       },



       
        
      },
    actions: {
      async postRegistro (payload) {
        try {
          await axios.post ('https://62efbfad57311485d1278ded.mockapi.io/api/products/user',payload)
        } catch (e) {
          console.log(e)
        }
      },
      async getLogin (contex) {
        try {
          let response = await axios.get('https://62efbfad57311485d1278ded.mockapi.io/api/products/user')
          contex.commit ('ADD_USUARIO', response.data)
        } catch (e) {
          console.log(e)
        }
      },
     
      async getCarrito (context){
        let resp = await axios.get ('https://62efbfad57311485d1278ded.mockapi.io/api/products/carrito')
        let data = resp.data
        context.commit('SET_CARRITO', data)
      },
      async addCarrito (context, carrito){
        
        let resp = await axios.post ('https://62efbfad57311485d1278ded.mockapi.io/api/products/carrito', carrito)
        context.commit ('ADD_CARRITO', resp.data)
      },
      async deleteProduct ( payload) {
        await axios.delete ('https://62efbfad57311485d1278ded.mockapi.io/api/products/products/' + payload)
        .then (response => {
          console.log(response);
          location.reload ()
        })
      },
      async getProduct (context, payload) {
        try {
          let response = await axios.get ('https://62efbfad57311485d1278ded.mockapi.io/api/products/products' + payload)
          context.commit('SAVE_PRODUCT', response.data)
        } catch(e) {
          console.log(e)
        }
      },
      async editProduct ( payload) {
        try {
          await axios.put('https://62efbfad57311485d1278ded.mockapi.io/api/products/products' + payload.id, {
            title: payload.data.name,
            description: payload.data.description,
            price: payload.data.price,
            amoutn: payload.data.amount
          })
        }catch (e) {
          console.log(e)
        }
      },
      async settingProduct ( payload) {
        try {
          await axios.post ("https://62efbfad57311485d1278ded.mockapi.io/api/products/products", {
            title: payload.title,
            description: payload.description,
            price: payload.price,
            amount: payload.amount
          })
        } catch (e) {console.log(e)}
      },

      async getAllCarrito (context) {
        try {
          let response = await axios.get (`https://62efbfad57311485d1278ded.mockapi.io/api/products/carrito`)
          let data = response.data
          context.commit ('SET_CARRITO', data)
        } catch (e) {
          console.log (e)
        }
      },


      


    },
});
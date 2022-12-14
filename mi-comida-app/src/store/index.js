import Vuex from 'vuex'
import Vue from 'vue'
import axios from'axios'


Vue.use(Vuex)

export default new Vuex.Store ({

    state: {
        carrito: [],
        products: [],
        usuarios: [],
        usuario: '',
        products_edit: [],
        name: '',
        email: '',
        password: '',
        isAdmin: false,
        currentUsuarios: null
    },
   
    getters: {
      // getters usuarios
      getUsuarios: (state) => {
        return state.usuarios;
      },
      // getters products
      getProducts: (state) => {
        return state.products;
      },
      // getters edit prodcuts
      getEditarProduct: (state) => {
        return state.products_edit;
      },
      // getters Usuario logeado
      getUserLogged : (state) => {
        return state.user_loged;
      },
      // getters carrito
      carrito (state) {
        return state.carrito.filter (o => o.usuarioId === state.currentUsuarios.getEditProduct);
      },
      auth (state) {
        return state.currentUsuarios;
      }
    },

    mutations: 
      { 
        // save usuario
       ADD_USUARIOS: (state, usuarios) => {
        state.usuarios = usuarios;
       },
       //  save products
        ADD_PRODUCTS: (state, products) => {
         state.products = products;
        },
        //  save product
         SAVE_ONE_PRODUCT: (state, products) => {
          state.products_edit = products;
         },
      //  save loged
       USER_LOGGED : (state, usuarios  ) => {
         state.usuarios_logged = usuarios;
       },
      //  set carrito
       SET_CARRITO: (state, carrito) => {
        state.carrito = carrito;
       },
      //  add carrito
       ADD_TO_CARRITO: (state, carrito) => {
        state.carrito.unshift (carrito);
       },
      //  remove carrito
       REMOVE_CARRITO : (state, products) => {
        state.carrito.splice (products, 1)
       },
      //  set usuarios
       SET_CURRENT_USUARIO : (state, payload) => {
        state.currentUsuarios = payload;
       }
 },

    actions: {
      // register --usuario
      async postRegistro (payload) {
        try {
          await axios.post ('https://62efbfad57311485d1278ded.mockapi.io/api/products/user', payload)
        } catch (error) {
          console.log(error)
        }
      },
      // login --usuario
      async getLogin (context) {
        try {
          let response = await axios.get ('https://62efbfad57311485d1278ded.mockapi.io/api/products/user')
          context.commit ('ADD_USUARIOS', response.data)
        } catch (error) {
          console.log(error)
        }
      },

      // add carrito --carrito
      async addToCarrito (context, carrito){
        try {
        let response = await axios.post ("https://62efbfad57311485d1278ded.mockapi.io/api/products/carrito", carrito)
        context.commit ('ADD_TO_CARRITO', response.data)
        } catch (error) {
          console.log(error)
        }
      },
       // get all carrito --carrito
       async getAllCarrito (context) {
        try {
          let response = await axios.get ("https://62efbfad57311485d1278ded.mockapi.io/api/products/carrito")
          let data = response.data
          context.commit ('SET_CARRITO', data)
        } catch (error) {
          console.log (error)
        }
      },
      // delete product carrito --usuario
      async deleteProducts ( context,payload) {
        await axios.delete ('https://62efbfad57311485d1278ded.mockapi.io/api/products/products/' + payload)
        .then (response => {
          console.log(response);
          location.reload ()
        })
        .catch (error => {
          console.log (error);
        })
      },
      

      // get/show product --admin
      async showProducts (context) {
        try {
          let response = await axios.get ("https://62efbfad57311485d1278ded.mockapi.io/api/products/products")
          context.commit('ADD_PRODUCTS', response.data)
        } catch(error) {
          console.log(error)
        }
      },
      // edit product --admin
      async editarProduct ( payload) {
        console.log(payload)
        try {
          
          await axios.put("https://62efbfad57311485d1278ded.mockapi.io/api/products/products" + payload.id, {
            title: payload.data.title,
            description: payload.data.description,
            price: payload.data.price,
            amoutn: payload.data.amount
          })
        } catch (error) {
          console.log(error)
        }
      },

      // create product --admin
      async settingProducts (context, payload) {
        console.log(payload)
        try {
          await axios.post ("https://62efbfad57311485d1278ded.mockapi.io/api/products/products", {
            title: payload.title,
            description: payload.description,
            price: payload.price,
            amount: payload.amount
          })
        } catch (error) {
          console.log(error)
        }
      },

      async getOneProducts (context, payload) {
        try {
          let response = axios.get ("https://62efbfad57311485d1278ded.mockapi.io/api/products/products" + payload)
          context.commit ('SAVE_ONE_PRODUCTS', response.data)
        } catch (error) {
          console.log (error)
        }
      }

     

    },
});
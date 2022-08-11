import axios from 'axios'


export default {
    namespaced:true,
    state:{
        productos:[],
    },
    getters: {
        getProductos(state) {
          return state.productos;
        }
      },
    mutations: {
        setProductos(state, data){
            state.productos = data;
        },
        // actualizarProducto(state,data){
        
        // },
        // borrarProducto(state,data){

        // },
        agregarProducto(state,data){
            state.products.push(data);
        }

      },
      actions: {
        async getProductosAPI() {
            await axios.get('https://62efbfad57311485d1278ded.mockapi.io/api/products/products')
            .then(response => {
              let resp = response.data;
              return resp;
            })
          },
        async agregarProductoAPI( data) {
          await axios.post('https://62efbfad57311485d1278ded.mockapi.io/api/products/products', data)
          .then(response => {
            let resp = response.data;
            return resp;
          })
        },
        async editarProductoAPI( data) {
            await axios.post('https://62efbfad57311485d1278ded.mockapi.io/api/products/products/${data.id}', data)
            .then(response => {
              let resp = response.data;
              return resp;
            })
          }
      },
}
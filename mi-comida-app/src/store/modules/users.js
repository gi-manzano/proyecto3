import axios from 'axios'

export default {
    namespaced:true,
    state:{
        usuarios:[],
        usuarioLoguin:{}
    },
    getters: {
        getUsuarios(state) {
          return state.usuarios;
        },
        getUsuarioLoguin(state){
            return state.usuarioLoguin;
        }
      },
    mutations: {
        setUsuarios(state, data){
            state.usuarios = data;
          },
        addUsuario(state, data) {
          state.usuarios.push(data);
        },
        setUsuarioLoguin(state,data){
            state.usuarioLoguin = data;
        }    
      },
      actions: {
        async getUsuariosAPI({ commit }) {
            await axios.get('https://62efbfad57311485d1278ded.mockapi.io/api/products/user')
            .then(response => {
              let resp = response.data;
              commit('setUsuarios', resp);
              return resp;
            })
          },
        async addUsuario({ commit }, data) {
          await axios.post('https://62efbfad57311485d1278ded.mockapi.io/api/products/user', data)
          .then(response => {
            let resp = response.data;
            commit('addUsuario', data);
            return resp;
          })
        },
        setUsuarioLoguin({commit},usuario){
            commit('setUsuarioLoguin',usuario)
        }
      },
}
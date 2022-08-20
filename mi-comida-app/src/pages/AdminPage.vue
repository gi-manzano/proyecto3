<template lang="html">
  <section class="admin-component container">
    <h1>Editar listado: Eres Admin</h1>
      <a href="/admin/create" class="btn btn-primary ">Add product</a>
        <table class="table table-striped">
          <thead class="thead-light">
                 <tr>
                    <th>Title</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Editar</th>
                 </tr>
            </thead>
          <tbody>
      <tr v-for="(item, index) in products" :key="index">
        <td><b>{{ item.title }}</b></td>
        <td><b>{{item.descripcion }}</b></td>
        <td>${{ item.price }}</td>
        <td v-if="item.amount < 20" class="text-danger">{{ item.amount }}</td>
        <td v-else-if="item.amount >= 20" class="text-strong">{{ item.amount }}</td>
        <td v-else>{{ item.amount }}</td>
        <td>
        <div class="row">
          <button @click="editarProducto(item.id)" class="btn btn-warning bm-1" >Editar</button>
          <button @click="deleteProducts(item.id)" class="btn btn-danger bm-1" id="delete">Eliminar </button>
        </div>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
// import axios from "axios";
export default {
  name: "AdminPage",
  props: [],

  data() {
    return {
      
    };
  },
  
  async mounted() {
    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");

    if (isLogged != "true") {
      this.$router.push("/login");
    }
    if (isAdmin != "true") {
      this.$router.push("/home");
    }
    this.$store.dispatch ('showProducts');
    // let response = await axios.get(
    //   "https://62efbfad57311485d1278ded.mockapi.io/api/products/products"
    // );
    // this.products = response.data;
  },
  methods: {
    editarProducto(id) {
       
      this.$router.push( {path: "/admin/edit/" + id} );
    },

    deleteProducts (id) {
      this.$store.dispatch ('deleteProducts', id);
    },
     
    //  async borrarProducto(id) {
    //         await axios.delete("https://62efbfad57311485d1278ded.mockapi.io/api/products/products/" + id)
    //         .then (response => {
    //           console.log (response);
    //           location.reload ()
    //         })
           
    //     }
  },
    computed : {
      ... mapGetters ({
        products: 'getProducts'
      })
    }
};
</script>
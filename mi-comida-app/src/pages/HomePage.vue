<template lang="html">
<div class="containter">
  <h1 class="display-2 text-center "> </h1>
    <div class="row">
      <div v-for="(item, index) in products" :key="index" class = "col-md-4">
          <div class="card" style="width: 35rem padding: 10px;">
            <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            
            <h6 class="card-subtitle mb-2 text-muted">{{item.descripcion}}</h6>
            <p class="card-subtitle mb-2 text-muted">${{item.price}}</p>
            <p class="card-subtitle mb-2 text-muted">Stock: {{item.amount}}</p>
            <label/>Cantidad en carrito:
            <input type="text" placeholder="cantidad" v-model="item.cantidad"/>
            <button @click="agregarProductoAlCarrito(item.id)" class="btn btn-primary mb-2" type="button">Add carrito</button> 
          </div>
        </div>
      </div>
    </div>
  <div class="card-salir">
  <!-- <button type="button" class="btn btn-secundary">Salir</button> -->
  </div>
</div>
</template>

<script>

import axios from "axios"
export default {
  name: "HomePage",
  props: [],

    data () {
      return {
        products: [],
        cart: []
      }
    },
  
  async mounted() {
    let isLogged = localStorage.getItem("isLogged");
    if (isLogged != "true") {
      this.$router.push("/login");
    }
    let response = await axios.get(
      "https://62efbfad57311485d1278ded.mockapi.io/api/products/products"
    );
    this.products = response.data;
  },

  methods: {
    /*eslint-disable */
    agregarProductoAlCarrito (products) {
   
      let payload = {
        productId: products.id,
        userId: this.$store.getter.auth.id,
        amount: products.cantidad,
      }
      this.$store.dispatch(' addCarrito', carrito)
    }
  },
  computed: {
    // carrito () {
    //  return  this.$store.getters.carrito
    // }
  }
};


</script>

<style scope>
.card-body {
    background: #c7cfb2;
    
    
}
.card-volver {
    background-color: #eb4b96;
    
}


</style>
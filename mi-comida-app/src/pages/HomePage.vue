<template lang="html">
<div class="containter">
  <h1 class="display-2 text-center "> Listado de Menú </h1>
    <div class="row">
      <div v-for="(item, index) in this.products" :key="index" class = "col-md-4">
          <div class="card" style="width: 35rem padding: 10px;">
            <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{item.descripcion}}</h6>
            <p class="card-subtitle mb-2 text-muted">${{item.price}}</p>
            <p class="card-subtitle mb-2 text-muted">Stock: {{item.amount}}</p>
            <label/>Cantidad en carrito:
            <input type="text" placeholder="cantidad" v-model="item.cantidad"/>
    
            <button @click="addToCarrito (item)" class="btn btn-primary mb-2" type="button">Add carrito</button> 
          </div>
        </div>
      </div>
    </div>
   
</div>
</template>

<script>

// import axios from "axios"
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: "HomePage",
  props: [],

    data () {
      return {
       
      //  text: 'products',
      }
    },
  
  async mounted() {
    let isLogged = localStorage.getItem("isLogged");

    if (Boolean(isLogged) != "true") {
      this.$router.push("/home");
    }
    this.$store.dispatch('showProducts')
   

  
  },

  methods: {

    addToCarrito (item) {
   
      let payload = {
        productId: item.id,
        amount: item.cantidad,
        usuarioId: this.auth.id
      
      }
      this.$store.dispatch(' addToCarrito', payload);
    },
    ...mapActions (['showProducts'])
  },
  computed: {
    ...mapState (['products']),
    ...mapGetters ({
      products : 'getProducts',
      auth: 'auth'
     
    })
  }
 
};
 

</script>

<style scope>
.card-body {
    background: #abdd9d;
    
    
}
.card-volver {
    background-color: #eb4b96;
    
}


</style>
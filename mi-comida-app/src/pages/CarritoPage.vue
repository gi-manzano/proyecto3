<template lang="html">
  <section class="carrito-component">
    <div class="carrito-card card">
      <h1>{{ $store.state.msg }}</h1>   
        <h2>Carrito 🛍</h2>
      <ul>
        <li v-for="(item, index) in this.carrito" :key="index" class="card mb-3">
          {{item.titulo}} - {{item.cantidadCarrito}}
          <p>${{item.precio}}</p>
          <button class="btn btn-success mx-2" 
          @click="sumarUno(item)">+</button>
          <button class="btn btn-success mx-2" 
          @click="restarUno(item)">-</button>
         
            <hr>
        </li>
      </ul>
        <h1>Productos</h1>
      <ul>
        <li v-for="(item, index) in this.products" :key="index" @click="agregarProductoAlCarrito(item.id)">{{ item.name }}>
        </li>
      </ul>
         <button class="btn"><p class="text-center">Precio Total: $ {{precioTotal}}</p></button>
          <input class="btn btn-success mx-2"
          @click="comprar ()" value="Comprar"/>
          <router-link to="/home" class='btn btn-warning mt-2'>Atras</router-link>
          <hr>
      </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
import axios from "axios";
export default {
name:'CarritoPage',
data(){
 return {
  cantidadCarrito: 0,
  product: {
    title: '',
    description: '',
    amount: '',
    price: 0
  }
 };
},
async mounted() {
 
    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");

    if (isLogged != "true") {
      this.$router.push("/login");
    }

    if (isAdmin != "true") {
      this.$router.push("/carrito");
    }
    let paramId = this.$route.params.id
    let response = await axios.get(
      "https://62efbfad57311485d1278ded.mockapi.io/api/products/products" + paramId
    );
    this.product = response.data;
  },
methods:{
    sumarUno(){
        this.cantidadCarrito +=1;
        },
    restarUno(){
        this.cantidadCarrito >= 1 ? this.cantidadCarrito -= 1 : null;
        }, 
    carroLocalMethod (newObject,)  {
        this.$emit("emitActualizarCarrito", newObject)
    },   
    agregarProductoAlCarrito(payload) {
      let o = { ...payload, cantidadCarrito: 1 };
      this.$store.commit("addToCarrito", o);
    },
    Comprar() {
        "https://62efbfad57311485d1278ded.mockapi.io/api/products/products" + this.$route.params.id,
        this.products
      alert('Buen trabajo!! compra finalziada.')
    },
  },
  computed : {
    carrito () {
      return this.$store.getters.carrito
    },
    ...mapGetters ({
      carrito: 'addToCarrito'
    })
  }
};
</script>

<style scoped>
.carrito-card {
  background-color: rgb(176, 228, 240);
}
.btn {
  background-color: rgb(202, 240, 35);
}
</style>
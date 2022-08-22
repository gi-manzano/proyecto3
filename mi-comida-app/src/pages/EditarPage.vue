<template lang="html">
  <section class="edit-component" >
    <h1>Setting products</h1>
        <div class="container">
              <div class="row justify-content-center">
                <div class="col-6 py-5">
                  <form @submit.prevent="settingProducts">
                    <div class="card-body shadow-5-strong text-center">
                      <p class="card-title">Title: <input type="text" name="title" class="form-control" v-model="title"></p>
                      <p class="card-text"> Description:<input type="text" name="description"  class="form-control" v-model="description"></p>
                      <p class="card-text">Price: <input type="number" name="price" class="form-control" v-model="price"></p>
                      <p class="card-text">Amount: <input type="number" name="amount"  class="form-control" v-model="amount"></p>
                      <button  type="submit" class="btn btn-primary">Actualizar</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
  </section>
</template>

<script>
// import axios from "axios";
import {mapGetters} from 'vuex'
export default {
  name: "EditarPage",

  data() {
    return {
     title: '',
     description: '',
     price: '',
     amount: '',
    
    }
  },
  async mounted() {
    let isLogged = localStorage.getItem("isLogged");
    let isAdmin = localStorage.getItem("isAdmin");

    if (isLogged != "true") {
      this.$router.push("/login");
    }

    if (isAdmin != "true") {
      this.$router.push("/admin/edit");
    }
      this.$store.dispatch ('getOneProducts', this.$route.params.id);
      this.showData ();
      
    

  },
  methods: {
    async settingProducts() {
      let id = this.$route.params.id;
      let data = {
        title: this.title,
        description: this.description,
        price: this.price,
        amount: this.amount,
      }
      await this.$store.dispatch ('settingProducts', {id,data})
      .then (response => {
        console.log (response);
        this.$router.push ("/admin/edit/");
        }) .cathc (e => {
          console.log(e)
        });
   
    },
    showData () {
      this.title = this.products.title;
      this.description = this.products.description;
      this. price = this.products.price;
      this.amount = this.products.amount
    }
  },
  computed: {
      ...mapGetters ({
        products: 'getOneProducts'
      })
  }
};
</script>
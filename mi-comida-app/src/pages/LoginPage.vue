<template lang="html">
<section class="vh-100 custom-card">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5 ">


            <!-- inicio de formulario -->
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Mi Comida App</h3>
              <form @sumbit.prevent="validarLogin">
                <div class="row">
                    <div class="col-md-12 mb-4">
                      <!-- email -->
                      <div class="form-outline">
                        <label class="form-label" for="form2Example1">Tu Email</label>
                        <input 
                        type="email" 
                        id="form2Example1" 
                        class="form-control form-control-lg" 
                        name="email"
                        v-model="email"/>
                      </div>
                      <!-- password -->
                      <div class="form-outline">
                        <label class="form-label" for="form2Example2">Tu Password</label>
                        <input 
                        type="password" 
                        id="form2Example2" 
                        class="form-control form-control-lg"
                        name="password" 
                        v-model="password"/>
                      </div>
                    </div>

                    <div class="mt-4 pt-2">
                        <button  @click="validarLogin" class="btn-primary" type="sumbit" value="Login">Login</button>
                    </div>
                      <!-- registrarse -->
                      <div class="row mb-4">
                        <div class="col">
                          <router-link to="/registro" class="text-primary justify-content-end" style="margin-left: 70%;"> No estas registrado? </router-link>
                        </div>
                      </div>
                </div>
              </form> 
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

import axios from "axios";
export default {
  name: "LoginPage",
  props: [],

  data() {
    return {
      email: '',
      password: '',
      usuarios: [],
      errors: [],
    }
  },
  methods: {
    validarLogin() {
      let data = this.usuarios.find((o) => o.email === this.email &&  o.password === this.password); 
      localStorage.clear();

      if (data) {
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("user", JSON.stringify(data));

        if (data?.isAdmin) {
          localStorage.setItem("isAdmin", "true");
          this.$router.push("/admin");
        } else {
          localStorage.setItem("isAdmin", "false");
          this.$router.push("/home");
        } 
       } else {
        this.errors.push ("Usuario o password no válidos")
       }
    },
  },
  async mounted() {
    const response = await axios.get("https://62efbfad57311485d1278ded.mockapi.io/api/products/user");
    this.usuarios = response.data;
  },
  computed: {}
};
</script>

<style scoped>
.custom-card {

background: #b7bcaa;
 background-image: url("../assets/fondo-app.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;


}

.card-body {
 
  background: rgb(34,193,195);
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(139,195,150,0.8130602582830007) 100%);
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 5px;
line-height: 2;
padding-left: 20px;
padding-right: 20px;
}

.card-registration .select-arrow {
top: 13px;
}
</style>
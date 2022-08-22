<template lang="html">
<section class="vh-100 custom-card">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5 ">
            <!-- inicio de formulario -->
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Mi Comida App</h3>
              <form @sumbit.prevent="login">
                <div class="row">
                    <div class="col-md-12 mb-4">
                      <!-- email -->
                      <div class="form-outline">
                        <label class="form-label" for="usuario">Tu Email</label>
                        <input 
                        type="email" 
                        id="usuario" 
                        class="form-control form-control-lg" 
                        name="email"
                        v-model="email"/>
                      </div>
                      <!-- password -->
                      <div class="form-outline">
                        <label class="form-label" for="password">Tu Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        class="form-control form-control-lg"
                        name="password" 
                        v-model="password"/>
                      </div>
                     
                    </div>

                    <div class="mt-4 pt-2">
                        <button type="sumbit" class="btn btn-primary mb-4">Loguin</button>
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

import {mapGetters} from 'vuex';

export default {
  name: "LoginPage",
  props: [],

  mounted () { },

  data() {
    return {
      email: '',
      password: '',
      errors: []
    }
  },

  methods: {
    login() {
      
      this.$store.dispatch('login')

      let data = this.getUsuarios.find((o) => o.email === this.email &&  o.password === this.password);
      if (!data) { this.erorr_login = true }
      localStorage.clear();

      if (data) {
        this.$store.commit ('SET_CURRENT_USUARIOS', data)
        localStorage.setItem("isLogged", "true");
        localStorage.setItem("usuarios", JSON.stringify(data));

        if (data?.isAdmin) {
          localStorage.setItem("isAdmin", "true");
          this.$router.push("/admin");
        } else {
          localStorage.setItem("isAdmin", "false");
          this.$router.push("/home");
        }
      } else {
        this.errors.push ('Usuario o password no valido')
      }
    }
  },
  computed: {
    ...mapGetters ({getUsuarios: 'getUsuarios'})
  }
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
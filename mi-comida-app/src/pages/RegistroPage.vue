<template lang="html">
  <section class="vh-100 custom-card">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <!-- errors -->
            
            <!-- inicio de formulario -->
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registrate Aquí</h3>
            <b-form  @submit.prevent="ValidarUsuario" method="POST" class="formulario">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <!-- usuario -->
                  <div class="form-outline">
                    <label class="form-label" for="firstName">Usuario</label>
                    <input 
                    type="text"  
                    v-model="name"
                    id="inline-form-input.name"
                    class="form-control form-control-lg"
                    placeholder="Usuario"
                    />
                  </div>
                </div>
                <!-- email -->
                <hr>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label" for="firstName">Email</label>
                    <input 
                    type="text" 
                    v-model="email"
                    id="firstName" 
                    class="form-control form-control-lg"
                    placeholder="tuemail@gmail.com" 
                    />
                  </div>
                </div>
                <!-- password -->
                <hr>
                  <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label class="form-label" for="password">Password</label>
                    <input 
                    type="password" 
                    v-model="password"
                    name="password" 
                    class="form-control form-control-lg"
                    placeholder="password" 
                    />
                  </div>
                </div>

              <div class="mt-4 pt-2">
                <button  type="submit" class="btn btn-secondary btn-lg" @click="EnviarData" value="Registrate">Reguistrate</button>
              </div>
           </div>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

export default {
  
  name: " RegistroPage",
  props: [],
  mounted () {

  },
  data() {
    return {
      
        name: "",
        email: "",
        password: "",
        errors: []
    };
  },
  methods: {
   EnviarData() {
      let data = {
        name: this.name,
        password: this.password,
        email: this.email,
        isAdmin: false,
      };
       this.$store.dispatch ('registro', data)
       this.$router.push('/login');
    },
    //  checkForm () {return (this.validarNombre() && this.validarMail() && this.validarEdad() && this.validarPassword())},
        
        ValidarUsuario (a) {
          this.errors = [];
          let nameRegex= /^[a-zA-Z]{3,}$/;
          let emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          // nombre usuario
          if (!this.name) {
            this.errors.push ('Nombre de usuario requerido!');
          } else if (!nameRegex.test (this.name)) {
            this.errors.push ('Usuario no valido')
          }
          // email usuario
          if (!this.email) {
            this.errors.push ('Email de usuario requerido!');
          } else if (!emailRegex.test (this.email)) {
            this.errors.push ('Email no valido')
          }
          // password usuario
          if (!this.password) {
            this.errors.push ('Password de usuario requerido');
          } else if (this.password.length > 10) {
            this.errors.push ('La contraseña debe tener maximo 8 caracteres')
          }
          // error de datos
          if (this.errors.length > 0){
              a.preventDataful ();
          } else {
            this.EnviarData ();
          }
        }
  },
};
</script>

<style scoped>
.custom-card {
  background: #b7bcaa;
  background-image: url("../assets/fondo-app.jpg");
  background-repeat: no-repeat;
  background-size: cover;
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
top: 10px;
}
</style>
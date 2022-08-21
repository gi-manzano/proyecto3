<template lang="html">

  <section class="navbar-component">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
            <img src="../assets/comida-logo.png" height="30" alt="MDB Logo" loading="lazy"/>
          </a>
         
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/registro">Registrate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin">Admin</a>
            </li>
          </ul>
         
        </div>
        <div class="d-flex align-items-center">
          
          <a class="text-reset me-3" @click="Usuario">
            <i class="fas fa-shopping-cart"></i>
          </a>
          <div class="dropdown">
            <a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false" @click="logout">Logout
            </a>
          </div>
        </div>
        <div class="d-flex align-items-center">
            <a class="text-reset me-3" @click="Usuario" href="/carrito">
            <i class="fas fa-shopping-cart"></i>
            </a>
        </div>
      </div>
    </nav>
</section>
</template>

<script lang="js">
  export default  {
    name: 'navbar-component',
    props: [],
    mounted () {

    },
    data () {
      return {
        user: [],
      }
    },
    methods: {
      logout(){
        localStorage.setItem('isLogged', 'false')
        this.$router.push('/login')
      },
      Usuario(){
        let data = localStorage.getItem('usuario')
        this.usuario = data;
        console.log(this.usuario);
      }
    },
    computed: {

    }
}


</script>

<style scoped>
/* .navbar-collapse {
  background: rgb(216, 60, 196);
  background: linear-gradient(0deg, rgb(174, 34, 195) 0%, rgba(139,195,150,0.8130602582830007) 100%);
}
.dropdown-toggle {
   background-color: orangered;
 
} */

</style>
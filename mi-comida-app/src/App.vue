<template>
  <div id="app">
    <NavBarComponente/>
    <router-view> </router-view>
  </div>
</template>

<script>

import NavBarComponente from './components/NavBarComponente.vue'

export default {
  name: 'App',
  components: {
  NavBarComponente
   },
  
  data(){
    return{

    }
  },
  methods:{

  }
};
</script>


<style scope>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  background-color: rgb(206, 195, 78);
 
}
</style>

<template>
  <div id="MyApp">    
    <Login  />
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#MyApp {
  padding:0 30px 0 30px;
   
}
</style>

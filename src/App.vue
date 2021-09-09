<template>
  <div id="app">
   <Login/>
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
#app{
  margin: 0px;
  padding: 0px;
  /* height: 100%; */
  overflow: hidden;
}
</style>

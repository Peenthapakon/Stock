<template>
  <div class="container ">
  
     <img alt="Vue logo" src="./assets/logo.png">
 
  <HelloWorld/>
  <SweetAlert/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import SweetAlert from './components/SweetAlert.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    SweetAlert
  }
}
</script>

<style>

</style>

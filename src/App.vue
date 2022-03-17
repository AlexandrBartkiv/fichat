<template>
<div>
  <div class="pg_Login">
    <Fiheader></Fiheader>
    <div class="form_Login">
      <form action="">
        <input class="name_Login" type="text" name="" id="" placeholder="Enter your name...">
        <input class="btn_Login" type="submit" value="Login">
      </form>
    </div>
  </div>
  
  <div class="pg_Chat">we</div>
  </div>

</template>

<script> 
// import db from './db'
import fiheader from "./components/fi-header.vue"

export default {
   name: "App",
  components: {
    Fiheader: fiheader
  },

  setup() {
    return{

    }
  }
}
</script>

<style>

</style>

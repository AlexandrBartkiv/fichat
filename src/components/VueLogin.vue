<template>
    <div class="pg_Login" >
        <div class="form_Login">
        <form 
          @submit.prevent="$emit('update',inp)"
          >
            <input 
            v-model="inp"
              class="name_Login" 
              type="text" name="" id="" 
              placeholder="Enter your name..."
            >
            <button 
              class="btn_Login" 
              type="submit">Login</button>
        </form>
        </div>
  </div>
</template>
<script>
import {ref} from 'vue'

export default {
  
  setup() {
    const inp = ref('')
    return{
      inp,
    }
    },
}
</script>
<style>
    
</style>
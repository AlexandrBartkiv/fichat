<template>
    <header>
      <div 
        v-if ="q.name == ''"
        class="name">Fichat</div>
      <div 
        v-else
        class="welcome">Welcome,{{q.name}}</div>
      <img 
        v-if ="q.name != ''"
        @click="$emit('logout')"
        src="../assets/sign-out-alt.svg" 
        alt="sgi-out" 
        srcset="">
    </header>
</template>
<script>
 import {inject, reactive} from 'vue'
export default {
   
    setup() {
        const{state, onMounted}=inject('state')
        let q = reactive();
        q = state;
        console.log(q)
        return{
          q
        }
    },
}
</script>
<style>

</style>
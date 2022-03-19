<template>
<div>
  <VueHeader></VueHeader>
  <VueLogin 
    @update="callback"
    v-if="state.name === '' || state.name === null "
    ></VueLogin>
  <VueChatView
    v-else
    ></VueChatView>
</div>

</template>

<script> 
// import db from './db'
import VueHeader from './components/VueHeader.vue'
import VueLogin from'./components/VueLogin.vue'
import VueChatView from './components/VueChatView.vue'
import { ref, onMounted, reactive } from '@vue/reactivity'

export default {
  name: "App",

  components: {
    VueHeader,
    VueLogin,
    VueChatView,
  },
  
  setup() {


    const login = ref('');
    
    console.log(login.value);

    const state = reactive({
      name:"",
      messages:[  ]
    }),

    callback = (value) =>{
      login.value = value
      console.log(login.value)
      if (login.value != ''|| login.value != null){
        state.name = login.value
        login.value=''
      }
    }
    
    return{
      login,
      callback,
      state
    }
  }
}
</script>

<style>

</style>

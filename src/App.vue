<template>
<div>
  <VueHeader></VueHeader>
  <VueLogin 
    @update="userLogin"
    v-if="state.name === '' || state.name === null "
    ></VueLogin>
  <VueChatView
    v-else
    @send="send"
    ></VueChatView>
</div>

</template>

<script> 
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
    const message = ref('');
    console.log(login.value);

    const state = reactive({
      name:"",
      messages:[  ]
    }),

    userLogin = (value) =>{
      login.value = value
      console.log(login.value)
      if (login.value != ''|| login.value != null){
        state.name = login.value
        login.value=''
      }
    },
    send = (value)=>{
      message.value = value
      console.log(message.value)
    }
    
    return{
      login,
      userLogin,
      state,
      send,
      message,
    }
  }
}
</script>

<style>

</style>

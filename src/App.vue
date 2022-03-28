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

import 'firebase/database'
import VueHeader from './components/VueHeader.vue'
import VueLogin from'./components/VueLogin.vue'
import VueChatView from './components/VueChatView.vue'
import {ref, reactive, onBeforeMount, provide, onMounted, onUpdated } from 'vue'

import { initializeApp } from 'firebase/app';
import { getDatabase, onValue } from "firebase/database";
import { ref as rtdbref, push } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9YTBMsst9g0D-JmZ7UEfenXgwdlQW9ts",
  authDomain: "fichat-4baa0.firebaseapp.com",
  databaseURL: "https://fichat-4baa0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fichat-4baa0",
  storageBucket: "fichat-4baa0.appspot.com",
  messagingSenderId: "228653004164",
  appId: "1:228653004164:web:6cb4e95e1a03abc5d359d1"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default {
  name: "App",


  components: {
    VueHeader,
    VueLogin,
    VueChatView,
  },
  
  setup() {
    const login = ref('');
    const inputMessage = ref('');
    const database = getDatabase();
    const q = '123';
    const state = reactive({
      name:"",
      messages:[]
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
      inputMessage.value = value
      console.log(inputMessage.value)
      if (inputMessage.value === '' || inputMessage.value === null){
        return
      }
      const message ={
        username: state.name,
        content: inputMessage.value
      }
      push(rtdbref(database,'messages'),message)
      inputMessage.value=''
    } 
    onMounted(()=>{
      const database = getDatabase(app);
      const messg = rtdbref(database,'messages')
      
      onValue(messg, (snapshot)=>{
        const data = snapshot.val();
        let messages = [];

        Object.keys(data).forEach(key =>{
          messages.push({
            id: key,
            username:data[key].username,
            content:data[key].content
          });
        });
        state.messages = messages;
        
        console.log(state)
      })
    });
    console.log(state)
    provide('state',{
      state,
      onMounted 
    })
    return {
      login,
      userLogin,
      send,
      inputMessage,
      state,
    }
  }
}
</script>

<style>

</style>

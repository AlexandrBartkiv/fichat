<template>
    <div class="pg_Chat">
    <div class="cht_Container">
      <div class="msgs"
       >
        <div 
          v-for="message in state.messages"
          :key="message.key"
          :class="(message.username == state.username ? 'msg_Container2' : 'msg_Container1')">
          <div class="msg1">
          <div class="name">{{message.username}}</div>
          <div class="txt">{{message.content}}</div>
        </div>
        </div>
      </div>
      <div class="msg_Input">
        <form 
          @submit.prevent="$emit('send',msg)">
          <input 
            v-model="msg"
            class="msg_Text" 
            type="text" 
            placeholder="Message...">
          <label>
            <img src="../assets/paper-plane.svg" alt="" srcset="">
            <input class="msg_Send" type="submit" value="">
          </label>
          
        </form>
      </div>
    </div>
  </div> 
</template>
<script>
import { ref } from '@vue/reactivity'
export default {
props:{
   state: Object
},

  components: {
  },
    setup(props) {
        const msg = ref('')
        return{
          msg,
        }
    },
    
}
</script>
<template>
<div>
  <!-- <Filogin></Filogin> -->
  <div class="pg_Chat">
    <Fiheader></Fiheader>
    <div class="cht_Container">
      <div class="msgs">
        <div class="msg_Container1">
          <div class="msg1">
          <div class="name">Barra</div>
          <div class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quis.</div>
        </div>
        </div>
        <div class="msg_Container2">
           <div class="msg2">
          <!-- <div class="name">Barra</div> -->
          <div class="txt"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae similique quidem maiores, hic et voluptatem vel velit praesentium sed officia, quas aliquid ducimus suscipit nisi quasi iste tempora excepturi! Sequi quasi aliquid vel natus, temporibus autem culpa nisi reiciendis cumque et itaque harum nostrum laudantium, quas accusantium voluptatibus quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quis.</div>
          </div>
        </div>
      </div>
      <div class="msg_Input">
        <form action="">
          <input class="msg_Text" type="text" placeholder="Message...">
          <label>
            <img src="./assets/paper-plane.svg" alt="" srcset="">
            <input class="msg_Send" type="submit" value="">
          </label>
          
        </form>
      </div>
    </div>
  </div>
  </div>

</template>

<script> 
// import db from './db'
import {reactive,ref,onMounted} from 'vue';
// import filogin from './components/fi-login.vue'
import fiheader from './components/fi-header.vue';
export default {
   name: "App",
  components: {
    Fiheader: fiheader,
    // Filogin: filogin
  },

  setup() {
    return{

    }
  }
}
</script>

<style>

</style>

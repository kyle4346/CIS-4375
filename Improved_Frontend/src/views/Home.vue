<template>
<!-- Inside the temaplate adding some text and calling the 
HelloWorld componenent to produce a view when clicking on CFC Mananagement APP-->
  <div class="home">
    <HelloWorld style="text-align:center" msg="Pipeline International"/>
    <img src="https://i.pinimg.com/originals/3e/6b/0b/3e6b0b4cd20e10744886b5653c3ee9b9.jpg"  class="center" >
  </div>
 
</template>



<script>
// @ is an alias to /src
//Calling the component HelloWorld create vue instance
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

</style>

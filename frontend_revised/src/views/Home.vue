<template>
<!-- Inside the temaplate adding some text and calling the 
HelloWorld componenent to produce a view when clicking on CFC Mananagement APP-->
  <div class="home">
    <HelloWorld style="text-align:center" msg="Welcome to the CFC Family"/>
    <img src="https://wallpaperbat.com/img/68760-houston-texas-wallpaper.jpg"  class="center" >
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
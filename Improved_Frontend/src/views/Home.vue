<template>
  <!-- Inside the temaplate adding some text and calling the 
HelloWorld componenent to produce a view when clicking on CFC Mananagement APP-->
  <div id="home"  > <!-- :style="{'background-image':'url(https://hips.hearstapps.com/pop.h-cdn.co/assets/15/22/1600x2179/gallery-1432675837-1-choose.jpg?resize=980:*)'}"-->
    <HelloWorld style="text-align: center" msg="Pipeline International" />
    <!-- <img src="https://i.pinimg.com/originals/3e/6b/0b/3e6b0b4cd20e10744886b5653c3ee9b9.jpg"  class="center" > -->

    <Slider />

    <img src='../assets/logo.png' >

  </div>
</template>



<script>
// @ is an alias to /src
//Calling the component HelloWorld create vue instance
import HelloWorld from "@/components/HelloWorld.vue";
import Slider from "./Slider.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Slider,
  },
  
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0px;
}
</style>

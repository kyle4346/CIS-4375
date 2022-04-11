<template>
  <!-- Inside the temaplate adding some text and calling the 
HelloWorld componenent to produce a view when clicking on CFC Mananagement APP-->
  <div id="home"  > <!-- :style="{'background-image':'url(https://hips.hearstapps.com/pop.h-cdn.co/assets/15/22/1600x2179/gallery-1432675837-1-choose.jpg?resize=980:*)'}"-->
    <HelloWorld style="text-align: center" msg="Welcome to Pipeline International" />
    <!-- <img src="../assets/Add.png"  class="center" > -->

    <!-- <img src="../assets/logo1.jpeg" class = "image"> -->
    <button id = "toTop" @click="moveUp()"> </button>
    
    <!-- <Slider /> -->

    

  </div>
</template>



<script>
// @ is an alias to /src
//Calling the component HelloWorld create vue instance
import HelloWorld from "@/components/HelloWorld.vue";
// import Slider from "./SliderComponent.vue";

export default {
  name: "myHome",
  components: {
    HelloWorld,
    // Slider,
  },
  methods: {
    moveUp(){
           window.scrollTo(0,0);
      }
  }
  
};
</script>


<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.container {
  max-width: 1320px;
  max-height: 71.8px;
}

#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#image {
  max-width: 52.39px;/* 70*/
  max-height: 50px;/* 50*/
}

#image3 {
  max-width: 48.75px;/* 70*/
  max-height: 50px;/* 50*/
}

#image2 {
  max-width: 150px;
  max-height: 50px;
}
#toTop {
  position: fixed;
  border: 1px solid blue;
  background-color: rgba(255,200,200,0.5);  
  width: 300px;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>

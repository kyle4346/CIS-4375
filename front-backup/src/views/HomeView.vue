<template>
  <!-- Inside the temaplate adding some text and calling the 
HelloWorld componenent to produce a view when clicking on CFC Mananagement APP-->
  <div id="home">
    <!-- :style="{'background-image':'url(https://hips.hearstapps.com/pop.h-cdn.co/assets/15/22/1600x2179/gallery-1432675837-1-choose.jpg?resize=980:*)'}"-->
    <HelloWorld
      style="text-align: center"
      msg="Welcome to Piping International"
    />
    <!-- <img src="../assets/Add.png"  class="center" > -->

    <!-- <img src="../assets/logo1.jpeg" class = "image"> -->

    <img class="slide-image" :src="getImgUrl(images[0])" />

    <button id="toTop" @click="moveUp()"></button>

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
  data() {
    return {
      images: ["team.jpeg", "const.jpg","project.jpeg","project1.jpeg","project2.jpeg"], //these images are located inside of assets folder
    };
  },
  components: {
    HelloWorld,
    // Slider,
  },
  watch: {
    getImgUrl() {},
  },
  mounted() {
    window.setInterval(() => {
      this.slide();
    }, 5000);
  },
  methods: {
    moveUp() {
      window.scrollTo(0, 0);
    },
    getImgUrl(im) {
      return require("../assets/" + im);
    },
    slide() {
      let first = this.images.shift();
      this.images = this.images.concat(first);
    },
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
  max-width: 52.39px; /* 70*/
  max-height: 50px; /* 50*/
}

#image3 {
  max-width: 48.75px; /* 70*/
  max-height: 50px; /* 50*/
}

#image2 {
  max-width: 150px;
  max-height: 50px;
}
#toTop {
  position: fixed;
  border: 1px solid blue;
  background-color: rgba(255, 200, 200, 0.5);
  width: 300px;
  height: 100px;
  bottom: 0;
  left: 0;
  right: 0;
}
.slide-image {
  height:600px;
  width:70%
}
</style>

<template>
  <div class="Project">
    <HelloWorld msg="Balance Sheet" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Project",
  components: {
    HelloWorld,
  },
};
</script>

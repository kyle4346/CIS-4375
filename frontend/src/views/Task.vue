<template>
  <div class="Task">
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Task",
  components: {
    HelloWorld,
  },
};
</script>

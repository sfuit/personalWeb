<template>
  <div id="main-view">
    <home-page></home-page>
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from "@/components/home.vue";
export default {
  name: "main-view",
  components: {
    HomePage
  },
  data() {
    return {};
  }
};
</script>
<style lang="css" scoped>
</style>

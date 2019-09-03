<template>
  <div id="home-page">
    <div class="topbar">
      <span @click="backHome">Welcome To UIT's Platform</span>
    </div>
    <left-bar class="left-bar" @change-page="handlePage"></left-bar>
  </div>
</template>

<script>
import LeftBar from "@/components/common/left-bar";
export default {
  name: "home-page",
  components: {
    LeftBar
  },
  data() {
    return {};
  },
  methods: {
    backHome() {
      this.$router.push({ path: "/" });
    },
    handlePage(val) {
      if (val === "profile") {
        this.$router.push({
          name: "profile"
        });
      } else if (val === "info") {
        this.$router.push({
          name: "info"
        });
      }
    }
  }
};
</script>


<style scoped lang="scss">
#home-page {
  text-align: center;
  position: relative;
  height: 100%;
  .topbar {
    background-color: #0078d7;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left-bar {
    position: fixed;
    top: 30px;
    left: 0;
    width: 150px;
    height: 100%;
    background: #252c30;
    opacity: 0.9;
  }
}
</style>

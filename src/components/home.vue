<template>
  <div id="home-page">
    <h1>Welcome To UIT's Platform</h1>

    <transition name="slide-fade">
      <left-bar v-if="showBar" class="left-bar"></left-bar>
    </transition>
    <transition name="slide-fade-left">
      <div v-if="showBar" class="showbar showbar-left">
        <span class="el-icon-arrow-left" @click="changeState()"></span>
      </div>
    </transition>
    <transition name="slide-fade-right">
      <div v-if="!showBar" class="showbar showbar-right">
        <span class="el-icon-arrow-right" @click="changeState()"></span>
      </div>
    </transition>
  </div>
</template>

<script>
import LeftBar from "./web-design/left-bar";
export default {
  name: "home-page",
  components: {
    LeftBar
  },
  data() {
    return {
      showBar: true
    };
  },
  methods: {
    changeState() {
      this.showBar = !this.showBar;
    }
  }
};
</script>


<style scoped lang="scss">
#home-page {
  text-align: center;
  position: relative;
  height: 100%;
  .left-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    background: #252c30;
    opacity: 0.9;
  }
  .showbar {
    position: fixed;
    width: 12px;
    height: 40px;
    top: 50%;
    border-radius: 0 10px 10px 0;
    background: #252c30;
    line-height: 40px;
    opacity: 0.9;
    span {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      cursor: pointer;
      color: #fff;
    }
  }
  .showbar-left {
    left: 150px;
  }
  .showbar-right {
    left: 0;
  }
}
//leftbtn
.slide-fade-left-enter-active,
.slide-fade-left-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-left-enter
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-1260%);
}
.slide-fade-left-leave-active {
  transform: translateX(-1260%);
}

//rightbtn
.slide-fade-right-enter-active,
.slide-fade-right-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-right-enter
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(1260%);
}
.slide-fade-right-leave-active {
  transform: translateX(1260%);
}

//leftbar
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100%);
}
.slide-fade-leave-active {
  transform: translateX(-100%);
}
</style>

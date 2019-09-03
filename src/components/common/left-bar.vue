<template>
  <div id="left-bar" :class="showBar?'leave':'enter'">
    <div>
      <h2 class="iconfont icon-daohang">&nbsp;网站导航</h2>
      <ul>
        <li class="page iconfont icon-gerenxinxi" @click="$emit('change-page','profile')">&nbsp;个人介绍</li>
        <li class="page iconfont icon-ziyuan" @click="$emit('change-page','info')">&nbsp;信息交流</li>
        <li class="page iconfont icon-huaban">&nbsp;娱乐交友</li>
        <li class="page iconfont icon-31">&nbsp;个人文案</li>
      </ul>
    </div>
    <div class="showbar">
      <span :class="showBar?'el-icon-arrow-left':'el-icon-arrow-right'" @click="changeState()"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "left-bar",
  data() {
    return {
      showBar: false
    };
  },
  methods: {
    changeState() {
      this.showBar = !this.showBar;
    }
  }
};
</script>
<style lang="scss" scoped>
#left-bar {
  display: flex;
  justify-content: center;
  position: relative;
  div {
    margin-top: 50px;
    h2 {
      font-size: 20px;
      color: lightgray;
    }
    ul {
      color: lightgray;
      .page {
        cursor: pointer;
      }
      li {
        font-size: 16px;
        margin-top: 20px;
      }
    }
  }
  .showbar {
    position: fixed;
    width: 12px;
    height: 40px;
    top: 30%;
    left: 150px;
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
}
.enter {
  transform: translateX(-150px);
  transition: 0.2s;
}
.leave {
  transform: translateX(0);
  transition: 0.2s;
}
</style>

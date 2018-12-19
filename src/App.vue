<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="">TEXT DATA Cloud</el-menu-item>
          <el-menu-item index="/" >处理中心</el-menu-item>
          
          <el-submenu index="" style="float:right">
            <template slot="title">
              <img class="user-header-circle images" src="@/assets/logo.png" alt="logo"/>
            </template>
            <div style="padding: 10px; border-bottom: 1px solid #EBEEF5;">
              <div style="font: 20px Extra large">USERNAME</div>
              <div style="font: 12px Extra Small; color: #909399;">example@email.com</div>
            </div>
            <el-menu-item index="/user" >
              <i class="el-icon-setting"></i>查看信息
            </el-menu-item>
            <el-menu-item index="/pay-center"><i class="el-icon-goods"></i>充值中心</el-menu-item>
            <el-menu-item index=""><i class="el-icon-circle-close-outline"></i>退出登录</el-menu-item>
          </el-submenu>
          <el-menu-item index="/sign-in" style="float:right;">登录</el-menu-item>
        </el-menu>
      </el-header>

      <el-main style="min-height: 800px;">
        <router-view></router-view>
      </el-main>

      <el-footer>
        <div style="border-top: 1px solid #d9d9d9;"></div>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss">
// @import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.user-header-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: '/',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>


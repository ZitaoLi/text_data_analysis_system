<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect" ref="nav">
          <el-menu-item index="">
            <img class="logo images" src="img/BB-LOGO.jpg" alt="logo"/>
            影评数据分析系统
          </el-menu-item>
          <el-menu-item index="/">处理中心</el-menu-item>
          <el-submenu index="" style="float:right" v-if="logined">
            <template slot="title">
              <img class="user-header-circle images" :src="userHeader" alt="logo"/>
            </template>
            <div style="padding: 10px; border-bottom: 1px solid #EBEEF5;">
              <div style="font: 20px Extra large">{{ userName }}</div>
              <div style="font: 12px Extra Small; color: #909399;">{{ email }}</div>
            </div>
            <el-menu-item index="/user" >
              <i class="el-icon-setting"></i>查看信息
            </el-menu-item>
            <el-menu-item index="/pay-center"><i class="el-icon-goods"></i>充值中心</el-menu-item>
            <el-menu-item index="" @click="logout"><i class="el-icon-circle-close-outline"></i>退出登录</el-menu-item>
          </el-submenu>
          <el-menu-item index="/sign-in" style="float:right;" v-if="!logined">登录</el-menu-item>
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
</style>

<style scoped>
.user-header-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.logo {
  /* width: 50px; */
  height: 50px;
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
  computed: {
    logined: {
      get() {
        return this.$store.getters.logined;
      },
      set(val) {
        if (val == false) this.$store.commit('logout');
      }
    },
    userName: {
      get() {
        return this.$store.getters.user.userName;
      }
    },
    userHeader: {
      get() {
        return this.$store.getters.user.userHeader ? this.$store.getters.user.userHeader : '/img/logo.jpg';
      } 
    },
    email: {
      get() {
        return this.$store.getters.user.email;
      }
    }
  },
  watch: {
    logined(val) {
      console.log(val);
    },
    activeIndex(val) {
      console.log(val);
    }
  },
  created() {
    var token = localStorage.getItem('token');
    var userName = localStorage.getItem('userName');
    var userHeader = localStorage.getItem('userHeader');
    var identity = localStorage.getItem('identity');
    var email = localStorage.getItem('email');
    if (token) {
      this.logined = true;
      this.$store.commit('login', {
        token: token,
        userName: userName,
        userHeader: userHeader,
        identity: identity,
        email: email
      });
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logout() {
      this.logined = false;
      this.$router.push('/');
      localStorage.clear();
    }
  }
}
</script>


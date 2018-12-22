<template>
  <div class="pay" style="width: 1024px; margin-right: auto; margin-left: auto;">
    <el-container>
      <el-aside style="margin-top: 20px; width: 215px;">
        <user-info-plane :user="user" @route="route" />
      </el-aside>
      <el-main style="margin-left: 20px;">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import UserInfoPlane from '@/components/UserInfoPlane.vue'
export default {
  data() {
    return {
      user: {},
    }
  },
  methods: {
    route(data) {
      console.log(data);
      this.$router.push(data.route);
    }
  },
  components: {
    UserInfoPlane,
  },
  created() {
    // TODO: fetch user infomation
    var token = localStorage.getItem('token');
    var username = localStorage.getItem('userName');
    var userHeader = localStorage.getItem('userHeader');
    var identity = localStorage.getItem('identity');
    var email = localStorage.getItem('email');
    var wechat = localStorage.getItem('wechat');
    var profile = localStorage.getItem('profile');
    var organization = localStorage.getItem('organization');
    var position = localStorage.getItem('position');
    var city = localStorage.getItem('city');
    var birthdate = localStorage.getItem('birthdate');

    let user = { userName: username, email: email };
    this.user = user;
  }
}
</script>

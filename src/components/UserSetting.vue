<template>
  <div class="user-setting">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人信息" name="user-info">
        <user-info-form :user="user"></user-info-form>
      </el-tab-pane>
      <el-tab-pane label="安全设置" name="security-info">
        <user-security-form :user="user"></user-security-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/* eslint-disable */
import UserInfoForm from '@/components/UserInfoForm.vue'
import UserSecurityForm from '@/components/UserSecurityForm.vue'
export default {
  name: 'UserSetting',
  components: {
    UserInfoForm,
    UserSecurityForm
  },
  data() {
    return {
      activeName: 'user-info',
      user: {},
    }
  },
  methods: {
    handleClick() {

    }
  },
  created() {
    // TODO: fetch data
    var userName = localStorage.getItem('userName');
    var userHeader = localStorage.getItem('userHeader');
    var identity = localStorage.getItem('identity');
    var email = localStorage.getItem('email');
    var wechat = localStorage.getItem('wechat');
    var profile = localStorage.getItem('profile');
    var phone = localStorage.getItem('phone');
    var organization = localStorage.getItem('organization');
    var position = localStorage.getItem('position');
    var city = localStorage.getItem('city');
    var birthdate = localStorage.getItem('birthdate');

    let user = { 
      userName: userName ? userName : '', 
      email: email ? email : '',
      phone: phone ? phone : '',
      profile: profile ? profile : '',
      organization: organization ? organization : '',
      position: position ? position : '',
      city: city ? city : '',
      birthdate: birthdate ? birthdate : ''
    };
    console.log(user);
    this.user = user;
  }
}
</script>


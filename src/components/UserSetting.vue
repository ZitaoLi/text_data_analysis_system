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
    console.log('user-setting created');
    let user = { 
      userName: 'test', 
      email: 'test@email.com',
      phone: '123456789',
      profile:'this is me',
      organization: 'scut',
      position: 'student',
      city: 'Guangzhou',
      birthdate: '1995-01-01'
    };
    this.user = user;
    // setTimeout(() => {
    //   console.log('user-setting timeout');
    //   this.user = { userName: 'test2', email: 'test@email.com' };
    // }, 1000);
  }
}
</script>


<template>
  <div class="user-setting">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人信息" name="user-info">
        <user-info-form></user-info-form>
      </el-tab-pane>
      <el-tab-pane label="安全设置" name="security-info">
        <user-security-form></user-security-form>
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
    }
  },
  methods: {
    handleClick() {

    }
  }
}
</script>


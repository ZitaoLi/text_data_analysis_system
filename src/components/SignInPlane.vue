<template>
  <div class="sign-in-plane">
    <el-card class="box-card" shadow="hover" style="width: 500px; margin-left: auto; margin-right: auto;">
      <el-input
        placeholder="请输入账号"
        v-model="userName"
        clearable>
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        clearable>
      </el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SignInPlane',
  data() {
    return {
      userName: '',
      password: ''
    }
  }
}
</script>

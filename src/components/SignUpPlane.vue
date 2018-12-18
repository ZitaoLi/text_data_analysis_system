<template>
  <div class="sign-up-plane">
    <el-card class="box-card" shadow="hover">
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
      <el-input
        placeholder="请确认密码"
        v-model="password"
        clearable>
      </el-input>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SignUpPlane',
  data() {
    return {
      userName: '',
      password: '',
      comfirmedPsw: '',
    }
  }
}
</script>

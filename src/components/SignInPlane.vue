<template>
  <div class="sign-in-plane">
    <el-card class="box-card" shadow="hover">
      <img class="circile-img" src="@/assets/logo.png" alt="logo"/>
      <el-form ref="form" :model="form" label-width="0px" class="form-group">
        <el-form-item label="">
          <el-input
            placeholder="请输入账号"
            v-model="form.userName"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'SignInPlane',
  data() {
    return {
      form: {
        userName: '',
        password: '',
      }
    }
  }
}
</script>

<style scoped>
.box-card {
  width: 500px; 
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
}
.form-group {
  margin-top: 22px;
}
.circile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>


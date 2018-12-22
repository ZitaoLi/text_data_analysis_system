<template>
  <div class="user-security-form">
    <el-form ref="form" :model="form" label-width="128px" :label-position="labelPosition">
      <el-form-item  label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item  label="微信">
        <el-button style="float: left; color: #409EFF; border-color: #409EFF;" @click="bindWechat">去绑定</el-button>
      </el-form-item>
      <el-form-item  label="手机号码">
        <el-input placeholder="请输入内容" v-model="form.phone" disabled>
          <template slot="append">
            <el-button style="color: #409EFF; background-color: white;" @click="deBindPhoen">解除绑定</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item  label="输入新密码">
        <el-input v-model="form.newPassword"></el-input>
      </el-form-item>
      <el-form-item  label="确认新密码">
        <el-input v-model="form.comfirmedNewPswd"></el-input>
      </el-form-item>
      <el-form-item  label="">
        <el-button style="float: left; color: #409EFF; border-color: #409EFF;" @click="update">更新资料</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserSecurityForm',
  data() {
    return {
      labelPosition: 'left',
      form: {
        email: '',
        wechat: '',
        phone: '',
        newPassword: '',
        comfirmedNewPswd: ''
      }
    }
  },
  props: {
    user: Object
  },
  created() {
    console.log(this.user);
    this.form.email = this.user.email;
    this.form.phone = this.user.phone;
  },
  watch: {
    user(val) {
      console.log('user-security-form watch user');
      this.form.email = val.email;
      this.form.phone = val.phone;
    }
  },
  methods: {
    deBindPhoen() {
      alert('解除绑定');
    },
    bindWechat() {
      alert('绑定微信');
    },
    update() {
      alert('update');
    }
  }
}
</script>

<style scoped>
.user-security-form {
  margin-top: 22px;
}
</style>

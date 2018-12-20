<template>
  <div class="sign-in-plane">
    <el-card class="box-card" shadow="hover">
      <img class="circile-img" src="@/assets/logo.jpg" alt="logo"/>
      <el-form ref="form" :model="form" label-width="0px" class="form-group">
        <el-form-item label="">
          <el-input
            placeholder="请输入账号"
            v-model.trim="form.userName"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input
            placeholder="请输入密码"
            v-model.trim="form.password"
            clearable>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;" @click="signIn">登录</el-button>
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
  },
  methods: {
    signIn() {
      var name = this.form.userName || '';
      var password = this.form.password || '';
      if (name && password) {
        this.axios.post('login', {
          "username": this.form.username,
          "password": this.form.password,
        }, { 
          headers: {
            'Content-Type':'application/x-www-form-urlencoded'
          }
        }).then((response) => {
          console.log(response);
          // TODO: 缓存token
          // TODO: 重定向到主页，隐藏登录按钮
          this.$store.commit('login', { token: '', userName: 'lztao', userHeader: '', identity: 'vip-user' });
          this.$router.push('/');
        }).catch((error) => {
          console.log(error);
          alert('fail');
        });
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


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
import TokenParser from '@/services/TokenParser'
export default {
  name: 'SignInPlane',
  data() {
    return {
      form: {
        userName: 'user',
        password: 'vipuser',
      }
    }
  },
  methods: {
    signIn() {
      var data = { 
        username: this.form.userName || '', 
        password: this.form.password || ''
      };
      if (data.username && data.password) {
        this.axios.post('user/login', this.$qs.stringify(data),
        {
          headers: {
            'Content-Type':'application/x-www-form-urlencoded',
          }
        }).then((response) => {
          console.log(response.data);
          var state = {
            token: response.data,
            userName: response.data ? '666' : TokenParser.parseToken(response.data).sub,
            userHeader: '',
            email: '',
            identity: 'non-user'
          };
          // TODO: 注册登录信息并重定向
          this.$store.commit('login', { 
            token: state.token, 
            userName: state.userName, 
            userHeader: state.userHeader,
            identity: state.identity, 
            email: state.email 
          });
          // TODO: 缓存token
          localStorage.setItem('token', state.token);
          localStorage.setItem('userName', state.userName);
          localStorage.setItem('userHeader', state.userHeader);
          localStorage.setItem('identity', state.identity);
          localStorage.setItem('email', state.email);
          this.$router.push('/');
        }).catch((error) => {
          console.log(error);
          console.log('login failed');
          this.$store.commit('login', { 
            token: '', 
            userName: 'test user', 
            userHeader: '',
            identity: 'non-user', 
            email: 'testuser@email.com' 
          });
          this.$router.push('/');
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


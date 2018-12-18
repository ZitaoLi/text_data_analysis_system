<template>
  <div class="sign-in">
      <el-radio-group v-model="tabPosition" @change="handleChange" style="margin-bottom: 30px;" ref="radioGroup">
        <el-radio-button label="sign-in-plane" ref="signInPlane">登陆</el-radio-button>
        <el-radio-button label="sign-up-plane" ref="signUpPlane">注册</el-radio-button>
      </el-radio-group>
      <div style="width: 512px; margin-left: auto; margin-right: auto;">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: 'sign-in'
    }
  },
  mounted() {
    this.$refs.signInPlane.$el.click();
  },
  methods: {
    handleChange(label) {
      this.$router.push('/' + label);
    }
  }
}
</script>

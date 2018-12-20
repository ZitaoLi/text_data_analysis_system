<template>
  <div class="user-info-plane">
    <el-card :body-style="{ padding: '0px', paddingBottom: '10px' }" class="box-card">
      <img :src="user.userHeader ? 'user.userHeader' : '/img/logo.jpg'" class="image" style="max-width: 215px;">
      <div class="text-name item">{{ user.userName }}</div>
      <div class="text-email item">{{ user.email }}</div>
      <br>
      <el-menu default-active="user-info" class="el-menu-vertical-demo" style="border-right-width: 0px;">
        <el-menu-item index="user-info" @click="routeTo('/user-info')" ref="userInfo">
          <i class="el-icon-menu"></i>
          <span slot="title">账户信息</span>
        </el-menu-item>
        <el-menu-item index="user-setting" @click="routeTo('/user-setting')" ref="userSetting">
          <i class="el-icon-document"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'UserInfoPlane',
  props: {
    user: Object
  },
  data() {
    return {
      routePaths: [
        '/user-info',
        '/user-setting',
      ],
    }
  },
  mounted() {
    this.$refs.userInfo.$el.click('/user-info');
  },
  methods: {
    routeTo(path) {
      var data = { route: path };
      this.$emit('route', data);
    }
  }
}
</script>

<style scoped>
.text-name {
  font: 18px large;
  color: #303133;
}
.text-email {
  font: 12px Extra Extra Small;
  color: #C0C4CC;
}
.item {
  margin-bottom: 2px;
}
.image {
  margin-bottom: 22px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

</style>


<template>
  <div class="pay" style="width: 1024px; margin-right: auto; margin-left: auto;">
    <el-container>
      <el-aside width="215px">
        <user-info-plane @route="route" />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import UserInfoPlane from '@/components/UserInfoPlane.vue'
export default {
  methods: {
    route(data) {
      console.log(data);
      this.$router.push(data.route);
    }
  },
  components: {
    UserInfoPlane,
  }
}
</script>

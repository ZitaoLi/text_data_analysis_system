<template>
  <div class="user-info">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="方案信息" name="scheme-info">方案信息</el-tab-pane>
      <el-tab-pane label="购买账单" name="bill-list">购买账单</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      activeName: 'scheme-info'
    }
  },
  methods: {
    handleClick() {

    }
  }
}
</script>

<style>

</style>

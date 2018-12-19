<template>
  <div class="scheme-info">
    <h1>我的方案</h1>
    <el-row :gutter="12">
      <el-col :span=" 8">
        <el-card shadow="never">
          <div class="card-inner-1">方案类型</div>
          <div class="card-inner-2">{{ scheme.type }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <div class="card-inner-1">购买方案</div>
          <div class="card-inner-2">{{ scheme.bought ? '免费试用' : '付费使用' }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <div class="card-inner-1">到期时间</div>
          <div class="card-inner-2">{{ scheme.expireDate }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SchemeInfo',
  data() {
    return {
      scheme: {
        type: '免费版',
        bought: 'false',
        expireDate: '2019-01-05',
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font: 18px large;
  text-align: left;
  margin-top: 22px;
}
.card-inner-1 {
  font: 13px Extra Small;
  color: #909399;
}
.card-inner-2 {
  font: 20px Extra large;
  color: #409EFF;
}
</style>

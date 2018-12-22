<template>
  <div class="motion-analysis-shower">
    <el-table v-if="emotions" :data="emotions" style="width: 100%" 
      :row-class-name="tableRowClassName">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="comment" label="评论内容" :show-overflow-tooltip="true"></el-table-column>
      <el-table-column prop="kind" label="类型" width="100px" :formatter="test"></el-table-column>
    </el-table>
  </div>
</template>

<style>
.el-table .positive-row {
  background: rgb(234, 252, 225);
}

.el-table .nagetive-row {
  background: rgb(243, 204, 204);
}
</style>

<script>
export default {
  name: 'MotionAnalysisShower',
  props: {
    emotions: Array
  },
  methods: {
    /* eslint-disable */
    tableRowClassName({row, rowIndex}) {
      if (row.kind === 0) {
        return 'positive-row';
      } else {
        return 'nagetive-row';
      }
    },
    /* eslint-disable */
    test(row, column, cellValue, index) {
      if (cellValue == 0) {
        return '积极';
      } else {
        return '消极';
      }
    }
  }
}
</script>
<template>
  <div class="motion-analysis-shower">
    <el-table v-if="emotions" :data="emotions" style="width: 100%" 
      :row-class-name="tableRowClassName">
      <el-table-column prop="id" label="#" width="50px">
      </el-table-column>
      <el-table-column prop="content" label="评论内容" :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column prop="type" label="类型" width="100px" :formatter="test">
      </el-table-column>
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
      if (row.type === 1) {
        return 'positive-row';
      } else {
        return 'nagetive-row';
      }
    },
    /* eslint-disable */
    test(row, column, cellValue, index) {
      if (cellValue == 1) {
        return 'positive';
      } else {
        return 'negative';
      }
    }
  }
}
</script>
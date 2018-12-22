<template>
  <div class="bill-list">
    <template>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column  prop="name" label="购买项目" align="center">
        </el-table-column>
        <el-table-column prop="address" label="购买金额"  width="100" align="center">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180" align="center">
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'BillList',
    data() {
      return {
        tableData: []
      }
    }
  }
</script>
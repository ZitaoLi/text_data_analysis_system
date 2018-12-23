<template>
  <div class="bill-list">
    <template>
      <el-table :data="tableData" style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column  prop="name" label="购买项目" align="center">
        </el-table-column>
        <el-table-column prop="money" label="购买金额"  width="100" align="center" :formatter="moneyFormatter" sortable>
        </el-table-column>
        <el-table-column prop="date" label="日期" width="250" align="center" sortable>
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
        tableData: [
          { name: '情感分析', money: '1.00', 'date': '2018-12-24' },
          { name: '评分', money: '1.00', 'date': '2018-12-24' }
        ]
      }
    },
    methods: {
      moneyFormatter(row) {
        return "¥ " + row.money;
      }
    }
  }
</script>
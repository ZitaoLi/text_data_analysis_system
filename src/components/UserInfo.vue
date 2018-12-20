<template>
  <div class="user-info">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="方案信息" name="scheme-info">
        <scheme-info :scheme="scheme"></scheme-info>
      </el-tab-pane>
      <el-tab-pane label="购买账单" name="bill-list">
        <bill-list></bill-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SchemeInfo from '@/components/SchemeInfo.vue'
import BillList from '@/components/BillList.vue'
export default {
  name: 'UserInfo',
  components: {
    SchemeInfo,
    BillList,
  },
  data() {
    return {
      activeName: 'scheme-info',
      user: null,
      scheme: null
    }
  },
  created() {
    // TODO: fetch user infomation
    let user = { userName: 'test', email: 'test@email.com' };
    let scheme = { type: '0', expireDate: '2019-01-06' };
    this.user = user;
    this.scheme = scheme;
  },
  methods: {
    handleClick() {

    }
  }
}
</script>

<style>

</style>

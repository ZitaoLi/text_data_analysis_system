<template>
  <div class="user-info">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="方案信息" name="scheme-info">
        <scheme-info :scheme="scheme"></scheme-info>
      </el-tab-pane>
      <el-tab-pane :bills="bills" label="购买账单" name="bill-list">
        <bill-list></bill-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/* eslint-disable */
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
      scheme: null,
      bills: []
    }
  },
  created() {
    // TODO: fetch user infomation
    var userName = localStorage.getItem('userName');
    var userHeader = localStorage.getItem('userHeader');
    var identity = localStorage.getItem('identity');
    var email = localStorage.getItem('email');
    var phone = localStorage.getItem('phone');
    var wechat = localStorage.getItem('wechat');
    var profile = localStorage.getItem('profile');
    var organization = localStorage.getItem('organization');
    var position = localStorage.getItem('position');
    var city = localStorage.getItem('city');
    var birthdate = localStorage.getItem('birthdate');

    // fetch scheme
    let scheme = { 
      type: identity == 'vip-user' ? '1' : '0', 
      expireDate: '',
      rest: [
        { type: 1, times: 3 },
        { type: 2, times: 2 },
        { type: 3, times: 2 },
        { type: 4, times: 3 },
        { type: 5, times: 3 },
      ]};
    this.scheme = scheme;

    // fetch bill
    let bills = [];
  },
  methods: {
    handleClick() {

    }
  }
}
</script>

<style>

</style>

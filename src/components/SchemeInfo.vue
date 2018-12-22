<template>
  <div class="scheme-info">
    <h1>我的方案</h1>
    <el-row :gutter="12">
      <el-col :span=" 8">
        <el-card shadow="never">
          <div class="card-inner-1">方案类型</div>
          <div class="card-inner-2">{{ scheme.type == '0' ? '免费版' : '付费版' }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <div class="card-inner-1">购买方案</div>
          <div class="card-inner-2">{{ scheme.type == '0' ? '免费试用' : '付费使用' }}</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">
          <div class="card-inner-1">到期时间</div>
          <div class="card-inner-2">{{ scheme.expireDate == '' ? '2019-01-26' : scheme.expireDate }}</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h1>使用余量</h1> 
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" width="50" label=""></el-table-column>
          <el-table-column  prop="schemeName" label="功能名称" align="left">
          </el-table-column>
          <el-table-column prop="times" label="剩余次数"  width="100" align="center">
          </el-table-column>
           <el-table-column  prop="" label="" align="center" width="100">
             <template slot-scope="scope">
              <el-button size="mini" type="primary" v-if="identity != 'vip-user'"
                @click="handleBuy(scope.$index, scope.row)">购买</el-button>
          </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <h1>方案详情</h1> 
        <div class="scheme-detail">内容施工中...</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SchemeInfo',
  data() {
    return {
      identity: 'non-visiter'
    }
  },
  computed: {
    tableData: {
      get() {
        return this.scheme.rest.map((item) => {
          switch(item.type) {
            case 1: return { schemeName: '分词', times: item.times };
            case 2: return { schemeName: '统计词频', times: item.times };
            case 3: return { schemeName: '关键字提取', times: item.times };
            case 4: return { schemeName: '情感分析', times: item.times };
            case 5: return { schemeName: '评分', times: item.times };
          }
        });
      }
    }
  },
  props: {
    scheme: Object
  },
  // watch: {
  //   scheme(val) {
  //     console.log(val);
  //     this.tableData = val.map((item) => {
  //       switch(item.type) {
  //         case 1: return { schemeName: '分词', times: item.times };
  //         case 2: return { schemeName: '统计词频', times: item.times };
  //         case 3: return { schemeName: '关键字提取', times: item.times };
  //         case 4: return { schemeName: '情感分析', times: item.times };
  //         case 5: return { schemeName: '评分', times: item.times };
  //       }
  //     });
  //   }
  // }
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
.scheme-detail {
  padding-top: 100px;
  padding-bottom: 100px;
  font: 20px Extra large;
  color: #C0C4CC;
  text-align: center;
  border-top: 1px solid #EBEEF5;
}
</style>

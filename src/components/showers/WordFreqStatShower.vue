<template>
  <dir class="word-freq-stat-shower">
    <!-- <el-alert v-if="f_words" title="最多显示10条" type="info"></el-alert> -->
    <ve-bar 
      :data="chartData" :extend="extend" 
      :settings="chartSettings"
      :colors="colors"
      v-if="f_words"></ve-bar>
  </dir>
</template>

<script>
export default {
  name: 'WordFreqStatShower',
  props: {
    f_words: Array
  },
  data () {
    this.extend = {};
    this.chartSettings = {};
    this.colors = [ '#61a0a8' ];
    return {
      chartData: {}
    }
  },
  watch: {
    f_words(val) {
      var t = val.slice();
      t = t.sort(compare('count'));
      t = t.slice(0, 20);
      this.extend = {
        series: {
          label: { show: true, position: "right" }
        }
      }
      this.chartSettings = {
        dimension: ['word'],
        metrics: ['count'],
        dataOrder: {
          label: 'count',
          order: 'desc'
        }
      }
      this.chartData = {
        columns: ['word', 'count'],
        rows: t
      }
    }
  }
}
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}
</script>

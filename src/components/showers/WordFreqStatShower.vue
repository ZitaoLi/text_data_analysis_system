<template>
  <dir class="word-freq-stat-shower">
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
        rows: val
      }
    }
  }
}
</script>

<template>
  <div class="key-work-extract-shower" ref="demo">
    <ve-wordcloud :data="chartData" :events="chartEvents"></ve-wordcloud>
  </div>
</template>

<script>
export default {
  name: 'KeyWrodExtractShower',
  props: {
    k_words: Array
  },
  data () {
    return {
      colors: ['#61a0a8'],
      chartData: {
        columns: ['word', 'count'],
        rows: []
      },
      chartEvents: {
        click: function(e) {
          console.log(e);
        }
      }
    }
  },
  watch: {
    k_words(val) {
     this.chartData.rows = val;
    }
  },
  mounted() {
    console.log('KeyWrodExtractShower');
  },
  destroyed() {
    console.log('KeyWrodExtractShower destroyed');
  }
}
</script>

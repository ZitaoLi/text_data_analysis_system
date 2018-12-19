<template>
  <div class="key-work-extract-shower">
    <ve-wordcloud 
      :data="chartData" 
      v-if="words"></ve-wordcloud>
  </div>
</template>

<script>
export default {
  name: 'KeyWrodExtractShower',
  props: {
    words: Array
  },
  data () {
    this.colors = ['#61a0a8']
    return {
      chartData: {}
    }
  },
  watch: {
    words() {
      this.chartData = {
        columns: ['word', 'count'],
        rows: this.words
      }
    }
  }
}
</script>

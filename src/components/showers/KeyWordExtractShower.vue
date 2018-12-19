<template>
  <div class="key-work-extract-shower">
    <ve-wordcloud 
      :data="chartData" 
      v-if="k_words"></ve-wordcloud>
  </div>
</template>

<script>
export default {
  name: 'KeyWrodExtractShower',
  props: {
    k_words: Array
  },
  data () {
    this.colors = ['#61a0a8']
    return {
      chartData: {}
    }
  },
  watch: {
    k_words() {
      this.chartData = {
        columns: ['word', 'count'],
        rows: this.k_words
      }
    }
  }
}
</script>

<template>
  <div class="word-split-shower">
    <div class="slice" v-for="(word, index) in words" :key="index" :style="{backgroundColor: word.b_color}">
      {{ word.pos }}. {{ word.word }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'WordSplitShower',
  data() {
    return {
      words: []
    }
  },
  props: {
    s_words: Array
  },
  watch: {
    s_words(val) {
      console.log(val);
      this.words = val.map(wordFilter).filter((x) => x);
    },
    words(val) {
      console.log(val);
    }
  }
}
function wordFilter(entity) {
  switch (entity.pos) {
    case 'n': return {pos: 'n', word: entity.word, b_color: '#67C23A'};
    case 'nr': return {pos: 'nr', word: entity.word, b_color: '#539d2f'};
    case 'nz': return {pos: 'nz', word: entity.word, b_color: '#b4e29d'};
    case 'a': return {pos: 'a', word: entity.word, b_color: '#F56C6C'};
    case 'c': return {pos: 'c', word: entity.word};
    case 'f': return {pos: 'f', word: entity.word};
    case 'ns': return {pos: 'ns', word: entity.word};
    case 'v': return {pos: 'v', word: entity.word, b_color: '#ff66ff'};
    case 'ad': return {pos: 'ad', word: entity.word, b_color: '#409EFF'};
    case 'r': return {pos: 'r', word: entity.word};
    case 'xc': return {pos: 'xc', word: entity.word};
    case 't': return {pos: 't', word: entity.word};
    case 'nw': return {pos: 'nw', word: entity.word, b_color: '#34621d'};
    case 'vn': return {pos: 'vn', word: entity.word, b_color: '#ff66ff'};
    case 'd': return {pos: 'd', word: entity.word};
    case 'p': return {pos: 'p', word: entity.word};
    case 'w': return {pos: 'w', word: entity.word};
    default: return false;
  }
}
</script>

<style scoped>
.slice {
  min-height: 20px;
  border-radius: 6px;
  margin: 2px;
  padding: 2px 6px;
  float: left;
  font: 13px Extra Small;
  background-color: #E6A23C;
}
</style>

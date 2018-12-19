<template>
  <div class="result">
    <div class="run-btn-outer">
      <el-button id="run-btn" :loading="progress" @click="handleClick">Run</el-button>
    </div>
    <div class="shower">
      <word-split-shower v-if="type == 1"></word-split-shower>
      <word-freq-stat-shower v-if="type == 2" :f_words="f_words"></word-freq-stat-shower>
      <key-word-extract-shower v-if="type == 3" :words="words"></key-word-extract-shower>
      <emotion-analysis-shower v-if="type == 4" :emotions="emotions"></emotion-analysis-shower>
      <score-shower v-if="type == 5"></score-shower>
    </div>
  </div>
</template>

<script>
import EmotionAnalysisShower from '@/components/showers/EmotionAnalysisShower.vue'
import KeyWordExtractShower from '@/components/showers/KeyWordExtractShower.vue'
import ScoreShower from '@/components/showers/ScoreShower.vue'
import WordFreqStatShower from '@/components/showers/WordFreqStatShower.vue'
import WordSplitShower from '@/components/showers/WordSplitShower.vue'
export default {
  name: 'Result',
  props: {
    type: String,
  },
  components: {
    EmotionAnalysisShower,
    KeyWordExtractShower,
    ScoreShower,
    WordFreqStatShower,
    WordSplitShower
  },
  data() {
    return {
      progress: false,
      emotions: [],
      words: [],
      f_words: []
    }
  },
  methods: {
    handleClick() {
      this.progress = true;
      setTimeout(() => {
        this.progress = false;
      }, 1000);

      if (this.type == 1) {
        console.log(this.type);
      } else if (this.type == 2) {
        this.f_words = [];
        this.f_words = [
          { word: 'hello', count: 3 }, 
          { word: 'word', count: 21 }, 
          { word: '!', count: 10 },
          { word: '66', count: 56 },
          { word: 'h', count: 11 },
          { word: 'gg', count: 23 },
        ];
      } else if (this.type == 3) {
        this.words = [];
        this.words = [
          { word: 'visualMap', count: 2 }, 
          { word: 'continuous', count: 1 }, 
          { word: 'contoller', count: 1 }
        ];
      } else if (this.type == 4) {
        this.emotions = [];
        this.emotions = [ 
          { id: '1', content: 'this is fuker', type: 1 },
          { id: '2', content: 'this is shiter', type: 0 },
          { id: '3', content: 'this is damner', type: 1 }, 
          { id: '4', content: 'this is dogger', type: 1 }, 
        ];
      }  else if (this.type == 5) {
        console.log(this.type);
      } else {
        console.log(this.type);
      }
    }
  }
}
</script>

<style scoped>
.shower {
  /* width: 99%; border: 1px dashed #d9d9d9; border-radius: 6px; */
  margin-top: 22px;
}
.run-btn-outer {
  zoom:1;
}
.run-btn-outer::after {
  clear:both;content:'.';display:block;width: 0;height: 0;visibility:hidden;
}
#run-btn {
  float: left;
}
</style>

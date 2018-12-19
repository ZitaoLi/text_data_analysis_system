<template>
  <div class="result">
    <div class="run-btn-outer">
      <el-button id="run-btn" :loading="progress" @click="handleClick">Run</el-button>
    </div>
    <div class="shower">
      <word-split-shower v-if="type == 1"></word-split-shower>
      <word-freq-stat-shower v-if="type == 2" :f_words="f_words"></word-freq-stat-shower>
      <key-word-extract-shower v-if="type == 3" :k_words="k_words"></key-word-extract-shower>
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
import WordPrefStatService from '@/services/WordPrefStatService'
import EmotionAnalysisService from '@/services/EmotionAnalysisService'
// import WordSplitService from '@/services/WordSplitService'
// import ScoreService from '@/services/ScoreService'
import KeyWordExtractService from '@/services/KeyWordExtractService'
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
      k_words: [],
      f_words: []
    }
  },
  methods: {
    handleClick() {
      // this.axios.post('http://localhost:5000/key_word_extract_service')
      // .then(function(response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      this.progress = true;
      setTimeout(() => {
        this.progress = false;
      }, 1000);

      if (this.type == 1) {
        console.log(this.type);
      } else if (this.type == 2) {
        this.f_words = [];
        this.f_words = WordPrefStatService.getData();
      } else if (this.type == 3) {
        this.k_words = [];
        this.k_words = KeyWordExtractService.getData();
      } else if (this.type == 4) {
        this.emotions = [];
        this.emotions = EmotionAnalysisService.getData();
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

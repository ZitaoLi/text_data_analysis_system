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
      <score-shower v-if="type == 5" :scores="scores"></score-shower>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import EmotionAnalysisShower from '@/components/showers/EmotionAnalysisShower.vue'
import KeyWordExtractShower from '@/components/showers/KeyWordExtractShower.vue'
import ScoreShower from '@/components/showers/ScoreShower.vue'
import WordFreqStatShower from '@/components/showers/WordFreqStatShower.vue'
import WordSplitShower from '@/components/showers/WordSplitShower.vue'
// import WordPrefStatService from '@/services/WordPrefStatService'
// import EmotionAnalysisService from '@/services/EmotionAnalysisService'
// import WordSplitService from '@/services/WordSplitService'
// import ScoreService from '@/services/ScoreService'
// import KeyWordExtractService from '@/services/KeyWordExtractService'
export default {
  name: 'Result',
  props: {
    type: String,
    textInput: String
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
      commnets: [],
      progress: false,
      emotions: [],
      k_words: [],
      f_words: [],
      s_words: [],
      scores: []
    }
  },
  mounted() {
    console.log(this.type);
  },
  methods: {
    handleClick() {
      this.comments = preHandleComments(this.textInput);
      this.progress = true;
      if (this.type == 1) {
        console.log(this.type);
      } else if (this.type == 2) {
        this.axios.post('/word_freq_stat_service')
          .then((response) => {
            console.log(response);
            this.f_words = response.data;
            this.progress = false;
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (this.type == 3) {
        this.axios.post('/comment_analysis/extractKeyWord')
          .then((response) => {
            console.log(response.data);
            this.k_words = response.data;
            this.progress = false;
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (this.type == 4) {
        this.axios.post('/comment_analysis/classification', this.comments, {
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': 'Bearer ' + this.$store.getters.user.token,
          }
        })
          .then((response) => {
            console.log(response.data);
            this.emotions = response.data;
            this.progress = false;
          })
          .catch((error) => {
            console.log(error);
          });
      }  else if (this.type == 5) {
        console.log(this.type);
      } else {
        console.log(this.type);
      }
    }
  }
}
function preHandleComments(str) {
  var lines = str.split(/[\n]/); // 按换行符分割
  var comments = []
  for (let i = 0; i < lines.length; i++) {
    comments.push({ 'comment': lines[i] });
  }
  return comments;
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

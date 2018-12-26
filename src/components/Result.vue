<template>
  <div class="result">
    <div class="run-btn-outer">
      <el-button id="run-btn" :loading="progress" @click="handleClick">运行</el-button>
      <el-button id="run-btn" :loading="progress" v-if="show_download">下载</el-button>
    </div>
    <div class="shower">
      <word-split-shower v-if="type == 1" :s_words="s_words"></word-split-shower>
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
      comments: [],
      progress: false,
      show_download: false,
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
      this.show_download = false;
      // 分词
      if (this.type == 1) {
        console.log(this.type);
        this.axios.post('/comment_analysis/text2words', this.comments, {
          headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + this.$store.getters.user.token,
          }
        }).then((response) => {
          console.log(response.data);
          if (response.data.code == '200') {
            this.s_words = response.data.words;
            this.progress = false;
            this.show_download = true;
          } else {
            this.progress = false;
            alert('failure');
          }
        }).catch((error) => {
          console.log(error);
        });
      // 词频统计
      } else if (this.type == 2) {
        this.axios.post('/comment_analysis/keywordsFrequencies', this.comments, {
          headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + this.$store.getters.user.token,
          }
        }).then((response) => {
          console.log(response);
          if (response.data.code == '200') {
            this.f_words = response.data.words;
            this.progress = false;
            this.show_download = true;
          } else {
            this.progress = false;
            alert('failure');
          }
        }).catch((error) => {
          console.log(error);
        });
      // 关键字提取
      } else if (this.type == 3) {
        this.axios.post('/comment_analysis/extractKeywords', this.comments, {
          headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + this.$store.getters.user.token,
          }
        }).then((response) => {
          console.log(response.data);
          if (response.data.code == '200') {
            this.k_words = response.data.keywords;
            this.progress = false;
            this.show_download = true;
          } else {
            this.progress = false;
            alert('failure');
          }
        }).catch((error) => {
          console.log(error);
        });
      // 情感分析
      } else if (this.type == 4) {
        this.axios.post('/comment_analysis/classification', this.comments, {
          headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + this.$store.getters.user.token,
          }
        }).then((response) => {
          console.log(response.data);
          this.emotions = response.data;
          this.progress = false;
          this.show_download = true;
        }).catch((error) => {
          console.log(error);
        });
      // 评分
      }  else if (this.type == 5) {
        console.log(this.type);
        this.axios.post('/comment_analysis/evaluate', this.comments, {
          headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + this.$store.getters.user.token,
          }
        }).then((response) => {
          console.log(response.data);
          if (response.data.code == '200') {
            setTimeout(() => {
              this.scores = response.data.comments;
              this.progress = false;
              this.show_download = true;
            }, 2000);
            // this.scores = response.data.comments;
            // this.progress = false;
            // this.show_download = true;
          } else {
            this.progress = false;
            alert('failure');
          }
        }).catch((error) => {
          console.log(error);
        });
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

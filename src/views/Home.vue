<template>
  <div class="home">
    <el-row>
      <el-col :span="16" :offset="4">
          <div style="margin-bottom: 50px;">
            <h1>{{ title }}</h1>
            <el-tabs :default-active="1">
              <el-tab-pane label="File Upload" index="1">
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
              </el-tab-pane>
              <el-tab-pane class="upload-demo" label="Text Upload" index="2">
                <el-input
                  type="textarea"
                  :rows="8"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div>
            <el-tabs type="card" @tab-click="handleClick">
              <el-tab-pane label="分词" name="1"><result type="1"></result></el-tab-pane>
              <el-tab-pane label="词频统计" name="2"><result type="2"></result></el-tab-pane>
              <el-tab-pane label="关键字提取" name="3"><result type="3"></result></el-tab-pane>
              <el-tab-pane label="情感分析" name="4"><result type="4"></result></el-tab-pane>
              <el-tab-pane label="评分" name="5"><result type="5"></result></el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Result from '@/components/Result.vue'
export default {
  data() {
    return {
      textarea: '',
      title: 'HELLO WORLD',
    };
  },
  components: {
    Result
  },
  methods: {
    handleClick(e) {
      console.log(e.name);
    }
  }
}
</script>

<style>
.upload-demo {
  margin-top: 22px;
}
</style>

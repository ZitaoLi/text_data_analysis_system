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
              <el-tab-pane label="Text Upload" index="2">
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
            <!-- <el-row>
              <el-col :span="3"><el-button class="grid-content">默认按钮</el-button></el-col>
              <el-col :span="3"><el-button style="height: 100px; width: 100%">默认按钮</el-button></el-col>
              <el-col :span="3"><el-button>默认按钮</el-button></el-col>
              <el-col :span="3"><el-button>默认按钮</el-button></el-col>
              <el-col :span="3"><el-button>默认按钮</el-button></el-col>
            </el-row> -->
            <el-tabs type="card">
              <el-tab-pane label="分词"><result title="分词"></result></el-tab-pane>
              <el-tab-pane label="词频统计"><result title="词频统计"></result></el-tab-pane>
              <el-tab-pane label="关键字提取"><result title="关键字提取"></result></el-tab-pane>
              <el-tab-pane label="情感分析"><result title="情感分析"></result></el-tab-pane>
              <el-tab-pane label="评分"><result title="评分"></result></el-tab-pane>
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
  }
}
</script>

<style>
/* .upload-demo {
  background-color: gray;
} */
</style>

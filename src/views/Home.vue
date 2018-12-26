<template>
  <div class="home">
    <el-row>
      <el-col :span="16" :offset="4">
          <div style="margin-bottom: 50px;">
            <h1 class="title">{{ title }}</h1>
            <div class="tip">请在下方选择输入数据的方式</div>
            <el-alert title="不同的影评之间使用换行符分隔" type="info"></el-alert>
            <el-tabs :default-active="1">
              <el-tab-pane label=文件上传 index="1">
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传txt文件,不同的影评之间使用换行符分隔</div>
              </el-upload>
              </el-tab-pane>
              <el-tab-pane class="upload-demo" label="文本上传" index="2">
                <el-input
                  type="textarea"
                  :rows="8"
                  placeholder="请输入内容"
                  v-model="textInput">
                </el-input>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="tip">请在下方选择处理数据的方式</div>
          <div>
            <el-tabs type="card" @tab-click="handleClick">
              <el-tab-pane label="分词" name="1" v-if="functionsVector[0]"></el-tab-pane>
              <el-tab-pane label="词频统计" name="2" v-if="functionsVector[1]"></el-tab-pane>
              <el-tab-pane label="关键字提取" name="3" v-if="functionsVector[2]"></el-tab-pane>
              <el-tab-pane label="情感分析" name="4" v-if="functionsVector[3]"></el-tab-pane>
              <el-tab-pane label="评分" name="5" v-if="functionsVector[4]"></el-tab-pane>
            </el-tabs>
            <result :type="handleType" :textInput="textInput" v-if="handleType"></result>
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
      value4: 2,
      text: '',
      textInput: '',
      title: '影评数据分析系统',
      handleType: '',
      functionsVector: [ 0, 0, 1, 1, 1 ],
    };
  },
  components: {
    Result
  },
  mounted() {
    identifyUser(this);
  },
  computed: {
    identity: {
      get() {
        return this.$store.getters.user.identity;
      }
    }
  },
  watch: {
    identity() {
      identifyUser(this);
    }
  },
  methods: {
    handleClick(e) {
      console.log(e.name);
      this.handleType = e.name;
    },
    test() {
      console.log(this.comments);
      var parts = this.comments.split(/[\n]/); // 按换行符分割
      console.log(parts);
    }
  }
}
function identifyUser(self) {
  if (self.identity == 'visitor') {
    self.functionsVector = [ 0, 0, 1, 1, 1 ];
  } else if (self.identity == 'non-user') {
    self.functionsVector = [ 1, 1, 1, 1, 1 ];
  } else if (self.identity == 'vip-user') {
    self.functionsVector = [ 1, 1, 1, 1, 1 ];
  }
}
</script>

<style>
.title {
  margin-bottom: 22px;
}
.upload-demo {
  margin-top: 22px;
}
.tip {
  text-align: left;
  padding-top: 22px;
  margin-bottom: 10px;
  font: 13px Extra Small;
  color: #909399;
}
</style>
<template>
  <div class="user-info-form">
    <el-form ref="form" :model="form" label-width="128px" :label-position="labelPosition">
      <el-form-item  label="用户头像">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList2"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item  label="用户名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item  label="用户简介">
        <el-input type="textarea" v-model="form.userProfile" :rows="3"></el-input>
      </el-form-item>
      <el-form-item  label="公司/学校">
        <el-input v-model="form.organization"></el-input>
      </el-form-item>
      <el-form-item  label="职位/学历">
        <el-input v-model="form.position"></el-input>
      </el-form-item>
      <el-form-item  label="所在城市">
        <el-input v-model="form.city"></el-input>
      </el-form-item>
      <el-form-item  label="生日">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.birthdate" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserInfoForm',
  data() {
    return {
      fileList2: [
        {
          name: 'food.jpeg', 
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ],
      labelPosition: 'left',
      form: {
        userName: '',
        password: '',
        userProfile: '',
        organization: '',
        position: '',
        city: '',
        birthdate: ''
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>
.user-info-form {
  margin-top: 22px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

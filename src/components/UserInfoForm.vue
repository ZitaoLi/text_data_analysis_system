<template>
  <div class="user-info-form">
    <el-form ref="form" :model="form" label-width="128px" :label-position="labelPosition">
      <el-form-item  label="用户头像">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <!-- <el-form-item  label="用户头像">
        <img class="user-header-circle images" :src="form.userHeader" alt=""/>
        <el-button size="small" type="primary">点击上传</el-button>
      </el-form-item> -->
      <el-form-item  label="用户名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item  label="用户简介">
        <el-input type="textarea" v-model="form.profile" :rows="3"></el-input>
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
      <el-form-item  label="">
        <el-button style="float: left; color: #409EFF; border-color: #409EFF;" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserInfoForm',
  data() {
    return {
      imageUrl: '',
      labelPosition: 'left',
      form: {
        userName: '',
        userHeader: '',
        profile: '',
        organization: '',
        position: '',
        city: '',
        birthdate: ''
      }
    }
  },
  props: {
    user: Object
  },
  created() {
      console.log('user-info-form created');
      this.form.userName = this.user.userName;
      this.form.profile = this.user.profile;
      this.form.organization = this.user.organization;
      this.form.position = this.user.position;
      this.form.city = this.user.city;
      this.form.birthdate = this.user.birthdate;
  },
  watch: {
    user(val) {
      console.log('user-info-form watch user');
      this.form.userName = val.userName;
      this.form.profile = val.profile;
      this.form.organization = val.organization;
      this.form.position = val.position;
      this.form.city = val.city;
      this.form.birthdate = val.birthdate;
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    save() {
      alert('save');
    }
  }
}
</script>

<style scoped>
.user-header-circle {
  width: 100px;
  height: 100px;
  /* border-radius: 50%; */
  float: left;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  float: left;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>


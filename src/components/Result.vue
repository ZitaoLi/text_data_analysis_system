<template>
  <div class="result">
    <el-button style="float: left; display: inline-block;" :loading="progress" @click="handleClick">Run</el-button>
    <h1>{{ title }}</h1>
    <div style="width:99%; height: 100px ;border: 1px dashed #d9d9d9; border-radius: 6px;"></div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    title: String,
  },
  data() {
    return {
      progress: false
    }
  },
  methods: {
    handleClick() {
      this.progress = true;
      setTimeout(() => {
        this.progress = false;
      }, 1000);
    }
  }
}
</script>
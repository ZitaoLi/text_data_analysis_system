<template>
  <div class="score-shower">
    <el-table v-if="scores" :data="scores" style="width: 100%" 
      :row-class-name="tableRowClassName">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="comment" label="评论内容" :show-overflow-tooltip="true">
      </el-table-column>
      <el-table-column label="评分" width="200px" prop="score">
        <template slot-scope="scope">
          <el-rate 
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            v-model.number="scope.row.score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            @click="handleClick(scope.$index, scope.row)"></el-rate>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ScoreShower',
  data() {
    return {
      score: [
        { comment: 'this is a goood movie', score: 1.4 },
        { comment: 'this is a goood movie', score: 2.5 },
        { comment: 'this is a goood movie', score: 4.6 },
      ]
    }
  },
  props: {
    scores: Array
  },
  watch: {
    scores(val) {
      // val.map((item) => {
      //   if (typeof item.score == 'string') {
      //     item.score = parseFloat(item.score);
      //   }
      // });
      console.log(val);
      val[0].score = 4.0;
      val[1].score = 2.0;
    }
  },
  methods: {
    /* eslint-disable */
    tableRowClassName({row, rowIndex}) {
      switch (row.star) {
        case 1: return 'star-1';break;
        case 2: return 'star-2'; break;
        case 3: return 'star-3'; break;
        case 4: return 'star-4'; break;
        case 5: return 'star-5'; break;
      }
    },
    handleClick(index, row) {
      console.log(index, row);
    },
  }
}
</script>

<style>
.el-table .star-1 {
  /* background: rgb(234, 252, 225); */
}
.el-table .star-2 {
  /* background: rgb(234, 252, 225); */
}
.el-table .star-3 {
  /* background: rgb(234, 252, 225); */
}
.el-table .star-4 {
  /* background: rgb(234, 252, 225); */
}
.el-table .star-5 {
  /* background: rgb(234, 252, 225); */
}
</style>

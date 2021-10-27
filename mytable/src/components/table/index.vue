<template>
  <div>
    <el-table :data="List" style="width: 100%">
      <el-table-column prop="count" label="序号" width="180"> </el-table-column>
      <el-table-column prop="posation" label="职位" width="180">
      </el-table-column>
      <el-table-column prop="job" label="关联排班计划"> </el-table-column>
      <el-table-column v-if="showTime" prop="time" label="值班时间">
      </el-table-column>
      <el-table-column prop="plan" label="值班情况"> </el-table-column>
      <el-table-column prop="person" label="值班人员"> </el-table-column>
      <el-table-column prop="name" label="查岗人员"> </el-table-column>
      <el-table-column prop="inspect" label="查岗时间"> </el-table-column>
      <el-table-column prop="condition" label="特殊情况记录"> </el-table-column>
      <el-table-column label="操作">
        <button>修改</button>
        <button>删除</button>
      </el-table-column>
    </el-table>
    <el-button @click="changeShowData = !changeShowData">显示信息</el-button>
    <ShowWhat :changeShowData="changeShowData"></ShowWhat>
  </div>
</template>

<script>
import ShowWhat from '@/components/showWhat/index.vue'
export default {
  name: 'Index',
  components: {
    ShowWhat
  },
  data () {
    return {
      List: [],
      showTime: true,
      changeShowData: false
    }
  },
  created () {
    this.getTableData()
  },

  methods: {
    getTableData () {
      this.showTime = this.$store.state.showTime
      this.List = this.$store.state.tableData
    },
    closeShowWhatData () {
      this.getTableData()
      this.changeShowData = !this.changeShowData
    }

  }

}
</script>

<style lang="less">
</style>

<template>
  <div class="block">
    <el-pagination
      class="page"
      layout="prev, pager, next"
      :total="50"
      page-size="10"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      params: {
        pagesize: 10
      }
    }
  }
}
</script>

<style lang="less">
.block {
  position: relative;
}
.block .page {
  position: absolute;
  right: 10px;
}
</style>

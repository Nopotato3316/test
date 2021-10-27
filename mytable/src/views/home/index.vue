<template>
  <div class="app">
    <Head></Head>
    <Table></Table>
    <Dialog :isShow="isShow"></Dialog>
    <TE :isShowTE="isShowTE"></TE>
  </div>
</template>

<script>
import Head from '@/components/head/index.vue'
import Table from '@/components/table/index.vue'
import Dialog from '@/components/dialog/index.vue'
import TE from '@/components/isShowData/index.vue'
export default {
  name: 'Home',
  components: {
    Head,
    Table,
    Dialog,
    TE
  },
  data () {
    return {
      isShow: false,
      isShowTE: false,
      showWhat: [
        {
          showTime: true
        }
      ]
    }
  },
  methods: {
    close () {
      this.isShow = !this.isShow
    },
    addTableData () {
      this.close()
    },
    isShowData () {
      this.isShowTE = !this.isShowTE
    }

  }
}
</script>
<style lang="less">
.app {
  background-color: #bdf;
}
</style>

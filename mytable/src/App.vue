<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  components: {

  },
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    const baseUrl = 'https://www.fastmock.site/mock/80fe7af4a9e42c275b9be24b29e2c6e3/table'
    axios.get(`${baseUrl}/table`).then(({ data }) => {
      const res = data.data.tableData
      this.$store.state.tableData.push(...res)
    })
  },
  methods: {
    addTableData () {
      this.isShow = !this.isShow
    },
    close () {
      this.isShow = false
    }
  }
}
</script>

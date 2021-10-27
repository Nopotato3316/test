<template>
  <div class="head" ref="tabbar">
    <el-button type="info" @click="isShowData">信息按钮</el-button>
    <div><i class="iconfont">&#xe61e;</i></div>
    <div class="user">用户名：{{ userName }}</div>
    <div>
      <div class="block">
        <span class="demonstration">有默认值</span>
        <el-color-picker v-model="color1" @change="change"></el-color-picker>
      </div>
    </div>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-button :class="value" @click="addTableData">新增数据</el-button>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      userName: '张三',
      options: [
        {
          value: 'add',
          label: '默认主题'
        },
        {
          value: 'c1',
          label: '主题一'
        },
        {
          value: 'c2',
          label: '主题二'
        }
      ],
      value: 'add',
      color1: '#409EFF',
      changeShowData: false
    }
  },
  created () {
    this.getMessage()
  },
  methods: {
    addTableData () {
      this.$parent.addTableData()
    },
    change () {
      this.$refs.tabbar.style.backgroundColor = this.color1
    },
    isShowData () {
      this.$parent.isShowData()
    },
    getMessage () {
      this.userName = this.$store.state.userName
    },
    showWhatData () {
      this.changeShowData = !this.changeShowData
    },
    closeShowWhatData () {
      this.changeShowData = false
    }
  }

}
</script>

<style lang="less">
.head {
  height: 50px;
  line-height: 50px;
  display: flex;
  flex-direction: row;
}
.user {
  flex: 1;
}
.add {
  background-color: #bdf;
}
.c1 {
  background-color: #dfb;
}
.c2 {
  background-color: #fdb;
}
</style>

<template>
  <el-dialog title="提示" :visible.sync="changeShowData" width="30%">
    <div>
      <span>是否显示时间：</span>
      <el-switch
        v-model="showTime"
        active-color="#13ce66"
        inactive-color="#ff4949"
        :active-value="true"
        :inactive-value="false"
      >
      </el-switch>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="changeShow">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'ShowWhat',
  props: {
    changeShowData: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showTime: true
    }
  },
  created () {
    this.getShowWhatData()
  },
  methods: {
    getShowWhatData () {
      this.showTime = this.$store.state.showTime
    },
    close () {
      this.$parent.closeShowWhatData()
    },
    changeShow () {
      console.log(this.showTime)
      this.$store.state.showTime = this.showTime
      this.close()
    }
  }
}
</script>

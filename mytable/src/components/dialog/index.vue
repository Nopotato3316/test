<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="isShow"
      :show-close="false"
      @open="getIndex"
      :close-on-click-modal="false"
    >
      <!-- 详细信息输入表单 -->
      <div>
        <el-form>
          <el-form-item label="序号">
            <el-input v-model="form.count"></el-input>
          </el-form-item>
          <el-form-item label="岗位名称">
            <el-input v-model="form.posation"></el-input>
          </el-form-item>
          <el-form-item label="关联计划排班">
            <el-input v-model="form.job"></el-input>
          </el-form-item>
          <el-form-item label="值班时间">
            <el-date-picker
              v-model="form.time"
              type="datetimerange"
              range-separator="--"
              value-format="yyyy/MM/dd HH:mm:ss"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="值班情况">
            <el-input v-model="form.plan"></el-input>
          </el-form-item>
          <el-form-item label="值班人员">
            <el-input v-model="form.person"></el-input>
          </el-form-item>
          <el-form-item label="查岗人员">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="查岗时间">
            <el-date-picker
              v-model="form.inspect"
              type="datetime"
              value-format="yyyy/MM/dd HH:mm:ss"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="特殊情况记录">
            <el-input v-model="form.condition"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        count: 1,
        posation: '',
        job: '',
        time: '',
        plan: '',
        person: '',
        name: '',
        inspect: '',
        condition: ''
      },
      tableData: []
    }
  },
  methods: {
    close () {
      this.$parent.close()
    },
    submit () {
      this.$store.state.tableData.push(JSON.parse(JSON.stringify(this.form)))
      this.close()
    },
    getIndex () {
      this.form.count = this.$store.state.tableData.length + 1
    }
  }
}
</script>

<style lang="less">
</style>

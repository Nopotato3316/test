import Vue from 'vue'
import Vuex from 'vuex'
import Table from '../components/table/index.vue'
import My from '@/components/mytinymce/index.vue'
import ShowWhat from '@/components/showWhat/index.vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableData: [
      {
        count: 1,
        posation: '门卫',
        job: '排版计划名称',
        time: '2020/10/8 10:00 - 2020/10/8 20:00',
        plan: '正常',
        person: '查看',
        name: '张三',
        inspect: '2020/10/8 20:00',
        condition: '请假不在'
      }
    ],
    userName: '李四',
    showTime: true
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Table,
    My,
    ShowWhat
  }
})

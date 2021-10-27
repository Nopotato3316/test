<template>
  <div>
    <div v-html="value" class="message">{{ value }}</div>
    <div v-show="isShowTE">
      <Tinymce @changeName="changeName"></Tinymce>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/mytinymce/index.vue'
export default {
  name: 'TE',
  props: {
    isShowTE: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Tinymce
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    changeName (userName) {
      console.log(userName)
      this.value = userName
    }
  }
}
</script>

<style lang="less">
.message {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
}
</style>

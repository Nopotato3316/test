<template>
  <div>
    <form method="post" action="">
      <div for="value" id="tinymce-editor"></div>
    </form>
  </div>
</template>

<script>
import './tinymce.min'
import './themes/silver/theme.min'
import './langs/zh_CN.js'
import './icons/default/icons.min.js'
import './plugins/preview/plugin.min.js'
import './plugins/image/plugin.min.js'
import './plugins/link/plugin.min.js'
export default {
  name: 'My',
  components: {
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    tinymce.init({
      selector: '#tinymce-editor',
      language: 'zh_CN',
      // 菜单栏
      menubar: 'bar1 bar2',
      menu: {
        bar1: { title: '菜单栏1', items: 'copy paste' },
        bar2: { title: '菜单栏2', items: 'cut preview image' }
      },
      // 工具栏
      toolbar: 'undo redo preview image link',
      // 预览效果
      plugins: 'preview image link',
      setup: function (editor) {
        console.log(111)
        editor.on('change', editor.save())
      },
      init_instance_callback: (editor) => {
        editor.on('input', (e) => {
          this.$emit('changeName', e.target.innerHTML)
        })
      }

    })
  }

}
</script>
<style lang='less'>
@import url("./skins/ui/oxide/skin.min.css");
</style>

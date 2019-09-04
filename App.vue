<script>
  export default {
    onLaunch() {
      console.log('App Launch')
    },
    onShow() {
      console.log('App Show')
    },
    onHide() {
      console.log('App Hide')
    },
    onResize(res) {
      console.log(res.size.windowWidth, res.size.windowHeight) // 新的显示区域宽度和高度
    },
  }
</script>

<style>
    /*每个页面公共css */
    @import './styles/uni.css';
</style>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "../static/amaze/css/amazeui.css";
@import "../static/amaze/css/admin.css";
*{
  margin: 0px auto;
  padding: 0;
}
.el-container{
  width: 100%;
}
</style>

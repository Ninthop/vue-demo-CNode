<template>
  <div id="app">
    <all-header></all-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import AllHeader from '_c/Header'

export default {
  name: 'app',
  components: {
    AllHeader
  }
}
</script>

<style lang="stylus">

</style>

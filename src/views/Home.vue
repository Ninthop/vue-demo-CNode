<template>
  <div class="home">
    <home-header @refresh="refresh"></home-header>
    <home-content :list="list"></home-content>
    <home-page></home-page>
  </div>
</template>

<script>
import HomeHeader from '_c/Home/homeHeader.vue'
import HomeContent from '_c/Home/homeContent.vue'
import HomePage from '_c/Home/homePage.vue'
import * as api from '@/lib/api.js'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeContent,
    HomePage
  },
  data () {
    return {
      limit: 30,
      tab: "all",
      list: []
    }
  },
  methods: {
    getData () {
      api.getHomeInfo(
      {
        page: this.$store.state.page,
        limit: this.limit,
        tab: this.$store.state.tab
      })
      .then(res => {
        this.list = res.data
      })
    },
    refresh () {
      this.$store.state.page = 1
      this.$store.state.tab = 'all'
      this.getData()
    }
  },
  mounted () {
    this.getData()
  },
  watch: {
    //监听页数和tab变动，发送相应请求
    '$store.state.page' (newVal,oldVal) {
      api.getHomeInfo(
      {
        page: newVal,
        limit: this.limit,
        tab: this.$store.state.tab
      })
      .then(res => {
        this.list = res.data
      })
    },
    '$store.state.tab' (newVal,oldVal) {
      if (newVal == 'all')
      {
        this.tab = null
      }
      api.getHomeInfo(
      {
        page: this.$store.state.page,
        limit: this.limit,
        tab: newVal
      })
      .then(res => {
        this.list = res.data
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home
    width 70%
    min-width 85rem
    margin 5rem auto
    box-shadow .5rem 0rem 2rem #dfe6e9, -.5rem 0rem 2rem #dfe6e9
    @media all and (max-width 980px)
      min-width 10rem
      width 100%
      margin 0 auto
      box-shadow none
      margin-bottom 4rem
</style>

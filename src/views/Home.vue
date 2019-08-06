<template>
  <div class="home">
    <home-header @tabChange="tabChange"></home-header>
    <home-content :list="list" :tab="tab"></home-content>
    <home-page></home-page>
  </div>
</template>

<script>
import HomeHeader from '_c/Home/homeHeader.vue'
import HomeContent from '_c/Home/homeContent.vue'
import HomePage from '_c/Home/homePage.vue'
import axios from 'axios'
import {mapState} from 'vuex'
import * as util from '@/lib/util.js'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeContent,
    HomePage
  },
  data () {
    return {
      page: this.$store.state.page,
      limit: 30,
      tab: "all",
      list: [],
      store: {}
    }
  },
  methods: {
    tabChange (head) {
      if (head == 'all'){
        this.tab = null
      }else{
        this.tab = head
      }
      util.startLoading()
      axios
        .get('https://cnodejs.org/api/v1/topics',
        {
          params:{
            page: this.page,
            limit: this.limit,
            tab: this.tab
          }
        })
      .then(res => {
        this.list = res.data.data
        util.endLoading()
      })
      .catch(function (error) { 
        alert('连接失败，请刷新重试');
        util.endLoading()
      });
    }
  },
  mounted () {
    util.startLoading()
    axios
      .get('https://cnodejs.org/api/v1/topics',
      {
        params:{
          page: this.page,
          limit: this.limit,
          tab: this.tab
        }
      })
      .then(res => {
        this.list = res.data.data
        util.endLoading()
      })
      .catch(function (error) { 
        alert('连接失败，请刷新重试');
        util.endLoading()
      });
  },
  watch: {
    '$store.state.page' (newVal,oldVal) {
      util.startLoading()
      axios
      .get('https://cnodejs.org/api/v1/topics',
      {
        params:{
          page: newVal,
          limit: this.limit,
          tab: this.tab
        }
      })
      .then(res => {
        this.list = res.data.data
        util.endLoading()
      })
      .catch(function (error) { 
        alert('连接失败，请刷新重试');
        util.endLoading()
      });
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

<template>
    <div class="user">
        <topic-user-panel :userInfo="userInfo" class="user-content"></topic-user-panel>
        <topic-other-topic :userInfo="userInfo" class="user-content"></topic-other-topic>
        <topic-recent-reply :userInfo="userInfo" class="user-content"></topic-recent-reply>
    </div>
</template>

<script>
import TopicUserPanel from '_c/Topic/topicUserPanel.vue'
import TopicOtherTopic from '_c/Topic/topicOtherTopic.vue'
import TopicRecentReply from '_c/Topic/topicRecentReply.vue'
import axios from 'axios'
import { mapState } from 'vuex'
import * as util from '@/lib/util.js'

export default {
    name: 'User',
    components: {
        TopicUserPanel,
        TopicOtherTopic,
        TopicRecentReply
    },
    data () {
        return {
            userInfo: {}
        }
    },
    mounted () {
        util.startLoading()
        axios
            .get(`https://cnodejs.org/api/v1${this.$route.path}`)
            .then(res => {
                this.userInfo = res.data.data
                // console.log(this.userInfo)
                this.$store.state.loginname = this.userInfo.loginname
                util.endLoading()
            })
            .catch(function (error) { 
                alert('连接失败，请刷新重试1');
                util.endLoading()
            });
    },
    watch: {
        '$route.path' (newVal,oldVal) {
        if (newVal. match('user')) {
            util.startLoading()
            axios
                .get(`https://cnodejs.org/api/v1${newVal}`)
                .then(res => {
                    this.userInfo = res.data.data
                    // console.log(this.list.author.loginname)
                    this.$store.state.topicOrUser = true
                    util.endLoading()
                })
                .catch(function (error) { 
                    console.log('连接失败，请刷新重试2')
                    util.endLoading()
                })
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .user
        width 70%
        margin 5rem auto
        @media all and (max-width 768px)
            width 100%
        .user-content
            height 100%
            min-width 35rem
            max-width 100%
            margin-bottom 20px
            box-shadow .5rem 0rem 2rem #dfe6e9, -.5rem 0rem 2rem #dfe6e9
</style>

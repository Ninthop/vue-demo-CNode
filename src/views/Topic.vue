<template>
    <div class="topic">
        <div class="topic-left">
            <topic-header :list="list"></topic-header>
            <topic-content :list="list"></topic-content>
            <topic-reply :list="list"></topic-reply>
        </div>
        <div class="topic-right">
            <topic-user-panel :userInfo="userInfo" class="topic-right-content"></topic-user-panel>
            <topic-other-topic :userInfo="userInfo" class="topic-right-content"></topic-other-topic>
            <topic-recent-reply :userInfo="userInfo" class="topic-right-content"></topic-recent-reply>
        </div>
    </div>
</template>

<script>
import TopicHeader from '_c/Topic/topicHeader.vue'
import TopicContent from '_c/Topic/topicContent.vue'
import TopicOtherTopic from '_c/Topic/topicOtherTopic.vue'
import TopicRecentReply from '_c/Topic/topicRecentReply.vue'
import TopicReply from '_c/Topic/topicReply.vue'
import TopicUserPanel from '_c/Topic/topicUserPanel.vue'
import axios from 'axios'
import { mapState } from 'vuex'
import * as util from '@/lib/util.js'

export default {
    name: 'topic',
    components: {
        TopicHeader,
        TopicContent,
        TopicOtherTopic,
        TopicRecentReply,
        TopicReply,
        TopicUserPanel
    },
    data () {
        return {
            list: {},
            userInfo: {}
        }
    },
    mounted () {
        util.startLoading()
        axios
            .get(`https://cnodejs.org/api/v1/topic/${this.$store.state.id}`)
            .then(res => {
                this.list = res.data.data
                // console.log(this.list)
                util.endLoading()
            })
            .catch(function (error) { 
                alert('连接失败，请刷新重试');
                util.endLoading()
            });
        axios
            .get(`https://cnodejs.org/api/v1/user/${this.$store.state.loginname}`)
            .then(res => {
                this.userInfo = res.data.data
                // console.log(this.userInfo)
                util.endLoading()
            })
            .catch(function (error) { 
                alert('连接失败，请刷新重试');
                util.endLoading()
            });
    },
    watch: {
    '$route.path' (newVal,oldVal) {
        if (newVal. match('topic')) {
            util.startLoading()
            axios
                .get(`https://cnodejs.org/api/v1${newVal}`)
                .then(res => {
                    this.list = res.data.data
                    // console.log(this.list.author.loginname)
                    this.$store.state.loginname = this.list.author.loginname
                    util.endLoading()
                })
                .catch(function (error) { 
                    console.log('连接失败，请刷新重试')
                    util.endLoading()
                })
            }
        },
    '$store.state.loginname' (newVal,oldVal) {
        util.startLoading()
        axios
            .get(`https://cnodejs.org/api/v1/user/${newVal}`)
            .then(res => {
                this.userInfo = res.data.data
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
    .topic
        display flex
        flex-direction row
        width 90%
        margin 1.5rem auto
        max-width 1400px
        min-height 20rem
        @media all and (max-width 980px)
            width 100%
            margin 0
        .topic-left
            padding 0 0 .1rem 0
            width 80%
            box-shadow .5rem 0rem 2rem #dfe6e9, -.5rem 0rem 2rem #dfe6e9
            @media all and (max-width 980px)
                width 100%
                box-shadow none
        .topic-right
            display flex
            flex-direction column
            margin-left 2%
            height 100%
            @media all and (max-width 980px)
                display none
                position relative
            .topic-right-content
                height 100%
                min-width 35rem
                max-width 35rem
                margin-bottom 20px
                box-shadow .5rem 0rem 2rem #dfe6e9, -.5rem 0rem 2rem #dfe6e9
</style>

<template>
    <div class="other">
        <div class="other-head">作者其他话题</div>
        <div class="divider"></div>
        <div class="other-content">
            <div class="other-title" 
                v-for="item of userInfo.recent_topics" 
                :key="item.id"
                @click="changeId(item.id, item.author.loginname)"
            >
                <span class="other-title user-title">
                    <span class="title">{{ item.title }}</span>
                    <span class="user-right" v-if="topicOrUser">
                        <span>{{ item.last_reply_at | formatTime }}</span>
                    </span>
                </span>
                <div class="divider-user" v-if="topicOrUser"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'TopicOtherTopic',
    props: {
        userInfo: Object
    },
    methods: {
        changeId (id, name) {
            this.$store.dispatch('changeId', id)
            this.$store.dispatch('changeName', name)
            this.$router.push({path: '/topic/' + id})
            this.$store.dispatch('changeCss', false)
            // console.log(id)
            // console.log(name)
        }
    },
    computed: {
        topicOrUser () {
            return this.$store.state.topicOrUser
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import ('~_s/minins.styl')
    .other
        margin-top 1.5rem
        .other-head
            padding 2rem
            font-size 1.4rem
            font-weight bold 
        .divider
            height .1rem
            border-bottom .1rem solid lightgray
            margin 0 2rem
        .other-content
            padding 1rem 2rem
            // border .1rem solid gray
            .other-title
                cursor pointer
                line-height 2.5rem
                font-size 1.3rem
                color #778087
                ellipsis()
                transition 240ms
                &:hover
                    text-decoration underline
                    font-size 1.6rem
                    padding-bottom 0.7rem
            .divider-user
                height .1rem
                border-bottom .1rem solid lightgray
                margin 1rem
            .title
                ellipsis()
        .user-title
            display flex
            align-items center
            .user-right
                flex 1
                display flex
                flex-direction row
                align-items center
                justify-content flex-end
                span
                    margin-right 2rem
</style>

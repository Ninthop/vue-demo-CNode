<template>
    <div class="recent">
        <div class="recent-head">作者参与话题</div>
        <div class="divider"></div>
        <div class="recent-content">
            <div class="recent-title" 
                v-for="item of userInfo.recent_replies" 
                :key="item.id"
                @click="changeId(item.id, item.author.loginname)"
            >
                <span class="other-title user-title">
                    <img :src="item.author.avatar_url" alt="头像" class="author-head" v-if="topicOrUser">
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
    data () {
        return {
            topicOrUser: this.$store.state.topicOrUser
        }
    },
    methods: {
        changeId (id, name) {
            this.$store.dispatch('changeId', id)
            this.$store.dispatch('changeName', name)
            this.$router.push({path: '/dist/topic/' + id})
            // console.log(id)
            // console.log(name)
        }
    },
    watch: {
        '$store.state.topicOrUser' (newVal, oldVal) {
            return newVal
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import ('~_s/minins.styl')
    .recent
        margin-top 1.5rem
        .recent-head
            padding 2rem
            font-size 1.4rem
            font-weight bold 
        .divider
            height .1rem
            border-bottom .1rem solid lightgray
            margin 0 2rem
        .recent-content
            padding 1rem 2rem
            // border .1rem solid gray
            .recent-title
                cursor pointer
                line-height 2.5rem
                font-size 1.3rem
                color #778087
                ellipsis()
                transition 0.1s
                &:hover
                    text-decoration underline
                    font-size 1.5rem
                    padding-bottom 1rem
            .divider-user
                height .1rem
                border-bottom .1rem solid lightgray
                margin 1rem
            .author-head
                height 3rem
                width 3rem
                transition 0.2s
                margin-right 1rem
            .title
                ellipsis()
        .user-title
            display flex
            align-items center
            &:hover
                .author-head
                    height 5rem
                    width 5rem
            .user-right
                flex 1
                display flex
                flex-direction row
                align-items center
                justify-content flex-end
                span
                    margin-right 2rem
</style>

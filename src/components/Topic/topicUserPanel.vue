<template>
    <div class="user-panel">
        <div class="panel-head">作者</div>
        <div class="divider"></div>
        <div class="panel-content">
            <div class="panel-userInfo">
                <img :src="userInfo.avatar_url" alt="">
                <a class="name" @click="changeUser(userInfo.loginname)">{{ this.$store.state.loginname }}</a>
            </div>
            <div class="panel-score">积分：{{ userInfo.score }}</div>
            <div class="panel-github" v-if="userInfo.githubUsername">
                Github：<a :href="github" target="_blank">{{ userInfo.githubUsername }}</a>
            </div>
            <div class="panel-time">创建于：{{ userInfo.create_at | formatTime }}</div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'TopicUserPanel',
    props: {
        userInfo: Object
    },
    methods: {
        changeUser (name) {
            this.$store.dispatch('changeName', name)
            this.$store.dispatch('changeCss', true)
            this.$router.push({path: '/dist/user/' + name})
        }
    },
    computed: {
        github () {
            return `https://github.com/${this.userInfo.githubUsername}`
        }
    }
}
</script>

<style lang="stylus" scoped>
    .user-panel
        .panel-head
            padding 2rem
            font-size 1.4rem
            font-weight bold 
        .divider
            height .1rem
            border-bottom .1rem solid lightgray
            margin 0 2rem
        .panel-content
            padding 2rem
            // border .1rem solid gray
            .panel-userInfo
                display flex
                img
                    width 4.8rem
                    height 4.8rem
                    border-radius .4rem
                .name
                    font-size 1.6rem
                    display flex
                    align-items center
                    margin-left 1rem
                    text-decoration none
                    cursor pointer
                    &:link
                        color #778087
                    &:visited
                        color #778087
                    &:hover
                        color #778087
                        text-decoration underline
                    &:active
                        color #778087
            .panel-score,
            .panel-github,
            .panel-time
                font-size 1.4rem
                margin 1rem 0
                font-family 'Helvetica Neue','Helvetica','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Arial','sans-serif'
                a
                    text-decoration none
                    &:link
                        color #778087
                    &:visited
                        color #778087
                    &:hover
                        color #778087
                        text-decoration underline
                    &:active
                        color #778087
</style>

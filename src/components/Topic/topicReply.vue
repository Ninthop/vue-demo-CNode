<template>
    <div class="topic-reply" v-if="list.replies != 0">
        <div class="reply-head">{{ list.reply_count }} 回复</div>
        <p class="divider"></p>
        <div class="reply-content" v-for="(item, index) of list.replies" :key="item.id">
            <div class="reply-content-top">
                <img :src="item.author.avatar_url" :title="item.author.loginname" alt="回复者头像">
                <div class="info">
                    <a class="name" @click="changeUser(item.author.loginname)">{{ item.author.loginname }}</a>
                    <span class="timeInfo">{{ index+1 }}楼 • {{ item.create_at | formatTime }}</span>
                    <span class="user-actions" v-if="item.ups.length!=0">
                        <img src="../../assets/static/点赞.png" alt="点赞图标" class="up-icon">
                        <span class="up-num">{{ item.ups.length }}</span>
                    </span>
                </div>
            </div>
            <div id="reply-content-bottom" v-html="item.content"></div>
            <p class="topic-divider"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopicReply',
    props: {
        list: Object
    },
    methods: {
        changeUser (name) {
            this.$store.dispatch('changeName', name)
            this.$store.dispatch('changeCss', true)
            this.$router.push({path: '/user/' + name})
        }
    }
}
</script>

<style lang="stylus" scoped>
    .topic-reply
        margin 5rem auto
        max-width 95%
        border .1rem solid lightgray
        .reply-head
            padding 2rem 4rem
            font-size 1.4rem
            font-weight bold
        .divider
            height .05rem
            border-bottom .05rem solid lightgray
            margin 0rem 1.5rem
        .reply-content
            max-width 100%
            padding 1rem
            // border .1rem solid gray
            .reply-content-top
                line-height 2rem
                img
                    width 3rem
                    height 3rem
                    display inline
                    float left
                    cursor pointer
                .info
                    .name
                        display inline-block
                        margin-left 1rem
                        font-size 1.2rem
                        cursor pointer
                        color #666
                        &:hover
                            color #08c
                            text-decoration underline
                    .timeInfo
                        margin-left .5rem
                    .user-actions
                        float right
                        .up-icon
                            height 2rem 
                            width 2rem
                            background-size contain
                        .up-num
                            font-size 1.3rem
                            color gray
            #reply-content-bottom
                padding-left 2rem
                padding-bottom 1rem
            .topic-divider
                height .1rem
                border-bottom .1rem solid lightgray
                margin 0rem 1.5rem
                &:last-child
                    height 0
</style>

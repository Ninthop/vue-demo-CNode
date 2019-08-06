<template>
    <div class="content">
        <div class="topic" v-for="item of list" :key="item.id">
            <img :src="item.author.avatar_url" alt="用户头像" class="author" :title="item.author.loginname" @click="changeUser(item.author.loginname)">
            <span class="comment">
                <em>{{ item.reply_count }}/</em>
                <span class="allComment">{{ item.visit_count }}</span>
            </span>
            <span :class="sign(item.top)" v-if="item.top">置顶</span>
            <span :class="signGood(item.good)" v-else-if="item.good">精华</span>
            <span :class="sign(item.top)" v-else>{{$tab[item.tab]}}</span>
            <span 
                class="title" 
                :title="item.title"
                @click="changeId(item.id, item.author.loginname)"
            >
                {{ item.title }}
            </span>
            <span class="topic-right">
                <span class="last-reply-time">{{ item.last_reply_at | formatTime}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeContent',
    props: {
        list: Array,
        tab: String
    },
    methods: {
        sign (top) {
            if (top) {
                return 'top'
            }else{
                return 'sign'
            }
        },
        signGood (good) {
            if (good) { 
                return 'top'
            }
        },
        changeId (id, name) {
            this.$store.dispatch('changeId', id)
            this.$store.dispatch('changeCss', false)
            this.$store.dispatch('changeName', name)
            this.$router.push({path: '/dist/topic/' + id})
            // console.log(id)
            // console.log(name)
        },
        changeUser (name) {
            this.$store.dispatch('changeName', name)
            this.$store.dispatch('changeCss', true)
            this.$router.push({path: '/dist/user/' + name})
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_s/minins.styl'
    .content
        .topic
            position relative
            padding 1rem
            border-bottom .1rem solid lightgray
            display flex
            flex-direction row
            align-items center
            .author
                width 3rem
                height 3rem 
                border-radius .4rem
                cursor pointer
            .comment
                width 8rem
                line-height 2em
                text-align center
                @media all and (max-width 980px)
                    position absolute
                    text-align left
                    left 8rem
                    bottom 0
                em
                    color #9e78c0
                    font-size 1.4rem
                    @media all and (max-width 980px)
                        font-size 1rem
                .allComment
                    color #b4b4b4
                    @media all and (max-width 980px)
                        font-size 1rem
            .top
                font-size 1.2rem
                padding .2rem .4rem
                color white
                background-color #80bd01
                border-radius .3rem
                min-width 2rem
                margin-left .5rem
            .sign
                font-size 1.2rem
                padding .2rem .4rem
                color #999
                background-color #e5e5e5
                border-radius .3rem
                min-width 2rem
                margin-left .5rem
            .title
                font-size 1.6rem
                margin-left .5rem
                text-decoration none
                height 2rem
                ellipsis()
                cursor pointer
                max-width 60rem
                @media all and (min-width 1600px)
                    max-width 80rem
                @media all and (max-width 768px)
                    max-width 45rem
                @media all and (max-width 500px)
                    max-width 28rem
                &:link
                    color black
                &:visited
                    color #888
                &:hover
                    text-decoration underline
                &:active
                    color black
            .topic-right
                flex 1
                display flex
                flex-direction row
                align-items center
                justify-content flex-end
                cursor pointer
                .last-reply-time
                    color #778087
                    font-size 1.2rem
                    min-width 4.5rem
                    margin-left 2rem
                    @media all and (max-width 500px)
                        max-width 5rem
                        font-size 1rem
</style>

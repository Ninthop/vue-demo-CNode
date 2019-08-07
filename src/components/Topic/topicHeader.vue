<template>
    <div class="topic-header">
        <div class="title">
            <span class="title-tab" v-show="list.top">置顶</span>
            <span class="title-name">{{ list.title }}</span>
        </div>
        <div class="header-info">
            <ul>
                <li><span>发布于 {{ list.create_at | formatTime }}</span></li>
                <li><span>作者 <span class="author" @click="changeUser(list.author.loginname)">{{ this.$store.state.loginname }}</span></span></li>
                <li><span>{{ list.visit_count }}次浏览</span></li>
                <li><span>来自 {{ $tab[list.tab] }}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopicHeader',
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
    .topic-header
        padding 1rem
        font-size 1.4rem
        width 100%
        box-sizing:border-box
        border-bottom .1rem solid lightgray
        .title
            margin .8rem 0
            line-height 2.5rem
            .title-name
                font-size 2.2rem
                font-weight bold
            .title-tab
                font-size 1.2rem
                padding .2rem .4rem
                color white
                background-color #80bd01
                border-radius .3rem
                min-width 2rem
                margin-right .5rem
        .header-info
            margin-left -2rem
            margin-top 1.8rem
            ul
                display flex
                flex-direction row
                flex-wrap wrap
                line-height 1.5rem
                li
                    list-style-type disc
                    margin-right 2rem
                    min-width 3rem
                    .author
                        cursor pointer
                        margin-left .2rem
                        &:hover
                            text-decoration underline
                    span 
                        margin-left -.5rem
                        font-size 1.2rem
                        color #838383
                        a
                            text-decoration none
                            &:link
                                color #838383
                            &:visited
                                color #838383
                            &:hover
                                text-decoration underline
                                color #838383
                            &:active
                                color #838383

</style>

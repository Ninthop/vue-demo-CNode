<template>
    <div class="home-header">
        <ul :class="active">
            <li class="all" @click="makeActive('all')">全部</li>
            <li class="good" @click="makeActive('good')">精华</li>
            <li class="share" @click="makeActive('share')">分享</li>
            <li class="ask" @click="makeActive('ask')">问答</li>
            <li class="job" @click="makeActive('job')">招聘</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'homeHeader',
    data () {
        return {
            active: 'all'
        }
    },
    methods: {
        makeActive (head) {
            this.active = head
            let page = 1
            this.$store.dispatch('changePage', page)
            this.$emit('tabChange', head)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .home-header
        min-width 80rem
        width 100%
        background-color #f6f6f6
        @media all and (max-width 980px)
            min-width 10rem
            margin 0 auto
            box-shadow none
        ul
            padding 1rem
            display flex
            flex-direction row
            @media all and (max-width 768px)
                display flex
                justify-content center
            li
                font-size 1.4rem
                padding .4rem .4rem
                margin 0 .9rem
                color #80bd01
                cursor pointer
                list-style none
                &:hover
                    color #6c5ce7
        ul.all
            .all
                background-color #80bd01
                color white
                border-radius .3rem
                transition 0.3s
        ul.good
            .good
                background-color #80bd01
                color white
                border-radius .3rem
                transition 0.3s
        ul.share
            .share
                background-color #80bd01
                color white
                border-radius .3rem
                transition 0.3s
        ul.ask
            .ask
                background-color #80bd01
                color white
                border-radius .3rem
                transition 0.3s
        ul.job
            .job
                background-color #80bd01
                color white
                border-radius .3rem
                transition 0.3s
</style>

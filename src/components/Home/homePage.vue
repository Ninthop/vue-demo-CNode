<template>
    <div class="pageContain">
        <div class="pageAll">
            <span :class="pagePre(this.$store.state.page)" @click="prePage">上一页</span>
            <span class="page-first page" @click="firstPage">首页</span>
            <span class="page-next page" @click="nextPage">下一页</span>
        </div>
        <span class="page-number">页数：{{ this.$store.state.page }}</span>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'HomePage',
    methods: {
        pagePre (pages) {
            if (pages == 1){
                return 'no-pre'
            }else{
                return 'page'
            }
        },
        prePage () {
            if (this.$store.state.page > 1) {
                this.$store.dispatch('changePage', --this.$store.state.page)
                this.backTop()
            }
        },
        firstPage () {
            this.$store.state.page = 1
            this.$store.dispatch('changePage', this.$store.state.page)
            this.backTop()
        },
        nextPage () {
            this.$store.dispatch('changePage', ++this.$store.state.page)
            this.backTop()
        },
        backTop() {
            let timer = setTimeout(() => {
                let ispeed = Math.floor(-this.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed
                if(this.scrollTop === 0) {
                    clearTimeout(timer)
                }
            }, 16)
        }
    }
}
</script>

<style lang="stylus" scoped>
    .pageContain
        padding 0rem 5rem
        .pageAll
            display inline
            @media all and (max-width 768px) 
                display flex
                justify-content space-around
            .page
                display inline-block
                font-size 1.4rem
                padding 1.4rem 1.2rem
                border .1rem solid lightgray
                margin 2rem .5rem
                border-radius .5rem
                user-select none
                cursor pointer
                color #636e72
                transition 0.3s
                @media all and (min-width 980px)
                    &:hover
                        color #7f8c8d
                        background-color #34495e                
                &:active
                    color #7f8c8d
                    background-color #34495e
            .no-pre
                display inline-block
                font-size 1.4rem
                padding 1.4rem 1.2rem
                border .1rem solid lightgray
                margin 2rem .5rem
                border-radius .5rem
                user-select none
                cursor pointer
                background-color #dfe6e9
                color #b2bec3
                transition 0.3s
        .page-number
            font-size 1.2rem
            color #34495e
            margin-left 1rem
            @media all and (max-width 768px)
                display block
                position absolute
                left 47%
                transform translateX(-50%)
                text-align center
</style>

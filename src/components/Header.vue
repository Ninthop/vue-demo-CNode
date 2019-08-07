<template>
    <div class="header">
        <div class="header-inner">
            <div class="header-contain">
                <div class="header-left">
                    <router-link tag="div" to="/" class="logo">
                        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="" srcset="">
                    </router-link>
                    <div class="search"></div>
                </div>
                <div class="header-right" @click.stop="boxShow">
                    关于
                </div>
                <fade>
                    <div class="header-messageBox" v-show="isBoxShow">
                        <div class="messageBox-contain" @click.stop="boxShow">
                            源码地址：
                            <a id="github" href="https://github.com/Ninthop/vue-demo-CNode/tree/optimization" target="_blank">Vue-demo-CNodeJs</a>
                            <hr>
                            <div>技术栈：</div>
                            <ul>
                                <li>Vue-cli3</li>
                                <li>Axios —— CNodeJSApi</li>
                                <li>Vuex</li>
                                <li>Stylus</li>
                            </ul>
                            <button class="messageBox-btn" @click.stop="boxClose">确 定</button>
                        </div>
                    </div>
                </fade>
            </div>
        </div>
    </div>
</template>

<script>
import Fade from '_com/animate/fade.vue'
import * as api from '@/lib/api.js'

var timer;

export default {
    name: 'Header',
    data () {
        return {
            isBoxShow: false,
            x: 0
        }
    },
    components: {
        Fade
    },
    methods: {
        boxShow () {
            this.isBoxShow = true
        },
        boxClose () {
            this.isBoxShow = false
        }
    },
    mounted(){
        var that = this
        document.addEventListener('click', function(e){
            that.isBoxShow = false
        })
    },
    destroyed () {
        document.removeEventListener('click', function(e){
            that.isBoxShow = false        
        })
    }
}
</script>

<style lang="stylus" scoped>
    .header
        background-color #444
        width 100%
        user-select none
        .header-inner
            width 80%
            margin auto
            padding .5rem
            .header-contain
                position relative
                .header-left
                    .logo
                        width 12rem
                        padding .3rem 0
                        height 3.4rem
                        line-height 3.4rem
                        cursor pointer
                .header-right
                    padding 1.5rem
                    font-size 1.3rem
                    color #ccc
                    position absolute
                    right 0
                    top 50%
                    transform translateY(-50%)
                    cursor pointer
                .header-messageBox
                    position fixed
                    top 0
                    bottom 0
                    left 0
                    right 0
                    z-index 2
                    background-color rgba(0,0,0,.5)
                    .messageBox-contain
                        position relative
                        margin 18rem auto
                        width 50rem
                        height 20rem
                        background-color white
                        border-radius .3rem
                        font-size 1.5rem
                        padding 2rem
                        @media screen and (max-width 33.75rem)
                            width 25rem 
                            height 28rem
                            margin 8rem auto
                        
                        hr
                            border 0
                            height .2rem
                            background-color #7f8c8d
                            margin 2rem 0
                        div
                            font-size 1.5rem
                        ul
                            li
                                font-size 1.3rem 
                                margin 1rem 1.5rem
                                list-style-type disc 
                        a
                            position relative
                            font-size 1.5rem
                            text-decoration none
                            &:before
                                content ''
                                position absolute
                                width 0
                                left 50%
                                bottom -.3rem
                                height .2rem
                                background-color rgba(41, 128, 185, .5)
                            &:hover:before
                                width 100%
                                left 0
                                transition all 0.5s
                            &:link
                                color #606266
                            &:visited
                                color #606266
                            &:hover
                                color #3498db
                            &:active
                                color #606266
                        .messageBox-btn
                            position absolute
                            right 5rem
                            bottom 3rem
                            width 6rem
                            height 3rem
                            border 0
                            color #2c3e50
                            background-color #b2bec3
                            transition 0.3s
                            border-radius .3rem
                            cursor pointer
                            outline none
                            &:hover
                                background-color #34495e
                                color #ecf0f1
                                
</style>

<template>
    <div>
        <div id="topic-content" v-html="list.content"></div>
    </div>
</template>

<script>
export default {
    name: 'TopicContent',
    props: {
        list: Object
    }
}
</script>

<style lang="stylus">
    
</style>

import * as api from '@/lib/api.js'

const actions = {
    changePage(ctx, page) {
        ctx.commit('changePage', page)
    },
    changeTab(ctx, tab) {
        ctx.commit('changeTab', tab)
    },
    changeId(ctx, id) {
        ctx.commit('changeId', id)
    },
    changeName(ctx, name) {
        ctx.commit('changeName', name)
    },
    changeCss(ctx, bool) {
        ctx.commit('changeCss', bool)
    }
}

export default actions
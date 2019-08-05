const actions = {
    changePage(ctx, page) {
        ctx.commit('changePage', page)
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
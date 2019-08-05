const mutations = {
    changePage (state, page) {
        state.page = page
    },
    changeId (state, id) {
        state.id = id
        try {
            sessionStorage.id = id
        } catch (error) {}
    },
    changeName (state, name) {
        state.loginname = name
        try {
            sessionStorage.name = name
        } catch (error) {}
    },
    changeCss (state, bool) {
        state.topicOrUser = bool
        try {
            sessionStorage.bool = bool
        } catch (error) {}
    }
}

export default mutations
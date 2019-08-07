const state = {
    page: sessionStorage.page || 1,
    tab: sessionStorage.tab || 'all',
    id: sessionStorage.id || '',
    loginname: sessionStorage.name || '',
    topicOrUser: sessionStorage.bool || false
}

export default state
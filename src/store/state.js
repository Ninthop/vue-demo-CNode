const state = {
    page: 1,
    id: sessionStorage.id || '',
    loginname: sessionStorage.name || '',
    topicOrUser: false
}

try {
    if(sessionStorage.id) {
        id = sessionStorage.id
    }
} catch (e) {}

try {
    if(sessionStorage.name) {
        loginname = sessionStorage.name
    }
} catch (e) {}

try {
    if(sessionStorage.bool) {
        bool = sessionStorage.name
    }
} catch (e) {}

export default state
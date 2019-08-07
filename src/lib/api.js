import request from './http.js'

const getHomeInfo = data => {
    return request({
        url: '/topics',
        method: 'get',
        params: data
    })
}

const getTopic = id => {
    return request({
        url: `${id}`,
        method: 'get'
    })
}

const getUserInfo = loginname => {
    return request({
        url: `${loginname}`,
        method: 'get'
    })
}

export {
    getHomeInfo,
    getTopic,
    getUserInfo
}
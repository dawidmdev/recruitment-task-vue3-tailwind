import Axios from 'axios'

export function initializeAPI() {
    window.axios = Axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': window.location.origin,
        }
    })
}

export function initializeImgurAPI() {
    window.imgur = Axios.create({
        baseURL: process.env.VUE_APP_IMGUR_URL,
        withCredentials: true,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': window.location.origin,
        }
    })
}

export function isImgurAPIInitialized() {
    return window.imgur !== undefined
}

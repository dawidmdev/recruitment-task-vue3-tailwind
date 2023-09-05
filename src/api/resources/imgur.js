const RESOURCE = '/image'

export function uploadPhoto(formData) {
    return window.imgur.post(`${RESOURCE}`, formData)
}

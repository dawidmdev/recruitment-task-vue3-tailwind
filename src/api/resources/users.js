const RESOURCE = '/users'

export function getWithPagination(pageNumber) {
    return window.axios.get(`${RESOURCE}?page=${pageNumber}`)
}

export function show(id) {
    return window.axios.get(`${RESOURCE}/${id}`)
}

export function create(payload) {
    return window.axios.post(`${RESOURCE}`, payload)
}

export function update(id, payload) {
    return window.axios.patch(`${RESOURCE}/${id}`, payload)
}

export function remove(id) {
    return window.axios.delete(`${RESOURCE}/${id}`)
}

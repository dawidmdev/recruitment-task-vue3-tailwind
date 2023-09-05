import {defineStore} from 'pinia'
import {getWithPagination, remove, show, update, create} from '@/api/resources/users'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            busy: false,
            paginationPageNumber: 0,
            users: [],
            paginationDetails: {
                per_page: 0,
                total: 0,
                total_pages: 0
            },
            selectedUser: {
                id: 0,
                email: '',
                first_name: '',
                last_name: '',
                avatar: ''
            },
            /**
             * Hack to keep data-chain after transition from edit/create views to users list.
             * @type {Ref<UnwrapRef<boolean>>}
             */
            initialized: false
        }
    },
    getters: {
        getCurrentPageNumber: (state) => state.paginationPageNumber,
        getUsersList: (state) => state.users,
        getPaginationDetails: (state) => state.paginationDetails,
        getPaginationTotalPages: (state) => state.paginationDetails?.total_pages,
        getSelectedUser: (state) => state.selectedUser,
        getSelectedUserAvatar: (state) => state.selectedUser.avatar,
        isBusy: (state) => state.busy,
        hasSelectedUser: (state) => state.selectedUser.id > 0,
        getSelectedUserId: (state) => state.selectedUser.id,
        isInitialized: (state) => state.initialized
    },
    actions: {
        async getUsers(pageNumber) {
            try {
                this.busy = true
                const {data} = await getWithPagination(pageNumber)
                const {per_page, total, total_pages} = data
                this.users = data.data
                this.paginationDetails = {
                    per_page,
                    total,
                    total_pages
                }
                this.busy = false
            }catch (error) {
                this.busy = false
                return error
            }
        },
        setInitialized(flag) {
            this.initialized = flag
        },
        setUserAvatar(avatarUrl) {
            this.selectedUser.avatar = avatarUrl
        },
        selectUser(payload) {
            this.selectedUser = payload
        },
        clearSelectedUser() {
            this.selectedUser = {
                id: 0
            };
        },
        async showUser(userId) {
            try {
                this.busy = true
                const {data} = await show(userId)
                this.selectUser(data.data)
                this.busy = false
            } catch (error) {
                this.busy = false
                return error
            }
        },
        async removeUser(userId) {
            try {
                const {data} = await remove(userId)
                this.users = this.users.filter(user => user.id !== userId)
                return data
            } catch (error) {
                return error
            }
        },
        async updateUser(userId, payload) {
            try {
                const {data} = await update(userId, payload)
                this.users = this.users.map(user => {
                    if(user.id === userId) {
                        return payload
                    }
                    return user
                })
                return data
            } catch (error) {
                return error
            }
        },
        async createUser(payload) {
            try {
                const {data} = await create(payload)
                this.users.push(payload)
                return data
            } catch (error) {
                return error
            }
        }
    },
})

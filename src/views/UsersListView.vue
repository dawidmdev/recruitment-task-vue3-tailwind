<template>
  <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
    <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
      <h2 class="text-4xl text-gray-950 mb-5">Users List</h2>
      <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search for users...</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                       viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"/>
                  </svg>
                </div>
                <input type="text" id="simple-search"
                       v-model="searchText"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                       placeholder="Search" required="">
              </div>
            </form>
          </div>
          <div
              class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <button type="button"
                    @click="createUser"
                    class="rounded-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>

              Add user
            </button>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-4 py-3"></th>
              <th scope="col" class="px-4 py-3">Full name</th>
              <th scope="col" class="px-4 py-3">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr class="border-b dark:border-gray-700" v-for="item in filteredUsersList" :key="item.id">
              <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img :src="item.avatar" class="w-10 h-10 rounded-full"/>
              </th>
              <td class="px-4 py-3">
                {{ item.first_name }} {{ item.last_name }}
              </td>
              <td class="px-4 py-3 flex items-center justify-end pt-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-5 h-5 mr-3" @click="editUser(item)">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-5 h-5" @click="removeUser(item.id)">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                </svg>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
             aria-label="Table navigation">
          <ul class="inline-flex items-stretch -space-x-px">
            <li>
              <a href="#"
                 @click="prevPaginationPage"
                 class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"/>
                </svg>
              </a>
            </li>
            <li v-for="pageNumber in pagesNumberList" :key="pageNumber">
              <a href="#" aria-current="page"
                 @click="reloadUsersList(pageNumber-1)"
                 class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                {{ pageNumber }}
              </a>
            </li>
            <li>
              <a href="#"
                 @click="nextPaginationPage"
                 class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>
<script setup>
import {computed, onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {useUserStore} from '@/stores/user'

const userStore = useUserStore()
const router = useRouter()

const searchText = ref('')

const getUsersByPaginationPageNumber = (pageNumber) => {
  userStore.getUsers(pageNumber)
}
const removeUser = (userId) => {
  if (confirm("Are you sure?") === true) {
    userStore.removeUser(userId)
  }
}
const editUser = async (user) => {
  await userStore.selectUser(user)
  router.push(`/users/${user.id}`)
}
const createUser = () => {
  router.push(`/users/create`)
}
const prevPaginationPage = () => {
  if(userStore.getCurrentPageNumber === 0) {
    return
  }
  const newPageNumber = userStore.getCurrentPageNumber - 1;
  reloadUsersList(newPageNumber)
}
const nextPaginationPage = () => {
  if(userStore.getCurrentPageNumber === userStore.getPaginationTotalPages) {
    return
  }
  const newPageNumber = userStore.getCurrentPageNumber + 1;
  reloadUsersList(newPageNumber)
}
const reloadUsersList = (pageNumber) => {
  userStore.getUsers(pageNumber)
}

const filteredUsersList = computed(() => {
  if(searchText.value.length > 0) {
    const searchMethod = new RegExp(`${searchText.value}`, 'i')
    return userStore.getUsersList.filter(user=> {
      if(searchMethod.test(user.first_name) || searchMethod.test(user.last_name)) {
        return user
      }
    })
  }
  return userStore.getUsersList
})
const pagesNumberList = computed(() => {
  return userStore.getPaginationTotalPages ?? 0
})

onMounted(() => {
  if(userStore.isInitialized) {
    return
  }
  userStore.setInitialized(true)
  getUsersByPaginationPageNumber(0)
})
</script>

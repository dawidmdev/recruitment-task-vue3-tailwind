<template>
  <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-10">
    <div>
      <div class="flex" v-if="form">
        <div class="mb-6 w-1/2 pr-2">
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
            name</label>
          <input type="text" id="first_name"
                 v-model="form.first_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required>
        </div>
        <div class="mb-6 w-1/2 pl-2">
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
          <input type="text" id="last_name"
                 v-model="form.last_name"
                 class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required>
        </div>
      </div>
      <div class="mb-6">
        <label for="avatar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar URL</label>
        <input type="text" id="avatar"
               v-model="form.avatar"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               required>
      </div>
      <button type="submit"
              @click="onSubmit"
              class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{buttonTitle}}
      </button>
    </div>
  </div>
</template>
<script setup>
import {defineProps, defineEmits, onMounted, ref, computed, watch, onUnmounted} from 'vue'

const form = ref({
  id: 0,
  first_name: '',
  last_name: '',
  avatar: ''
})

const props = defineProps(['initialize-form'])
const emits = defineEmits(['sent', 'avatar-changed'])

const onSubmit = () => {
  emits('sent', form.value)
}

const buttonTitle = computed(() => {
  return form.value.id > 0 ? 'Update details' : 'Create'
})

watch(() => form.value.avatar, avatarUrl => {
  emits('avatar-changed', avatarUrl)
})

onMounted(() => {
  if(props.initializeForm !== undefined) {
    form.value = Object.assign({}, props.initializeForm)
  }
})
onUnmounted(() => {

})
</script>

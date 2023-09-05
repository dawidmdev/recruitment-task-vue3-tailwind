<template>
  <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden p-10 text-center content-center">
    <div>
      <img :src="photoPreview" class="w-32 h-32 rounded-full inline">
    </div>
    <div class="mt-10">
      <label class="border-gray-700 border-2 w-full rounded-md text-gray-700 cursor-pointer block focus:outline-none focus:ring-blue-300 font-medium text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" for="small_size">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
        </svg>
        Change photo
      </label>
      <input class="hidden w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
             id="small_size"
             type="file"
             @change="onFileChanged"
             accept="image/*">
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref, watch} from "vue";
import {defineProps} from 'vue'
import {useImageUri} from "@/composables/image";

const props = defineProps(['initialize-avatar'])

const photoPreview = ref('')

const onFileChanged = async ($event) => {
  photoPreview.value = await useImageUri($event.target.files[0])
}

watch(() => props.initializeAvatar, newAvatar => {
  photoPreview.value = newAvatar
})

onMounted(() => {
  photoPreview.value = props.initializeAvatar
})
</script>

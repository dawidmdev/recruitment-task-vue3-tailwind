<template>
  <div>
    <div class="text-gray-600 cursor-pointer" @click="router.push('/users')">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
      </svg> Back
    </div>
    <h2 class="text-4xl text-gray-950 mb-5">Edit</h2>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-3 lg:col-span-2 md:col-span-2 sm:mb-10">
        <UserForm v-if="isSelectedUserLoaded"
                  @sent="sendForm"
                  @avatar-changed="onAvatarChanged"
                  :initialize-form="userStore.getSelectedUser"/>
      </div>
      <div class="col-span-3 lg:col-span-1 md:col-span-2">
        <PreviewUserAvatar v-if="isSelectedUserLoaded"
                           :initialize-avatar="currentAvatarPreview"/>
      </div>
    </div>
    <div v-if="hasImgurAPIInstance">
      Imgur API Instance loaded!
    </div>
  </div>
</template>
<script setup>
import {onMounted, onUnmounted, reactive, ref} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {isImgurAPIInitialized} from '@/bootstrap/axios'
import {useUserStore} from '@/stores/user'
import UserForm from "@/components/user/UserForm.vue";
import PreviewUserAvatar from "@/components/user/PreviewUserAvatar.vue";

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const hasImgurAPIInstance = reactive(isImgurAPIInitialized())
const isSelectedUserLoaded = ref(false)
const currentAvatarPreview = ref('')

const sendForm = async (sentForm) => {
  await userStore.updateUser(
      userStore.getSelectedUserId,
      sentForm
  )
  router.push(`/users`)
}
const onAvatarChanged = (avatarUrl) => {
  currentAvatarPreview.value = avatarUrl
}

onMounted(async () => {
  const routeParamUserId = parseInt(route.params.userId)
  if (routeParamUserId !== userStore.getSelectedUserId) {
    await userStore.showUser(route.params.userId)
  }
  currentAvatarPreview.value = userStore.getSelectedUserAvatar
  isSelectedUserLoaded.value = true
})
onUnmounted(() => {
  userStore.clearSelectedUser()
})
</script>

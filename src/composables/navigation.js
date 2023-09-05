import {useRouter} from 'vue-router'
export function useNavigation(direction) {
    const router = useRouter()
    router.push(direction)
}

import {uploadPhoto} from '@/api/resources/imgur'

class ImgurService {
    async upload(fromData) {
        return new Promise((resolve, reject) => {
            return uploadPhoto(fromData)
                .then(resolve)
                .catch(reject)
        })
    }
}

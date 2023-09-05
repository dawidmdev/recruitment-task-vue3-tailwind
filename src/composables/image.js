export function useImageUri(image) {
    return new Promise((resolve) => {
        var reader = new FileReader()
        reader.onload = (e) => {
            resolve(e.target.result)
        }
        reader.readAsDataURL(image)
    })
}

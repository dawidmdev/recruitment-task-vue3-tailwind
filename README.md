# task

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Imgur reusable service
Default `initializeImgurAPI()` from `@/bootstrap/axios.js` execute in main.js (globally bootstrapped), but you can initialize Imgur API from every component/view when
you need to use `@/services/ImgurService.js` (lazy loading). To check if ImgurAPI is initialized, use `isImgurAPIInitialized()` from `@/bootstrap/axios.js`

ImgurService is only a test-model (no real integration with Imgur API). If you initialized `initializeImgurAPI()` and added `VUE_APP_IMGUR_KEY` key with random value in .env, you can make fake-upload (only preview selected photo)
without real upload to Imgur API. You can still add avatar via URL.

### .env
Clone .env.example and rename to .env.

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

ImgurService is only a test-model (no real integration with Imgur API). You can make a fake upload (only a preview of a selected photo) without a real upload to Imgur API. There is still an option to add an avatar via the avatar URL field in edit/create form.

### .env
Clone .env.example and rename to .env.

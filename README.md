This portfolio website is built with <b>React</b> and <b>Vite</b>.
<br>The files in this repository are static files only generated from the build process.

<br>How to compile a React project into static files, so you can deploy it on GitHub Pages:
<br>1. Open your Vite + React project
<br><br>2. Update ```vite.config.js```
```
export default defineConfig({
  plugins: [react()],
  base: '/', // add this line
})
```

<br>3. Run the build command to compile and generate your React app into static files
```
npm run build
```

<br>4. The static files will be generated in the ```dist/``` directory, here is an example structure
```
dist/
  index.html
  assets/
    index-xxxxx.js
    index-xxxxx.css
```

<br>5. Optionally, run the preview command to preview the build result. Do not open ```index.html``` using ```file://``` in the browser, as it may cause CORS errors
```
npm run preview
```

<br>6. Push the ```dist/``` files into your ```username.github.io``` page repository

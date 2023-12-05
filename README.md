# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

### Analyzing the Bundle Size

```bash
npm install --save source-map-explorer
# or
yarn add source-map-explorer
# or
pnpm install --save source-map-explorer
```

Then in [package.json](./package.json), add the following line to scripts:
```bash
   "scripts": {
+    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
```
Then to analyze the bundle run the production build then run the analyze script.


### ✨ ESlint and Prettier - 干净、一致和无错误的代码

```bash
npm init @eslint/config
# or
pnpm create @eslint/config
```

Then in How would you like to use ESLint? 
- [ ] To check syntax only
- [ ] To check syntax and find problems
- [x] To check syntax, find problems, and enforce code style

Then in What type of modules does your project use? … 
- [x] JavaScript modules (import/export)
- [ ] CommonJS (require/exports)
- [ ] None of these

Then in Which framework does your project use
- [x] React
- [ ] Vue.js

Then in Does your project use TypeScript？
- [ ] No
- [x] Yes

Then in Where does your code run
- [x] Browser
- [ ] Node

Then in How would you like to define a style for your project
- ...

### less webpack import var of style
```bash
npm install less less-loader --D
# or
yarn add less less-loader --save-dev
#or
pnpm install less less-loader -D
```
Then in 将webpack配置文件暴露出来，注意，这是不可逆的！！
```bash
npm run eject
```
修改config/webpack.config.js这个文件
1. set alias
2. add less-loader option additionalData
3. 同样利用additionalData配合data-theme做css变量来做主题切换


### 引入tiptap做编辑输入框
```bash
pnpm install @tiptap/react @tiptap/pm @tiptap/starter-kit
```



### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

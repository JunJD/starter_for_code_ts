import ReactDOM from 'react-dom/client'
import localforage from 'localforage'
import '@/common/style/base.less'
import './index.less'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store,{defaultTables} from './localBase'
// import { StrictMode } from 'react'

const style = 'background-color: yellow; color: red; font-style: italic; border: 4px solid red; font-size: 2em; padding: 0 10px 0 0;border-radius: 6px;'
console.log('%c DING AI PRO', style)

localforage.ready().then(function() {
	console.log(`is ${localforage.INDEXEDDB}`, localforage.supports(localforage.INDEXEDDB))
}).catch(function (e) {
	console.log(e)
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
  {	identifierPrefix: 'ai'}
)

function initLocalTable() {
	defaultTables.forEach((tableName)=>{
		store.setTable(tableName)
	})
	store.ready = true
}

initLocalTable()

root.render(
	// <StrictMode>
	<App />
	// </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals()


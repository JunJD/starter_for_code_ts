import localforage from 'localforage'

class localBase {
	version =  '0.0.1'
	ready = false
	static Singleton: localBase |  null = null
	private constructor() {
        
	}
	awaitReady() {
		return new Promise((resolve)=>{
			setInterval(()=>{
				if(this.ready) {
					resolve(localBase.Singleton)
				}
			},200)
		})
	}
	static applyLocal() {
		if(localBase.Singleton) {
			return localBase.Singleton
		}
		return new localBase()
	}

	tableList: Map<string, [LocalForage, number]> = new Map()
    
	public setTable(name: string) {
		if(this.tableList.has(name)) {
			return this.tableList.get(name)
		}
		const table = localforage.createInstance({
			name
		})
		this.tableList.set(name, [table, 0])
		localforage.setItem(name, 0)
		return table
	}

	public getTbale(name: string) {
		const table = this.tableList.has(name) && this.tableList.get(name)
		table && localforage.setItem(name, table[1] + 1)
		return table? table[0] : null
	}
}

export const defaultTables = ['thread']

export default localBase.applyLocal() 
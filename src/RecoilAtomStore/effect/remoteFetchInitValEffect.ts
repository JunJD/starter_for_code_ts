import { AsssistantListGet } from '@/server/assistant.modules/assistant.service'
import { AtomEffect } from 'recoil'

const remoteFetchInitValEffect = <T>(key: string) => ({setSelf}: Parameters<AtomEffect<T>>['0']) => {
/** 如果有一个持久化的值，在加载时设置它 */
	const loadPersisted = async () => {
		const savedValue = await AsssistantListGet()
		console.log(`recoil[${key}]初始值: ${JSON.stringify(savedValue)}`)
		if (savedValue != null) {
			setSelf(savedValue as T)
		}
	}

	// 加载持久化的数据
	loadPersisted()
}

export default remoteFetchInitValEffect
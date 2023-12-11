
import { listResult } from '@/server/types'
import { AtomEffect } from 'recoil'

const remoteFetchInitValEffect = <T>(fetch: () => Promise<listResult>) => ({setSelf}: Parameters<AtomEffect<T>>['0']) => {
/** 如果有一个持久化的值，在加载时设置它 */
	const loadPersisted = async () => {
		const savedValue = (await fetch()).data
		if (savedValue != null) {
			setSelf(savedValue as T)
		}
	}

	// 加载持久化的数据
	loadPersisted()
}

export default remoteFetchInitValEffect
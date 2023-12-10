import { Thread } from '@/server/types'
import { atom } from 'recoil'

type ThreadList = Array<Thread>

export const threadListState = atom<ThreadList>({
	key: 'threadListState', // unique ID (with respect to other atoms/selectors)
	default: [], // default value (aka initial value)
	effects:  [
		(param) => {
			console.log(param)
		}
	],
})
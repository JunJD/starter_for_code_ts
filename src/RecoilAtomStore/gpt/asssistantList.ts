import { Assistant2 } from '@/server/types'
import { atom } from 'recoil'
import remoteFetchInitValEffect from '../effect/remoteFetchInitValEffect'

type AssistantList = Array<Assistant2>

export const assistantListState = atom<AssistantList>({
	key: 'assistantListState', // unique ID (with respect to other atoms/selectors)
	default: [], // default value (aka initial value)
	effects:  [
		remoteFetchInitValEffect('assistantListState')
	],
})
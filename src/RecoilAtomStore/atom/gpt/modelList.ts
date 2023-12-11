import { Model } from '@/server/types'
import { atom } from 'recoil'
import remoteFetchInitValEffect from '../../effect/remoteFetchInitValEffect'
import { ModelListGet } from '@/server/model.modules/model.service'


type ModelList = Array<Model>

export const modeListState = atom<ModelList>({
	key: 'modeListState', // unique ID (with respect to other atoms/selectors)
	default: [], // default value (aka initial value)
	effects:  [
		remoteFetchInitValEffect(ModelListGet)
	],
})
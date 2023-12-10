import { AtomEffect } from 'recoil'
const history: Array<{
    label: string,
    undo: () => void,
  }> = []
  
const historyEffect = <T>(name: string) => ({setSelf, onSet}:Parameters<AtomEffect<T>>['0']) => {
	onSet((newValue, oldValue) => {
		history.push({
			label: `${name}: ${JSON.stringify(oldValue)} -> ${JSON.stringify(newValue)}`,
			undo: () => {
				setSelf(oldValue)
			},
		})
		setSelf(newValue)
	})
}
export default historyEffect
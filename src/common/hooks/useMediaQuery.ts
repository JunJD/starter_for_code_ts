import { Theme, useTheme } from '@mui/joy'
import { useLayoutEffect, useState } from 'react'


function useMediaQuery(queryInput: (theme: Theme) => string) {

	const theme = useTheme()
	
	const query = typeof queryInput === 'function' ? queryInput(theme) : queryInput

	const [match, setMatch] = useState(() => {
		return matchMedia(query).matches
	})
	useLayoutEffect(() => {
		let active = true
		if (!matchMedia) {
			return undefined
		}
		const queryList = matchMedia(query)
		const updateMatch = () => {
			if (active) {
				setMatch(queryList.matches)
			}
		}
		updateMatch()

		document.addEventListener('resize',updateMatch)
		return () => {
			console.log('unmounted')
			active = false
			document.addEventListener('resize',updateMatch)
		}
	}, [query, matchMedia])
	return match
}

export default useMediaQuery
import Autocomplete from '@mui/joy/Autocomplete'
import AutocompleteOption from '@mui/joy/AutocompleteOption'
import FormControl, { FormControlProps } from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Typography from '@mui/joy/Typography'
import { Model } from '@/server/types'
import { modeListState } from '@/RecoilAtomStore/atom/gpt/modelList'
import { useRecoilState } from 'recoil'


export default function ModelSelector(props: FormControlProps) {
	const { sx, ...other } = props
	const [modeList] = useRecoilState<Array<Model>>(modeListState)
	
	return (
		<FormControl
			{...other}
			sx={[{ display: { sm: 'contents' } }, ...(Array.isArray(sx) ? sx : [sx])]}
		>
			<FormLabel>Mode</FormLabel>
			<Autocomplete
				name='model'
				size="sm"
				autoHighlight
				isOptionEqualToValue={(option, value) => option.code === value.code}
				defaultValue={{ label: 'gpt-3.5-turbo-1106', code: 'gpt-3.5-turbo-1106', owned_by: 'openai' }}
				options={modeList.map(item=>({label: item.id, code: item.id, owned_by: item.owned_by}))}
				renderOption={(optionProps, option) => (
					<AutocompleteOption {...optionProps} key={option.code}>
						{option.label}
						<Typography component="span" textColor="text.tertiary" ml={0.5}>
							(by--{option.owned_by})
						</Typography>
					</AutocompleteOption>
				)}
				slotProps={{
					input: {
						autoComplete: 'new-password', // disable autocomplete and autofill
					},
				}}
			/>
		</FormControl>
	)
}

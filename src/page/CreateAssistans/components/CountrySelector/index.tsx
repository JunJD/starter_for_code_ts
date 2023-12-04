import Autocomplete from '@mui/joy/Autocomplete'
import AutocompleteOption from '@mui/joy/AutocompleteOption'
import FormControl, { FormControlProps } from '@mui/joy/FormControl'
import FormLabel from '@mui/joy/FormLabel'
import Typography from '@mui/joy/Typography'
import { useEffect, useState } from 'react'
import { getModelList } from '@/mock'


interface CountryType {
	code: string;
	label: string;
	ownedBy: string;
	suggested?: boolean;
  }

export default function ContrySelector(props: FormControlProps) {
	const { sx, ...other } = props
	const [listModel, setListModel] = useState<CountryType[]>([])
	useEffect(()=>{
		getModels().catch(()=>{
			getModels()
		})
	},[])
	const getModels = async()=> {
		const {data: reslist} = await getModelList()
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		setListModel(reslist.map((item: any)=>({
			code: item.id,
			label: item.id,
			ownedBy: item.owned_by
		})))
	}

	return (
		<FormControl
			{...other}
			sx={[{ display: { sm: 'contents' } }, ...(Array.isArray(sx) ? sx : [sx])]}
		>
			<FormLabel>Mode</FormLabel>
			<Autocomplete
				size="sm"
				autoHighlight
				isOptionEqualToValue={(option, value) => option.code === value.code}
				defaultValue={{ label: 'gpt-3.5-turbo-0613', code: 'gpt-3.5-turbo-0613', ownedBy: 'openai' }}
				options={listModel}
				renderOption={(optionProps, option) => (
					<AutocompleteOption {...optionProps}>
						{option.label}
						<Typography component="span" textColor="text.tertiary" ml={0.5}>
              (by--{option.ownedBy})
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

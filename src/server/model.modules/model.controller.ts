import * as service from './model.service'

export const ModelListGet = async() => {
	const models = await service.ModelListGet()
	return models
}
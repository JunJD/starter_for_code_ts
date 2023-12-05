import { FileType } from '../types'
import * as service from './files.serveive'

export const FilesCreate = async(params: FormData) => {
	const file = await service.FilesCreate(params)
	return {
		code: 200,
		file
	}
}

export const FilesGet = async() => {
	const files = await service.FilesGet()
	return {
		code: 200,
		files
	}
}

export const FilesDelete = async(id: FileType['id']) => {
	const del = await service.FilesDelete(id)
	return del
}
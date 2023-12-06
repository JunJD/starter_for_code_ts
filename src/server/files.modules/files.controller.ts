import { FileType } from '../types'
import * as service from './files.serveice'

export const FilesCreate = async(params: FormData) => {
	const file = await service.FilesCreate(params)
	return file
}

export const FilesGet = async() => {
	const files = await service.FilesGet()
	return files
}

export const FilesDelete = async(id: FileType['id']) => {
	const del = await service.FilesDelete(id)
	return del
}
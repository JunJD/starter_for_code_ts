import { AssistantType } from './common/types/assistant'

const data: AssistantType[] = [
	{
		name: 'Rust学习助手',
		key: 'sgahuivh',
		avatar: {
			label: 'R',
			color: 'danger',
		},
		status: 'run',
		tag: 'learn',
		mode: {
			name: 'gpt-3.5-turbo'
		},
		date: '21 Oct 2022',
		title: 'Rust编译WASM',
		summary: 'JavaScript Web应用程序很难获得并保持可靠的…',
		body:`JavaScript Web应用程序很难获得并保持可靠的性能。JavaScript的动态类型系统和垃圾收集暂停没有帮助。如果您不小心偏离了JIT的正常路径，那么看似很小的代码更改可能会导致剧烈的性能下降。
		Rust为程序员提供了低级控制和可靠的性能。它没有困扰JavaScript的非确定性垃圾收集暂停。程序员可以控制间接、单态和内存布局。
		
		代码大小非常重要，因为.wasm必须通过网络下载。Rust缺少运行时，支持较小的.wasm大小，因为没有像垃圾收集器那样包含额外的膨胀。您只需为实际使用的函数支付(代码大小)`,
		color: 'warning.400',
	},
	{
		name: 'Rust学习助手',
		key: 'jajasasa',
		tag: 'learn',
		status: 'faild',
		mode: {
			name: 'gpt-3.5-turbo'
		},
		avatar: {
			label: 'R',
			color: 'neutral',
		},
		date: '06 Jul 2022',
		title: 'Rust官方文档',
		summary: '所有权是Rust最独特的特性，对语言的其他部分…',
		body:`JavaScript Web应用程序很难获得并保持可靠的性能。JavaScript的动态类型系统和垃圾收集暂停没有帮助。如果您不小心偏离了JIT的正常路径，那么看似很小的代码更改可能会导致剧烈的性能下降。
		Rust为程序员提供了低级控制和可靠的性能。它没有困扰JavaScript的非确定性垃圾收集暂停。程序员可以控制间接、单态和内存布局。
		
		代码大小非常重要，因为.wasm必须通过网络下载。Rust缺少运行时，支持较小的.wasm大小，因为没有像垃圾收集器那样包含额外的膨胀。您只需为实际使用的函数支付(代码大小)`,
		color: 'success.400',
	},
	{
		name: 'var code',
		key: 'sdaufdas',
		status: 'run',
		mode: {
			name: 'gpt-3.5-turbo'
		},
		tag: 'work',
		avatar: {
			label: 'v',
			color: 'success',
		},
		date: '16 May 2022',
		title: '大驼峰命名变量',
		summary: '"用户列表"可以命名为: UserList。',		body:`JavaScript Web应用程序很难获得并保持可靠的性能。JavaScript的动态类型系统和垃圾收集暂停没有帮助。如果您不小心偏离了JIT的正常路径，那么看似很小的代码更改可能会导致剧烈的性能下降。
		Rust为程序员提供了低级控制和可靠的性能。它没有困扰JavaScript的非确定性垃圾收集暂停。程序员可以控制间接、单态和内存布局。
		
		代码大小非常重要，因为.wasm必须通过网络下载。Rust缺少运行时，支持较小的.wasm大小，因为没有像垃圾收集器那样包含额外的膨胀。您只需为实际使用的函数支付(代码大小)`,
		color: 'primary.500',
	},
	{
		name: 'var code',
		key: 'cdasssas',
		status: 'success',
		mode: {
			name: 'gpt-3.5-turbo'
		},
		tag: 'work',
		avatar: {
			label: 'v',
			color: 'warning',
		},
		date: '10 May 2022',
		title: '小驼峰命名变量',
		summary: '"根据id获得用户列表"可以命名为: userListById。',		body:`JavaScript Web应用程序很难获得并保持可靠的性能。JavaScript的动态类型系统和垃圾收集暂停没有帮助。如果您不小心偏离了JIT的正常路径，那么看似很小的代码更改可能会导致剧烈的性能下降。
		Rust为程序员提供了低级控制和可靠的性能。它没有困扰JavaScript的非确定性垃圾收集暂停。程序员可以控制间接、单态和内存布局。
		
		代码大小非常重要，因为.wasm必须通过网络下载。Rust缺少运行时，支持较小的.wasm大小，因为没有像垃圾收集器那样包含额外的膨胀。您只需为实际使用的函数支付(代码大小)`,
		color: 'danger.500',
	},
	{
		name: '英语助手',
		key: 'sobasdas',
		status: 'success',
		mode: {
			name: 'gpt-3.5-turbo'
		},
		tag: 'learn',
		avatar: {
			label: '英',
			color: 'warning',
		},
		date: '13 Apr 2022',
		title: '学习简易语法',
		summary: '系动词：后需接表语如：be、seem、look、bec...',		body:`JavaScript Web应用程序很难获得并保持可靠的性能。JavaScript的动态类型系统和垃圾收集暂停没有帮助。如果您不小心偏离了JIT的正常路径，那么看似很小的代码更改可能会导致剧烈的性能下降。
		Rust为程序员提供了低级控制和可靠的性能。它没有困扰JavaScript的非确定性垃圾收集暂停。程序员可以控制间接、单态和内存布局。
		
		代码大小非常重要，因为.wasm必须通过网络下载。Rust缺少运行时，支持较小的.wasm大小，因为没有像垃圾收集器那样包含额外的膨胀。您只需为实际使用的函数支付(代码大小)`,
		color: 'danger.500',
	},
]

export const getAssistantList = ():AssistantType[] => {
	return data

}
export const getAssistantById = (id: AssistantType['key']): AssistantType | null => {
	return data.find(item=>item.key===id) || null
}

export const getModelList = async()=> {
	const response = await fetch('https://run.dingjunjie.com/v1/models', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			authorization: 'Bearer ' + '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',
			'OpenAI-Beta': 'assistants=v1'
		},
	})
	const list = await response.json()
	return list
}
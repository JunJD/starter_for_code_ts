export const getDevice = () => {
	// 获取当前设置
	const userAgentStr = navigator.userAgent
	const userAgentObj = {
		osName: '',         // 操作系统名称
		osVersion: '',      // 操作系统版本
	}
  
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const deviceReg: any = {
		'Windows': /Windows/,
		'Mac': /Macintosh/,
		'iPhone': /iPhone/,
		'iPad': /iPad/,
		'Android': /Android/
	}
	for(const key in deviceReg){
		if(deviceReg[key].test(userAgentStr)){
			userAgentObj.osName = key
			if(key === 'Windows'){
				userAgentObj.osVersion = userAgentStr.split('Windows NT ')[1].split(';')[0]
			} else if(key === 'Mac') {
				userAgentObj.osVersion = userAgentStr.split('Mac OS X ')[1].split(')')[0]
			} else if(key === 'iPhone') {
				userAgentObj.osVersion = userAgentStr.split('iPhone OS ')[1].split(' ')[0]
			} else if(key === 'iPad') {
				userAgentObj.osVersion = userAgentStr.split('iPad; CPU OS ')[1].split(' ')[0]
			} else if(key === 'Android') {
				userAgentObj.osVersion = userAgentStr.split('Android ')[1].split(';')[0]
			}
		}
	}
    
	return userAgentObj
}

export const getDeviceName = () => {
	return getDevice().osName
}
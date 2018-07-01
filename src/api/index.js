const delay = 2000

class Api {
	static fetchLogin(user, pass) {
		return new Promise((resolve, reject) => {
			setTimeout(
				() =>
					user === 'root' && pass === 'root'
						? resolve({ session: 'abc123', name: 'John Doe' })
						: reject({ message: 'Not authorized' }),
				delay
			)
		})
	}

	static fetchData() {
		return fetch('https://picsum.photos/list').then(response => {
			if (response.status >= 200 && response.status < 300) {
				return response.json()
			} else {
				return Promise.reject(response)
			}
		})
	}
}

export default Api

 export const post = async (url, body) => {
	const response = await fetch(url,{
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json"
		}
	})
	return !response.ok ? {ok: false, message: "Server error"} : response.json()
}
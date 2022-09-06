import { post } from '../http/http'
import env from "../../Config/env"

const PersonRepositoy = async (body) => {
	return await post(`${env.URL_API}`, body)
}

export default PersonRepository
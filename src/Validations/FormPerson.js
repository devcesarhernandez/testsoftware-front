export const getValueForm = e => {
	return {[e.target.name]: e.target.value}
}

const itemsRequires = [
	'nombre',
	'apellidoPaterno',
	'identificacion'
]

const validate = values => {
	const errors = {}
	itemsRequires.forEach( item => {
		if (!values[item]) errors[item] = 'Este campo es requerido.' 
	})

	return errors
}

export default validate
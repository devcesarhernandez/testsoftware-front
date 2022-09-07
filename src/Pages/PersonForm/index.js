import { useState } from 'react'
import { Grid, Box, TextField, Button } from '@mui/material'
import Img from '../../assets/undraw_personal_info_re_ur1n.svg'
import validate, { getValueForm } from '../../Validations/FormPerson'
import PersonRepository from '../../Infrastructure/repository/PersonRepository'

const PersonForm = () => {
	const [enviando, setEnviando] = useState(false);
	const [dataForm, setDataForm] = useState({})
	const handleChange = e => setDataForm({ ...dataForm, ...getValueForm(e) })
	const [errors, setErrors] = useState({error: false})
	const handleSubmit = e => {
		e.preventDefault()
		setErrors(validate(dataForm))
		if(!Object.keys(validate(dataForm)).length) {
			setEnviando(true)
			PersonRepository(dataForm)
				.then( response => {
					if(response.id) setDataForm({})
					else setErrors(validate(dataForm))
				})
				.finally( _ => setEnviando(false))
		}
	}
	return (
		<Grid container spacing={2} sx={{ height: '100vh', p: 4 }} justifyContent="center" alignItems="center">
			<Grid item md={6}>
				<img src={Img} width="100%" />
			</Grid>
			<Grid item md={6}>
				<Box component="form" onSubmit={handleSubmit} >
					<TextField 
						fullWidth 
						error={ !errors?.error && Boolean(errors.nombre) }
						sx={{ mb: 3 }}
						id='nombre'
						name='nombre'
						label='Nombre'
						variant='outlined' 
						value={dataForm.nombre || ''}
						onChange={handleChange}
						helperText={errors.nombre}
					/>
					<TextField 
						fullWidth 
						error={ !errors?.error && Boolean(errors.apellidoPaterno) }
						sx={{ mb: 3 }}
						id='apellidoPaterno'
						name='apellidoPaterno'
						label='Apellido Paterno'
						variant='outlined'
						value={dataForm.apellidoPaterno || ''}
						onChange={handleChange}
						helperText={errors.apellidoPaterno}
					/>
					<TextField 
						fullWidth 
						error={ !errors?.error && Boolean(errors.apellidoMaterno) }
						sx={{ mb: 3 }}
						id='apellidoMaterno'
						name='apellidoMaterno'
						label='Apellido Materno'
						variant='outlined'
						value={dataForm.apellidoMaterno || ''}
						onChange={handleChange}
						helperText={errors.apellidoMaterno}
					/>
					<TextField 
						fullWidth 
						error={ !errors?.error && Boolean(errors.identificacion) }
						sx={{ mb: 3 }}
						id='identificacion'
						name='identificacion'
						label='Identificación'
						variant='outlined'
						value={dataForm.identificacion || ''}
						onChange={handleChange}
						helperText={errors.identificacion}
					/>
					<Button 
						disabled={enviando}
						type="submit" 
						variant="contained" 
						sx={{ mx: 'auto', display: 'inherit', px: 4 }} 
					>
						Enviar
					</Button>
				</Box>
			</Grid>
		</Grid>
	)
}

export default PersonForm
import { useState } from 'react'
import { Grid, Box, TextField, Button } from '@mui/material'
import Img from '../../assets/undraw_personal_info_re_ur1n.svg'
import validate, { getValueForm } from '../../Validations/FormPerson'

const PersonForm = () => {
	const [dataForm, setDataForm] = useState({})
	const handleChange = e => setDataForm({ ...dataForm, ...getValueForm(e) })
	const [errors, setErrors] = useState({error: false})
	const handleSubmit = e => {
		e.preventDefault()
		setErrors(validate(dataForm))
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
						error={ !errors?.error && errors.nombre }
						sx={{ mb: 3 }}
						id='nombre'
						name='nombre'
						label='Nombre'
						variant='outlined' 
						onChange={handleChange}
						helperText={errors.nombre}
					/>
					<TextField 
						fullWidth 
						error={ !errors?.error && errors.apellidoPaterno }
						sx={{ mb: 3 }}
						id='apellidoPaterno'
						name='apellidoPaterno'
						label='Apellido Paterno'
						variant='outlined'
						onChange={handleChange}
						helperText={errors.apellidoPaterno}
					/>
					<TextField 
						fullWidth 
						error={ !errors?.error && errors.apellidoMaterno }
						sx={{ mb: 3 }}
						id='apellidoMaterno'
						name='apellidoMaterno'
						label='Apellido Materno'
						variant='outlined'
						onChange={handleChange}
						helperText={errors.apellidoMaterno}
					/>
					<TextField 
						fullWidth 
						error={ !errors?.error && errors.identificacion }
						sx={{ mb: 3 }}
						id='identificacion'
						name='identificacion'
						label='Identificación'
						variant='outlined'
						onChange={handleChange}
						helperText={errors.identificacion}
					/>
					<Button 
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
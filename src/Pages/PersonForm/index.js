import { Grid, Box, TextField, Button } from '@mui/material'
import Img from '../../assets/undraw_personal_info_re_ur1n.svg'

const PersonForm = () => {
	return (
		<Grid container spacing={2} sx={{ height: '100vh', p: 4 }} justifyContent="center" alignItems="center">
			<Grid item md={6}>
				<img src={Img} width="100%" />
			</Grid>
			<Grid item md={6}>
				<Box component="form">
					<TextField 
						fullWidth 
						sx={{ mb: 3 }}
						id='nombre'
						name='nombre'
						label='Nombre'
						variant='outlined'
					/>
					<TextField 
						fullWidth 
						sx={{ mb: 3 }}
						id='apellidoPaterno'
						name='apellidoPaterno'
						label='Apellido Paterno
						' variant='outlined
					' />
					<TextField 
						fullWidth 
						sx={{ mb: 3 }}
						id='apellidoMaterno'
						name='apellidoMaterno'
						label='Apellido Materno
						' variant='outlined
					' />
					<TextField 
						fullWidth 
						sx={{ mb: 3 }}
						id='identificacion'
						name='identificacion'
						label='Identificación'
						variant='outlined'
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
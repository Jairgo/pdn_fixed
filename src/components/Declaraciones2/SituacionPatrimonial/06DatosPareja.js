import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styleSecciones from '../styleSecciones';

import DatosReservados from '../DatosReservados';

const useStyles = makeStyles(styleSecciones);

export default function MenuSuperior() {
	const classes = useStyles();

	return (
		<Grid container spacing={2} className={classes.rootPrincipal}>
			<Grid item xs={12}>
				<Typography className={classes.tituloSeccion} align="center">
					6. DATOS DE LA PAREJA
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<DatosReservados />
			</Grid>
		</Grid>
	);
}
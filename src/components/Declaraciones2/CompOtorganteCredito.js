import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styleSecciones from './styleSecciones';
const useStyles = makeStyles(styleSecciones);

export default function(props) {
	const classes = useStyles();
	const { otorganteCredito } = props;

	return otorganteCredito.map((otorgante, idx) => {
		return (
			<Grid item xs={12} key={'oc-' + idx}>
				{otorgante.tipoPersona === 'MORAL' ? (
					<Grid container space={1}>
						<Grid item xs={12} md={2}>
							<Typography className={classes.cardTitle}>TIPO PERSONA:</Typography>
							<Typography className={classes.card}>MORAL</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>RFC</Typography>
							<Typography className={classes.card}>{otorgante.rfc}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>
								NOMBRE O RAZÓN SOCIAL DEL TRANSMISOR DE LA PROPIEDAD
							</Typography>
							<Typography className={classes.card}>{otorgante.nombreRazonSocial}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>
								RELACIÓN DEL TRANSMISOR DE LA PROPIEDAD CON EL TITULAR
							</Typography>
							<Typography className={classes.card}>DATO RESERVADO</Typography>
						</Grid>
					</Grid>
				) : (
					<Grid container space={1}>
						<Grid item xs={12} md={2}>
							<Typography className={classes.cardTitle}>TIPO PERSONA:</Typography>
							<Typography className={classes.card}>FÍSICA</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>RFC</Typography>
							<Typography className={classes.card}>DATO RESERVADO</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>
								NOMBRE O RAZÓN SOCIAL DEL TRANSMISOR DE LA PROPIEDAD
							</Typography>
							<Typography className={classes.card}>DATO RESERVADO</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>
								RELACIÓN DEL TRANSMISOR DE LA PROPIEDAD CON EL TITULAR
							</Typography>
							<Typography className={classes.card}>DATO RESERVADO</Typography>
						</Grid>
					</Grid>
				)}
			</Grid>
		);
	});
}

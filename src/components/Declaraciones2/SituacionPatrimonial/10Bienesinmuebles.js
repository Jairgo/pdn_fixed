import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styleSecciones from '../styleSecciones';

import DatosNoRegistrados from '../DatosNoRegistrados';
import DatosReservados from '../DatosReservados';
import Transmisor from '../CompTransmisor';
import { getUnidad } from '../utils';
import { sumary, expansion } from '../utils';

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(styleSecciones);

export function BienInmuble(props) {
	const classes = useStyles();
	const exp = expansion();
	const sum = sumary();
	const { inmuebles } = props;

	return inmuebles.map((inm, idx) => {
		return (
			<ExpansionPanel key={'inm-' + idx}>
				<ExpansionPanelSummary
					classes={sum}
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={exp.heading}>
						<strong>{inm.tipoInmueble.valor}</strong>
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Grid container spacing={1}>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>TIPO DE INMUEBLE:</Typography>
							<Typography className={classes.card}>{inm.tipoInmueble.valor}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>TITULAR DEL INMUEBLE:</Typography>
							<Typography component="div" className={classes.card}>
								<ul style={{ listStyle: 'none' }}>
									{inm.titular.map((tit, idx) => {
										return <li key={'tit-' + idx}>{tit.valor}</li>;
									})}
								</ul>
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>
								PORCENTAJE DE PROPIEDAD DEL DECLARANTE CONFORME A ESCRITURACIÓN O CONTRATO:
							</Typography>
							<Typography component="div" className={classes.card}>
								{inm.porcentajePropiedad}%
							</Typography>
						</Grid>

						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>SUPERFICIE DEL TERRENO</Typography>
							<Typography className={classes.card}>
								{inm.superficieTerreno.valor} {getUnidad(inm.superficieTerreno.unidad)}
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>SUPERFICIE DE CONSTRUCCIÓN</Typography>
							<Typography className={classes.card}>
								{inm.superficieConstruccion.valor} {getUnidad(inm.superficieConstruccion.unidad)}
							</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>FORMA DE ADQUISICIÓN</Typography>
							<Typography className={classes.card}>{inm.formaAdquisicion.valor}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>FORMA DE PAGO</Typography>
							<Typography className={classes.card}>{inm.formaPago}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>VALOR DE ADQUISICIÓN</Typography>
							<Typography className={classes.card}>${inm.valorAdquisicion.valor} </Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>TIPO DE MONEDA</Typography>
							<Typography className={classes.card}>{inm.valorAdquisicion.moneda}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>FECHA DE ADQUISICIÓN DEL INMUEBLE</Typography>
							<Typography className={classes.card}>{inm.fechaAdquiscion}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>
								DATOS DEL REGISTRO PÚBLICO DE LA PROPIEDAD: FOLIO REAL U OTRO DATO QUE PERMITA SU
								IDENTIFICACIÓN
							</Typography>
							<Typography className={classes.card}>DATO RESERVADO</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>
								¿EL VALOR DE ADQUISICIÓN DEL INMUEBLE ES CONFORME A?
							</Typography>
							<Typography className={classes.card}>{inm.valorConformeA}</Typography>
						</Grid>

						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>UBICACIÓN DEL INMUEBLE</Typography>
							<Typography className={classes.card}>DATO RESERVADO</Typography>
						</Grid>
						{inm.motivoBaja && (
							<Grid item xs={12} md={4}>
								<Typography className={classes.cardTitle}>
									EN CASO DE BAJA DEL INMUEBLE INCLUIR MOTIVO
								</Typography>
								<Typography className={classes.card}>{inm.motivoBaja.valor}</Typography>
							</Grid>
						)}

						<Grid item xs={12} style={{ textAlign: 'center' }}>
							<Typography className={classes.cardTitle}>TRANSMISOR(ES)</Typography>
						</Grid>
						{inm.transmisor && <Transmisor transmisor={inm.transmisor} />}
					</Grid>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	});
}

export default function MenuSuperior(props) {
	const classes = useStyles();
	const { data } = props;

	const inmuebles = data.bienInmueble.filter((i) => i.titular.length === 1 && i.titular[0].clave === 'DEC');

	return (
		<Grid container spacing={2} className={classes.rootPrincipal}>
			<Grid item xs={12}>
				<Typography className={classes.tituloSeccion} align="center">
					10. BIENES INMUEBLES (SITUACIÓN ACTUAL)
				</Typography>
			</Grid>
			<Grid item xs={12}>
				{data.ninguno && <DatosNoRegistrados />}
				{!data.ninguno && (inmuebles.length ? <BienInmuble inmuebles={inmuebles} /> : <DatosReservados />)}
			</Grid>
		</Grid>
	);
}
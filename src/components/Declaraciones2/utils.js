import React from 'react';
import { Grid, LinearProgress, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import { TextField, FormControl, MenuItem } from '@material-ui/core';

import { makeStyles, withStyles, lighten } from '@material-ui/core/styles';
import style from './styleSecciones';

import log from 'loglevel';
import remote from 'loglevel-plugin-remote';

const customJSON = (log) => ({
	msg: log.message,
	level: log.level.label,
	stacktrace: log.stacktrace
});

remote.apply(log, {
	method: 'POST',
	format: customJSON,
	url: process.env.REACT_APP_S1_BACKEND + '/logger'
});

log.enableAll();

export const error = (msg) => {
	log.error(msg);
};

export const info = (msg) => {
	log.info(msg);
};

const useStyles = makeStyles(style);

const BorderLinearProgress = withStyles({
	root: {
		height: 10,
		backgroundColor: lighten('#856404', 0.5)
	},
	bar: {
		borderRadius: 20,
		backgroundColor: '#004085'
	}
})(LinearProgress);

export const getMoneda = (valor, moneda) => {
	return new Intl.NumberFormat('es-MX', {
		style: 'currency',
		currency: 'MXN'
	}).format(valor);
};

export const getUnidad = (unidad) => {
	switch (unidad) {
		case 'm2':
			return (
				<span>
					m<sup>2</sup>
				</span>
			);
		case 'km2':
			return (
				<span>
					km<sup>2</sup>
				</span>
			);
		default:
			return unidad;
	}
};

export const getMorales = (elements) => {
	return elements.filter((i) => i.tipoPersona !== 'FISICA');
};

/************** CSS *******************/
/************** Expansion *******************/
export const sumary = makeStyles((theme) => ({
	root: {
		backgroundColor: '#83dfff',
		textTransform: 'uppercase'
	}
}));

export const expansion = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular
	}
}));
/************** Expansion *******************/
export function Ubicacion(props) {
	const classes = useStyles();
	// const { pais, entidadFederativa } = props.ubicacion;

	const pais = typeof props.ubicacion === 'undefined' ? undefined : props.ubicacion.pais;
	const entidadFederativa = typeof props.ubicacion === 'undefined' ? undefined : props.ubicacion.entidadFederativa;
	return (
		<Grid item xs={12}>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Typography className={classes.tituloSubSeccion} align="center">
						LUGAR DONDE SE UBICA
					</Typography>
				</Grid>
				<Grid item xs={12} md={4}>
					<Typography className={classes.cardTitle}>UBICACI??N:</Typography>
					<Typography className={classes.card}>
						{typeof pais === 'undefined' ? 'DESCONOCIDO' : pais === 'MX' ? 'EN M??XICO' : 'EN EL EXTRANJERO'}
					</Typography>
				</Grid>
				{pais === 'MX' ? (
					<Grid item xs={12} md={8}>
						<Typography className={classes.cardTitle}>ENTIDAD FEDERATIVA:</Typography>
						<Typography className={classes.card}>{entidadFederativa.valor}</Typography>
					</Grid>
				) : (
					<Grid item xs={12} md={8}>
						<Typography className={classes.cardTitle}>PA??S DONDE SE LOCALIZA:</Typography>
						<Typography className={classes.card}>{pais}</Typography>
					</Grid>
				)}
			</Grid>
		</Grid>
	);
}

export function Porcentaje(props) {
	const classes = useStyles();
	const { porcentaje, titulo } = props;

	return (
		<Grid item xs={12}>
			<Typography className={classes.cardTitle}>{titulo}:</Typography>
			<Typography component="div" className={classes.card} align="center">
				<strong>{porcentaje}%</strong> <br />
				<BorderLinearProgress variant="determinate" value={porcentaje} />
			</Typography>
		</Grid>
	);
}

export function Divider() {
	return (
		<Grid item xs={12}>
			<hr style={{ border: '4px solid #f2f2f2' }} />
		</Grid>
	);
}

export function DomicilioReservado() {
	return (
		<Grid item xs={12}>
			<hr style={{ border: '4px solid #f2f2f2' }} />
		</Grid>
	);
}

export function Disclaimer() {
	const sel = useStyles();
	return (
		<Paper className={sel.rootPrincipal}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Typography className={sel.alertSuccess}>
						Estimado-a ciudadano-a:
						<br />
						<br /> De acuerdo con la{' '}
						<strong>
							generalidad decimosegunda de las normas y el instructivo para el llenado y la presentaci??n
							del formato de declaraciones de situaci??n patrimonial y de intereses
						</strong>{' '}
						(que puede consultar en la siguiente direcci??n:{' '}
						<a href="https://www.dof.gob.mx/nota_detalle.php?codigo=5573194&fecha=23/09/2019">
							https://www.dof.gob.mx/nota_detalle.php?codigo=5573194&fecha=23/09/2019
						</a>
						), aquellos{' '}
						<strong>Servidores P??blicos que tengan nivel menor a Jefe de departamento u hom??logo</strong> en
						los Entes P??blicos y sus hom??logos en las entidades federativas,{' '}
						<strong>
							presentar??n declaraci??n patrimonial y de intereses, reportando los siguientes rubros
						</strong>
						:
						<br />
						<br />
						Para efecto de la <strong>declaraci??n patrimonial</strong>, se reportar??n los siguientes rubros:
						<ol style={{ fontWeight: 'bold' }}>
							<li>Datos Generales.</li>
							<li>Domicilio del Declarante.</li>
							<li>Datos Curriculares.</li>
							<li>Datos del empleo, cargo o comisi??n.</li>
							<li>Experiencia laboral.</li>
							<li>Ingresos netos del Declarante.</li>
							<li>
								??Te desempe??aste como servidor p??blico el a??o inmediato anterior? (solo en la
								declaraci??n de inicio y conclusi??n) [sic].
							</li>
						</ol>
						Con base en lo anterior, los datos de la persona servidora p??blica de su inter??s
						correspondientes a esta secci??n no est??n disponibles. Gracias por su comprensi??n.
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
}

export function CompDomicilio(props) {
	const classes = useStyles();
	const { domicilioMexico, domicilioExtranjero } = props;

	return (
		<Grid item xs={12}>
			{domicilioMexico && (
				<Grid item xs={12}>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Typography className={classes.cardTitle} align="center">
								DOMICILIO EN M??XICO
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>CALLE</Typography>
							<Typography className={classes.card}>{domicilioMexico.calle}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>N??MERO EXTERIOR</Typography>
							<Typography className={classes.card}>{domicilioMexico.numeroExterior}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>N??MERO INTERIOR</Typography>
							<Typography className={classes.card}>{domicilioMexico.numeroInterior}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>COLONIA/LOCALIDAD</Typography>
							<Typography className={classes.card}>{domicilioMexico.coloniaLocalidad}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>MUNICIPIO/ALCALD??A</Typography>
							<Typography className={classes.card}>{domicilioMexico.municipioAlcaldia.valor}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>ENTIDAD FEDERATIVA</Typography>
							<Typography className={classes.card}>{domicilioMexico.entidadFederativa.valor}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>C??DIGO POSTAL</Typography>
							<Typography className={classes.card}>{domicilioMexico.codigoPostal}</Typography>
						</Grid>
					</Grid>
				</Grid>
			)}
			{domicilioExtranjero && (
				<Grid item xs={12}>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Typography className={classes.cardTitle} align="center">
								DOMICILIO EN EL EXTRANJERO
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>CALLE</Typography>
							<Typography className={classes.card}>{domicilioExtranjero.calle}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>N??MERO EXTERIOR</Typography>
							<Typography className={classes.card}>{domicilioExtranjero.numeroExterior}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>N??MERO INTERIOR</Typography>
							<Typography className={classes.card}>{domicilioExtranjero.numeroInterior}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>CIUDAD/LOCALIDAD</Typography>
							<Typography className={classes.card}>{domicilioExtranjero.ciudadLocalidad}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>ESTADO/PROVINCIA</Typography>
							<Typography className={classes.card}>{domicilioExtranjero.estadoProvincia}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>PA??S</Typography>
							<Typography className={classes.card}>{domicilioExtranjero.pais}</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardTitle}>C??DIGO POSTAL</Typography>
							<Typography className={classes.card}>{domicilioExtranjero.codigoPostal}</Typography>
						</Grid>
					</Grid>
				</Grid>
			)}
		</Grid>
	);
}

export function SelectElement({ formControl, value, handle, data, label, name }) {
	return (
		<FormControl className={formControl}>
			<TextField id={name} name={name} margin="normal" select label={label} value={value} onChange={handle}>
				{data.map((q) => {
					return (
						<MenuItem key={name + q.clave} value={q.clave}>
							{q.valor}
						</MenuItem>
					);
				})}
			</TextField>
		</FormControl>
	);
}

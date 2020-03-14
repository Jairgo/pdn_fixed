import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styleSecciones from '../styleSecciones';
import { sumary, expansion, Divider, getMoneda } from '../utils';

import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(styleSecciones);

const ActividadIndustrial = (props) => {
	const classes = useStyles();
	const exp = expansion();
	const sum = sumary();

	const { actividadIndustialComercialEmpresarial } = props;

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary
				classes={sum}
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Grid container spacing={1}>
					<Grid item xs={12} md={9}>
						<Typography className={exp.heading}>
							<strong>
								II.1.- POR ACTIVIDAD INDUSTRIAL, COMERCIAL Y / O EMPRESARIAL (DESPUÉS DE IMPUESTOS)
							</strong>
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography className={exp.heading}>
							<strong>
								{getMoneda(actividadIndustialComercialEmpresarial.remuneracionTotal.valor)}{' '}
								{actividadIndustialComercialEmpresarial.remuneracionTotal.moneda}
							</strong>
						</Typography>
					</Grid>
				</Grid>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Grid container spacing={1}>
					<Grid item xs={12} md={5}>
						<Typography className={classes.cardTitle}>NOMBRE O RAZÓN SOCIAL:</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<Typography className={classes.cardTitle}>TIPO DE NEGOCIO:</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography className={classes.cardTitle}>INGRESO:</Typography>
					</Grid>
					{actividadIndustialComercialEmpresarial.actividades.map((act, idx) => {
						return (
							<Grid container spacing={1} key={'act-' + idx}>
								<Grid item xs={12} md={5}>
									<Typography className={classes.card}>{act.nombreRazonSocial}</Typography>
								</Grid>
								<Grid item xs={12} md={4}>
									<Typography className={classes.card}>{act.tipoNegocio}</Typography>
								</Grid>
								<Grid item xs={12} md={3}>
									<Typography className={classes.card}>
										{getMoneda(act.remuneracion.valor)} {act.remuneracion.moneda}
									</Typography>
								</Grid>
							</Grid>
						);
					})}
				</Grid>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

const ActividadFinanciera = (props) => {
	const classes = useStyles();
	const exp = expansion();
	const sum = sumary();

	const { actividadFinanciera } = props;

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary
				classes={sum}
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Grid container spacing={1}>
					<Grid item xs={12} md={9}>
						<Typography className={exp.heading}>
							<strong>
								II.2.- POR ACTIVIDAD FINANCIERA (RENDIMIENTOS O GANANCIAS) (DESPUÉS DE IMPUESTOS)
							</strong>
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography className={exp.heading}>
							<strong>
								{getMoneda(actividadFinanciera.remuneracionTotal.valor)}{' '}
								{actividadFinanciera.remuneracionTotal.moneda}
							</strong>
						</Typography>
					</Grid>
				</Grid>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Grid container spacing={1}>
					<Grid item xs={12} md={9}>
						<Typography className={classes.cardTitle}>
							TIPO DE INSTRUMENTO QUE GENERÓ EL RENDIMIENTO O GANANCIA
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography className={classes.cardTitle}>INGRESO:</Typography>
					</Grid>
					{actividadFinanciera.actividades.map((act, idx) => {
						return (
							<Grid container spacing={1} key={'act-' + idx}>
								<Grid item xs={12} md={9}>
									<Typography className={classes.card}>{act.tipoInstrumento.valor}</Typography>
								</Grid>
								<Grid item xs={12} md={3}>
									<Typography className={classes.card}>
										{getMoneda(act.remuneracion.valor)} {act.remuneracion.moneda}
									</Typography>
								</Grid>
							</Grid>
						);
					})}
				</Grid>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

const ServiciosProfecionales = (props) => {
	const classes = useStyles();
	const exp = expansion();
	const sum = sumary();

	const { serviciosProfesionales } = props;

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary
				classes={sum}
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Grid container spacing={1}>
					<Grid item xs={12} md={9}>
						<Typography className={exp.heading}>
							<strong>
								II.3.- POR SERVICIOS PROFESIONALES, CONSEJOS, CONSULTORÍAS Y / O ASESORÍAS (DESPUÉS DE
								IMPUESTOS)
							</strong>
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography className={exp.heading}>
							<strong>
								{getMoneda(serviciosProfesionales.remuneracionTotal.valor)}{' '}
								{serviciosProfesionales.remuneracionTotal.moneda}
							</strong>
						</Typography>
					</Grid>
				</Grid>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Grid container spacing={1}>
					<Grid item xs={12} md={9}>
						<Typography className={classes.cardTitle}>TIPO DE SERVICIO PRESTADO</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography className={classes.cardTitle}>INGRESO:</Typography>
					</Grid>
					{serviciosProfesionales.servicios.map((serv, idx) => {
						return (
							<Grid container spacing={1} key={'act-' + idx}>
								<Grid item xs={12} md={9}>
									<Typography className={classes.card}>{serv.tipoServicio}</Typography>
								</Grid>
								<Grid item xs={12} md={3}>
									<Typography className={classes.card}>
										{getMoneda(serv.remuneracion.valor)} {serv.remuneracion.moneda}
									</Typography>
								</Grid>
							</Grid>
						);
					})}
				</Grid>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

const OtrosIngresos = (props) => {
	const classes = useStyles();
	const exp = expansion();
	const sum = sumary();

	const { otrosIngresos } = props;

	return (
		<ExpansionPanel>
			<ExpansionPanelSummary
				classes={sum}
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
				id="panel1a-header"
			>
				<Grid container spacing={1}>
					<Grid item xs={12} md={9}>
						<Typography className={exp.heading}>
							<strong>
								II.4.- OTROS INGRESOS NO CONSIDERADOS A LOS ANTERIORES (DESPUÉS DE IMPUESTOS)
							</strong>
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography className={exp.heading}>
							<strong>
								{getMoneda(otrosIngresos.remuneracionTotal.valor)}{' '}
								{otrosIngresos.remuneracionTotal.moneda}
							</strong>
						</Typography>
					</Grid>
				</Grid>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				<Grid container spacing={1}>
					<Grid item xs={12} md={9}>
						<Typography className={classes.cardTitle}>
							TIPO DE INGRESO (ARRENDAMIENTO, REGALÍA, SORTEOS, CONCURSOS, DONACIONES, SEGUROS DE VIDA,
							ETC.)
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography className={classes.cardTitle}>INGRESO:</Typography>
					</Grid>
					{otrosIngresos.ingresos.map((ing, idx) => {
						return (
							<Grid container spacing={1} key={'act-' + idx}>
								<Grid item xs={12} md={9}>
									<Typography className={classes.card}>{ing.tipoIngreso}</Typography>
								</Grid>
								<Grid item xs={12} md={3}>
									<Typography className={classes.card}>
										{getMoneda(ing.remuneracion.valor)} {ing.remuneracion.moneda}
									</Typography>
								</Grid>
							</Grid>
						);
					})}
				</Grid>
			</ExpansionPanelDetails>
		</ExpansionPanel>
	);
};

export default function (props) {
	const classes = useStyles();
	const exp = expansion();
	const sum = sumary();
	const { data } = props;

	return (
		<Grid container spacing={2} className={classes.rootPrincipal}>
			<Grid item xs={12}>
				<Typography className={classes.tituloSeccion} align="center">
					8. INGRESOS NETOS DEL DECLARANTE, PAREJA Y/O DEPENDIENTES ECONÓMICOS (SITUACIÓN ACTUAL)
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Paper className={classes.paper}>
					<Grid container spacing={1}>
						<Grid item xs={12} md={9}>
							<Typography className={classes.cardTitle}>
								I.- REMUNERACIÓN MENSUAL NETA DEL DECLARANTE POR SU CARGO PÚBLICO (POR CONCEPTO DE
								SUELDOS, HONORARIOS, COMPENSACIONES, BONOS Y OTRAS PRESTACIONES) (CANTIDADES NETAS
								DESPUÉS DE IMPUESTOS)
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.card}>
								{getMoneda(data.remuneracionMensualCargoPublico.valor)}{' '}
								{data.remuneracionMensualCargoPublico.moneda}
							</Typography>
						</Grid>
						<Divider />
						<Grid item xs={12} md={9}>
							<Typography className={classes.cardTitle}>
								II.- OTROS INGRESOS MENSUALES DEL DECLARANTE (SUMA DEL II.1 AL II.4)
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.card}>
								{getMoneda(data.otrosIngresosMensualesTotal.valor)}{' '}
								{data.otrosIngresosMensualesTotal.moneda}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<ActividadIndustrial
								actividadIndustialComercialEmpresarial={data.actividadIndustialComercialEmpresarial}
							/>
							<ActividadFinanciera actividadFinanciera={data.actividadFinanciera} />
							<ServiciosProfecionales serviciosProfesionales={data.serviciosProfesionales} />
							<OtrosIngresos otrosIngresos={data.otrosIngresos} />
						</Grid>
						<Divider />
						<Grid item xs={12} md={9}>
							<Typography className={classes.cardTitle}>
								A.- INGRESO MENSUAL NETO DEL DECLARANTE (SUMA DEL NUMERAL I Y II)
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.card}>
								{getMoneda(data.ingresoMensualNetoDeclarante.valor)}{' '}
								{data.ingresoMensualNetoDeclarante.moneda}
							</Typography>
						</Grid>

						<Grid item xs={12} md={9}>
							<Typography className={classes.cardTitle}>
								B.- INGRESO MENSUAL NETO DE LA PAREJA Y / O DEPENDIENTES ECONÓMICOS (DESPUÉS DE
								IMPUESTOS)
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.cardReserved}>DATO RESERVADO</Typography>
						</Grid>

						<Grid item xs={12} md={9}>
							<Typography className={classes.cardTitle}>
								C.- TOTAL DE INGRESOS MENSUALES NETOS PERCIBIDOS POR EL DECLARANTE, PAREJA Y / O
								DEPENDIENTES ECONÓMICOS (SUMA DE LOS APARTADOS A Y B)
							</Typography>
						</Grid>
						<Grid item xs={12} md={3}>
							<Typography className={classes.card}>
								{getMoneda(data.totalIngresosMensualesNetos.valor)}{' '}
								{data.totalIngresosMensualesNetos.moneda}
							</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
}

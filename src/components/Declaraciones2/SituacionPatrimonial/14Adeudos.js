import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styleSecciones from '../styleSecciones';
import { Divider } from '../utils';

import DatosNoRegistrados from '../DatosNoRegistrados';
import DatosReservados from '../DatosReservados';
import { sumary, expansion, getMoneda } from '../utils';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(styleSecciones);

function Adeudos(props) {
	const classes = useStyles();
	const exp = expansion();
	const sum = sumary();
	const { adeudos } = props;
	return adeudos.map((obj, idx) => {
		return (
			<ExpansionPanel key={'adeudo-' + idx}>
				<ExpansionPanelSummary
					classes={sum}
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={exp.heading}>
						<strong>{obj.tipoAdeudo.valor}</strong>
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Grid container spacing={1}>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>TIPO DE ADEUDO:</Typography>
							<Typography className={classes.card}>{obj.tipoAdeudo.valor}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>TITULAR DEL ADEUDO:</Typography>
							<Typography className={classes.card}>
								{obj.titular.map((tit, idx) => {
									return <span key={'tit-' + idx}>{tit.valor}</span>;
								})}
							</Typography>
						</Grid>

						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>NÚMERO DE CUENTA O CONTRATO:</Typography>
							<Typography className={classes.cardReserved}>DATO RESERVADO</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>
								FECHA DE ADQUISICIÓN DEL ADEUDO / PASIVO
							</Typography>
							<Typography className={classes.card}>{obj.fechaAdquision}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>MONTO ORIGINAL DEL ADEUDO / PASIVO</Typography>
							<Typography className={classes.card}>{getMoneda(obj.montoOriginal.valor)}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>TIPO DE MONEDA</Typography>
							<Typography className={classes.card}>{obj.montoOriginal.moneda}</Typography>
						</Grid>
						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>SALDO INSOLUTO (SITUACIÓN ACTUAL)</Typography>
							<Typography className={classes.cardReserved}>DATO RESERVADO</Typography>
						</Grid>

						<Grid item xs={12} md={4}>
							<Typography className={classes.cardTitle}>¿DÓNDE SE LOCALIZA EL ADEUDO?</Typography>
							<Typography className={classes.card}>
								{obj.localizacionAdeudo.pais === 'MX' ? 'EN MÉXICO' : 'EN EL EXTRANJERO'}
							</Typography>
						</Grid>

						{obj.localizacionAdeudo.pais !== 'MX' && (
							<Grid item xs={12} md={4}>
								<Typography className={classes.cardTitle}>PAÍS DÓNDE SE LOCALIZA</Typography>
								<Typography className={classes.card}>{obj.localizacionAdeudo.pais}</Typography>
							</Grid>
						)}
						<Divider />

						<Grid item xs={12} style={{ textAlign: 'center' }}>
							<Typography className={classes.cardTitle}>OTORGANTE DEL CRÉDITO</Typography>
						</Grid>
						{obj.otorganteCredito.tipoPersona === 'MORAL' ? (
							<Grid item xs={12}>
								<Grid container spacing={1}>
									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>TIPO PERSONA:</Typography>
										<Typography className={classes.card}>
											{obj.otorganteCredito.tipoPersona}
										</Typography>
									</Grid>

									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>
											NOMBRE / INSTITUCIÓN O RAZÓN SOCIAL
										</Typography>
										<Typography className={classes.card}>
											{obj.otorganteCredito.nombreInstitucion}
										</Typography>
									</Grid>

									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>RFC </Typography>
										<Typography className={classes.card}>{obj.otorganteCredito.rfc}</Typography>
									</Grid>
								</Grid>
							</Grid>
						) : (
							<Grid item xs={12}>
								<Grid container spacing={1}>
									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>TIPO PERSONA:</Typography>
										<Typography className={classes.card}>
											{obj.otorganteCredito.tipoPersona}
										</Typography>
									</Grid>

									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>
											NOMBRE / INSTITUCIÓN O RAZÓN SOCIAL
										</Typography>
										<Typography className={classes.cardReserved}>DATO RESERVADO</Typography>
									</Grid>

									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>RFC </Typography>
										<Typography className={classes.cardReserved}>DATO RESERVADO</Typography>
									</Grid>
								</Grid>
							</Grid>
						)}
					</Grid>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	});
}

export default function(props) {
	const classes = useStyles();
	const { data } = props;

	const adeudos = data.adeudo.filter((i) => i.titular.length === 1 && i.titular[0].clave === 'DEC');

	return (
		<Grid container spacing={2} className={classes.rootPrincipal}>
			<Grid item xs={12}>
				<Typography className={classes.tituloSeccion} align="center">
					14. ADEUDOS / PASIVOS (SITUACIÓN ACTUAL)
				</Typography>
			</Grid>
			<Grid item xs={12}>
				{data.ninguno && <DatosNoRegistrados />}
				{!data.ninguno && adeudos.length ? <Adeudos adeudos={adeudos} /> : <DatosReservados />}
			</Grid>
		</Grid>
	);
}

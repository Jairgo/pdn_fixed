import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import style from '../styleSecciones';
import { sumary, expansion } from '../utils';


import { BoxAccordion, BoxAccordionSummary, BoxAccordionDetails } from "../common/BoxAccordion";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(style);

export default function ({data,titulo}) {
	const classes = useStyles();
	const exp = expansion();
	const sum = sumary();

	return (
		<Grid container spacing={2} className={classes.rootPrincipal}>
			<Grid item xs={12}>
				<Typography className={classes.tituloSeccion} align="center">
					{titulo}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				{data.escolaridad.map((esc, index) => {
					return (
						<BoxAccordion key={'esc-' + index}>
							<BoxAccordionSummary
								classes={sum}
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography className={exp.heading}>
									<strong>{esc.nivel.valor}</strong>
								</Typography>
							</BoxAccordionSummary>
							<BoxAccordionDetails>
								<Grid container spacing={1}>
									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>NIVEL</Typography>
										<Typography className={classes.card}>{esc.nivel.valor}</Typography>
									</Grid>
									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>INSTITUCIÓN EDUCATIVA</Typography>
										<Typography className={classes.card}>
											{esc.institucionEducativa.nombre}
										</Typography>
									</Grid>
									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>
											CARRERA O ÁREA DE CONOCIMIENTO
										</Typography>
										<Typography className={classes.card}>
											{' '}{esc.carreraAreaConocimiento}
										</Typography>
									</Grid>
									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>ESTATUS</Typography>
										<Typography className={classes.card}>{esc.estatus}</Typography>
									</Grid>
									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>DOCUMENTO OBTENIDO</Typography>
										<Typography className={classes.card}>{esc.documentoObtenido}</Typography>
									</Grid>
									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>
											FECHA DE OBTENCIÓN DEL DOCUMENTO
										</Typography>
										<Typography className={classes.card}>{esc.fechaObtencion}</Typography>
									</Grid>
									<Grid item xs={12} md={4}>
										<Typography className={classes.cardTitle}>
											LUGAR DONDE SE UBICA LA INSTITUCIÓN EDUCATIVA
										</Typography>
										<Typography className={classes.card}>
											{esc.institucionEducativa.ubicacion === 'MX' ? (
												'EN MÉXICO'
											) : (
												'EN EL EXTRANJERO'
											)}
										</Typography>
									</Grid>
								</Grid>
							</BoxAccordionDetails>
						</BoxAccordion>
					);
				})}
			</Grid>
		</Grid>
	);
}

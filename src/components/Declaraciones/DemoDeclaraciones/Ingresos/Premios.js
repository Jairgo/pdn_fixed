import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import React from "react";
import {withStyles} from '@material-ui/core/styles/index';

const styles = theme => ({
    table: {
        minWidth: 700,
    },
    tableContainer :{
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    }
});
class Premios extends  React.Component{
    render(){
        const {premios,classes} = this.props;
        return(
            <div className={classes.tableContainer}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre/Denominación</TableCell>
                            <TableCell>RFC</TableCell>
                            <TableCell>CURP</TableCell>
                            <TableCell>Sector/Industria</TableCell>
                            <TableCell>Tipo Actividad/Servicio</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Domicilio</TableCell>
                            <TableCell>Ingreso bruto anual</TableCell>
                            <TableCell>Unidad temporal</TableCell>
                            <TableCell>Duración/Frecuencia</TableCell>
                            <TableCell>Fecha transacción</TableCell>
                            <TableCell>Observaciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            premios.map((row,index=0) => {
                                return(
                                    <TableRow key={index++}>
                                        <TableCell>{row.nombre_denominacion}</TableCell>
                                        <TableCell>{row.rfc}</TableCell>
                                        <TableCell>{row.curp}</TableCell>
                                        <TableCell>{row.sector_industria.valor}</TableCell>
                                        <TableCell>{row.tipo_actividad_servicio.valor}</TableCell>
                                        <TableCell>{row.descripcion_actividad}</TableCell>
                                        <TableCell>{row.domicilio.vialidad.tipo_vial+' '+row.domicilio.vialidad.nom_vial+ ' No.ext: '
                                        +row.domicilio.numExt+' No.int:'+row.domicilio.numInt+ ' '+row.domicilio.localidad.nom_loc
                                        +', '+row.domicilio.municipio.nom_mun+', '+", "+row.domicilio.entidad_federativa.nom_ent
                                        +". "+row.domicilio.pais.valor+". C.P."+row.domicilio.cp
                                        }
                                        </TableCell>
                                        <TableCell>{row.ingreso_bruto_anual.valor+' '+row.ingreso_bruto_anual.moneda.moneda}</TableCell>
                                        <TableCell>{row.ingreso_bruto_anual.unidad_temporal.valor}</TableCell>
                                        <TableCell>{row.ingreso_bruto_anual.duracion_frecuencia}</TableCell>
                                        <TableCell>{row.ingreso_bruto_anual.fecha_transaccion}</TableCell>
                                        <TableCell>{row.observaciones}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>

            </div>
        );
    }
}

export default withStyles(styles)(Premios);
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import IconSubdirectory from "@material-ui/icons/SubdirectoryArrowRight";
import Tooltip from "@material-ui/core/Tooltip";
import IconSunny from "@material-ui/icons/WbSunny";
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from "@material-ui/core/TableFooter";

const styles = theme => ({

    table: {
        tableLayout: 'fixed',
    },
    gridTable: {
        marginBottom: '27px',
        color: theme.palette.textGrey.color
    },
    container: {
        marginTop: '30px',
        marginBottom: '30px',
        overflowX: 'auto',
    },
    iconoVer:{
        color: theme.palette.secondary.dark
    },
    tableHead: {
        color: theme.palette.fontLight.color
    },
    tablePagination:{
        color : theme.palette.textGrey.color,
        backgroundColor : '#f2f2f2'
    }
});

class Previos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 5
        };
    }


    handleChangePage = (event, newPage) => {
        this.setState({
            page : newPage
        });
    };
    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage : parseInt(event.target.value, 10),
            page : 0
        });
    };
    render() {
        let {data,classes} = this.props;
        let {rowsPerPage, page} = this.state;
        return (
            <div>
                <Grid container justifyContent='center' spacing={0} className={classes.gridTable}>
                    <Grid item xs={12}>
                        {data && data.length > 0 &&
                        <Typography variant="body1" >La siguiente tabla muestra el resultado devuelto por cada Proveedor de informaci??n a trav??s de su API. Pulsa en <IconSubdirectory className={classes.iconoVer}/> para ver el detalle<br/></Typography>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        {data && data.length > 0 &&
                        <div className={classes.container}>
                            <Table className={classes.table}>
                                <TableHead style={{backgroundColor:'rgb(52, 179, 235)'}}>
                                    <TableRow>
                                        <TableCell align="left" variant={"head"} className={classes.tableHead}><Typography variant={"body1"}>Nivel</Typography></TableCell>
                                        <TableCell align="left" variant={"head"} className={classes.tableHead}><Typography variant={"body1"}> Proveedor de informaci??n</Typography></TableCell>
                                        <TableCell align="center" variant={"head"} className={classes.tableHead}><Typography variant={"body1"}>Estatus</Typography></TableCell>
                                        <TableCell align="center" variant={"head"} className={classes.tableHead}><Typography variant={"body1"}>N??mero de registros</Typography></TableCell>
                                        <TableCell align="center" variant={"head"} className={classes.tableHead}><Typography variant={"body1"}>Acciones</Typography></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody style={{backgroundColor:'#f2f2f2'}}>
                                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(row => (
                                        <TableRow key={row.supplier_id}>
                                            <TableCell align="left">{row.levels? row.levels.join(','):''}</TableCell>
                                            <TableCell align="left">{row.supplier_name}</TableCell>
                                            <TableCell align="center">
                                                <Tooltip title={!row.error ? "Disponible": "No disponible"}>
                                                    <IconSunny color={!row.error ? "primary":"disabled"}/>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell align="center">
                                                {("undefined"=== typeof (row["totalRows"])) &&
                                                "No disponible"
                                                }
                                                {row.totalRows}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.totalRows>0 &&
                                                <Tooltip title={"Ver"}>
                                                    <IconSubdirectory className={classes.iconoVer} onClick={()=>{
                                                        this.props.handleChangeSujetoObligado(row.supplier_id);
                                                    }}/>
                                                </Tooltip>
                                                }
                                                {("undefined"=== typeof (row["totalRows"])) &&
                                                "No disponible"
                                                }
                                                {(row.totalRows===0) &&
                                                "-"
                                                }
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow >
                                        <TablePagination
                                            className={classes.tablePagination}
                                            colSpan = {5}
                                            rowsPerPageOptions={[5,10,15]}
                                            count = {data.length}
                                            rowsPerPage = {rowsPerPage}
                                            page = {page}
                                            onPageChange={this.handleChangePage}
                                            onRowsPerPageChange={this.handleChangeRowsPerPage}
                                            labelRowsPerPage='Registros por p??gina'
                                            labelDisplayedRows={({from, to, count}) => {
                                                return `${from}-${to} de ${count}`;
                                            }}
                                        />
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </div>
                        }

                    </Grid>

                </Grid>
            </div>
        );
    }

}


Previos.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    handleChangeSujetoObligado: PropTypes.func.isRequired
};

export default withStyles(styles)(Previos);

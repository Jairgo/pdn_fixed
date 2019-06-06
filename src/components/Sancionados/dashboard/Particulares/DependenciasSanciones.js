import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from "@material-ui/core/Typography";
import {Treemap} from "d3plus-react";
import rp from "request-promise";

const styles = theme => ({
    frameChart: {
        marginTop: "15px",
        marginBottom: "15px"
    },
    desc: {
        textAlign: "center"
    },
    titulo: {
        textAlign: "center",
        marginBottom: "30px",
    },
    descripcion: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px",
        marginBottom : "15px"
    }
});


function aux() {
    return new Promise((resolve, reject) => {
        let options = {
            uri: process.env.REACT_APP_HOST_VIZ+'/particulares/getDependenciaMayor',
            json: true,
            method: "GET"
        };
        rp(options)
            .then(data => {
                resolve(data);
            }).catch(err => {
            alert("_No se pudo obtener la información");
            console.log(err);
        });
    });
}


function loadData2() {
    return new Promise((resolve, reject) => {
        let options = {
            uri: process.env.REACT_APP_HOST_VIZ+'/particulares/getResolucionesAnualesDependencia',
            json: true,
            method: "GET"
        };
        rp(options)
            .then(data => {
                resolve(data);
            }).catch(err => {
            alert("_No se pudo obtener la información");
            console.log(err);
        });
    });
}

class DependenciasSanciones extends React.Component {
    state = {};

    componentDidMount() {
        aux().then(result => {
            loadData2().then(result2=>{
                let aux = result.data.map(item => {
                    return {
                        "value": parseInt(item.total),
                        "group": item.dependencia
                    }
                });
                let aux2 = result2.data.map(item => {
                    return {
                        "value": parseInt(item.total),
                        "group": item.dependencia,
                        "parent": item.anio
                    }
                });


                this.setState({
                        methods: {
                            data: aux,
                            height: 400,
                            groupBy: ["group"],
                            sum: "value",
                            tooltipConfig: {
                                tbody: [
                                    ["Número de sanciones: ", function (d) {
                                        return d["value"]
                                    }
                                    ]
                                ]
                            },
                            legend :false,
                            shapeConfig:{
                                label: function (d) {
                                    return d["group"]+"\n"+d["value"]+" sanciones"
                                },
                                labelConfig:{
                                    fontMax : 18,
                                    fontMin : 10
                                }
                            }
                        },
                        config2: {
                            data: aux2,
                            height: 400,
                            groupBy: ["parent","group"],
                            sum: "value",
                            tooltipConfig: {
                                tbody: [
                                    ["Número de sanciones: ", function (d) {
                                        return d["value"]
                                    }
                                    ]
                                ]
                            },
                            legend :true,
                            shapeConfig:{
                                label: function (d) {
                                    return d["group"]+"\n"+d["value"]+" sanciones"
                                },
                                labelConfig:{
                                    fontMax : 18,
                                    fontMin : 10
                                }
                            },
                        }
                    }
                )
            });
        });

    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={0} justify='center' className={classes.frameChart}>
                    <Grid item xs={12}>
                        <Typography variant={"h6"} className={classes.titulo}>
                            {"Dependencias con mayor número de sanciones"}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.descripcion}>
                        <Typography variant={"body1"}>
                            Con respecto a las dependencias con más sanciones, de manera general, el Instituto Mexicano del Seguro Social es la dependencia con mayor número de sanciones con 264 sanciones, seguida por la Secretaría de la Función Pública, la Comisión Federal de Electricidad, Pemex exploración y producción, con 180, 179 y 113 sanciones respectivamente.
                            <br/>El resto de las dependencias en el top, presentan un total de sanciones menor a 100.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        {
                            this.state.methods && this.state.methods.data &&
                            <Treemap config={this.state.methods}/>
                        }

                    </Grid>
                    <Grid item xs={12} className={classes.descripcion}>
                        <Typography variant={"body1"}>
                            La siguiente gráfica muestra el top 10 de las dependencias con mayor número de sanciones por año del 2004 al 2018.<br/>
                            Dado que el 2004 fue el año con menor númeor de sanciones, estás se distribuyeron en sólo 4 dependencias: la Loteria Nacional para la Asistencia Pública, la Secretaría de Educación Pública, la Secretaría de Salud y el Instituto Nacional para la Educación de los Adultos.
                            <br/>En el 2005 Aeropuertos y Servicios Auxiliares presentó 10 sanciones, aumentando a 29 de la Comisión Federal de Electricidad en el 2006.
                            Para el 2007 se descendio a 17 presentadas por la Comisión Federal de Electricidad y tan sólo 5 en 2008 por Aeropuertos y Servicios Auxiliares.
                            <br/>De 2009 a 2012 el primer lugar estuvo entre Pemex (Gas y Petroquímica Básica, Exploración y Producción), la Secretaría de la Función Pública y el Instituto Mexicano del Seguro Social.<br/>
                            El 2013 lo lidereo el Instituto de Seguridad y Servicios Sociales de los Trabajadores del Estado, el 2014 a 2016 la Comisión Federal de Electricidad, para el año 2017 el Instituto Mexicano del Seguro Social volvió a ocupar le primer lugar, y finalmente en el 2018 la Secretaria de la Función Pública con 35 sanciones fue la dependencia más sancionadora.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            this.state.config2 && this.state.config2.data &&
                            <Treemap config={this.state.config2}/>
                        }

                    </Grid>
                </Grid>

            </div>
        )
    }

}

DependenciasSanciones.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DependenciasSanciones);
import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid/Grid";
import {Typography} from "@material-ui/core"
import {Treemap} from "d3plus-react";
import rp from "request-promise";
import * as d3 from "d3";
import MensajeErrorDatos from "../../../Mensajes/MensajeErrorDatos";

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
        marginBottom: theme.spacing(2)
    },
    descripcion: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
});


function aux() {
    return new Promise((resolve, reject) => {
        let options = {
            uri: process.env.REACT_APP_S3S_BACKEND + '/charts/getDependenciaMayor',
            json: true,
            method: "GET"
        };
        rp(options)
            .then(data => {
                resolve(data);
            }).catch(err => {
            reject(err);
        });
    });
}


function loadData2() {
    return new Promise((resolve, reject) => {
        let options = {
            uri: process.env.REACT_APP_S3S_BACKEND + '/charts/getSancionesAnualesDependencia',
            json: true,
            method: "GET"
        };
        rp(options)
            .then(data => {
                resolve(data);
            }).catch(err => {
            reject(err);
        });
    });
}


let z = d3.scaleOrdinal()
    .range(["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5",
        "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50",
        "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800",
        "#FF5722", "#795548", "#9E9E9E", "#607D8B"]);

class DependenciasSanciones extends React.Component {
    state = {
        errorG1: false,
        errorG2: false
    };

    componentDidMount() {
        aux().then(result => {
            let aux = result.data.map(item => {
                return {
                    "value": parseInt(item.total_sanciones, 10),
                    "group": item.dependencia
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
                            ["N??mero de sanciones: ", function (d) {
                                return d["value"]
                            }
                            ]
                        ]
                    },
                    legend: false,
                    shapeConfig: {
                        label: function (d) {
                            return d["group"] + "\n" + d["value"] + " sanciones"
                        },
                        labelConfig: {
                            fontMax: 18,
                            fontMin: 10
                        },
                        fill: (d) => {
                            return z(d.group)
                        }
                    }
                }
            })
        }).catch(err => {
            console.error(err);
            this.setState({errorG1: true})
        });

        loadData2().then(result2 => {
            let aux2 = result2.data.map(item => {
                return {
                    "value": parseInt(item.total, 10),
                    "group": item.dependencia,
                    "parent": item.anio
                }
            });

            this.setState({
                config2: {
                    data: aux2,
                    height: 400,
                    groupBy: ["parent", "group"],
                    sum: "value",
                    tooltipConfig: {
                        tbody: [
                            ["N??mero de sanciones: ", function (d) {
                                return d["value"]
                            }
                            ]
                        ]
                    },
                    legend: true,
                    shapeConfig: {
                        label: function (d) {
                            return d["group"] + "\n" + d["value"] + " sanciones"
                        },
                        labelConfig: {
                            fontMax: 18,
                            fontMin: 10
                        },
                        fill: (d) => {
                            return z(d.parent)
                        }
                    },
                }
            })
        }).catch(err => {
            console.error(err);
            this.setState({errorG2: true})
        });

    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Grid container spacing={0} justifyContent='center' className={classes.frameChart}>
                    <Grid item xs={12}>
                        <Typography variant={"h6"} className={classes.titulo}>
                            <b>{"Dependencias con mayor n??mero de sanciones"}</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.descripcion}>
                        <Typography>
                            {"Con respecto a las dependencias con m??s sanciones,  4 instituciones :la Polic??a Federal, la Secretar??a de Educaci??n P??blica, Telecomunicaciones de M??xico y el Instituto de Seguridad y Servicios Sociales de los Trabajadores representan juntas m??s del 35% del total de  personas servidoras p??blicas sancionadas "}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        {
                            this.state.methods && this.state.methods.data &&
                            <Treemap config={this.state.methods}/>
                        }
                        {
                            this.state.errorG1 && <MensajeErrorDatos/>
                        }

                    </Grid>
                    <Grid item xs={12} className={classes.descripcion}>
                        <Typography>
                            La siguiente muestra las dependencias con mayor numero de sanciones en cada a??o, como se
                            aprec??a, para el a??o 2014 fue Telecomunicaciones de M??xico. En 2013, 2014 y 2016 fue la
                            Policia Federal. En 2017, el Instituto
                            de Seguridad y Servicios Sociales de los Trabajadores del estado. En 2018, la Secretar??a de
                            Educaci??n P??blica. Hasta mayo 2021, la Presidencia de la Rep??blica ocupa el primer lugar.
                            Finalmente en 2020, a??o con menor n??mero de
                            sanciones, son tres instituciones las que aparecen con igual n??mero de sanciones, Instituto
                            de Seguridad y Servicios Sociales de los Trabajadores del Estado, Secretar??a de Medio
                            Ambiente y Recursos Naturales y el Instituto M??xicano de Cinematograf??a
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            this.state.config2 && this.state.config2.data &&
                            <Treemap config={this.state.config2}/>
                        }
                        {
                            this.state.errorG2 && <MensajeErrorDatos/>
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
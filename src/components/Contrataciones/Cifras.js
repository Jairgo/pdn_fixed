import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Donutchart from './Charts/SimpleRadialChart'
import CountUp from 'react-countup';
import rp from 'request-promise';
import LinearIndeterminate from './LinearIndeterminate';
import CustomizedSelect from './CustomizedSelect';


const styles = theme => ({
    root: {
        flexGrow: 1,
        //paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(2)
    },
    bullet: {
        backgroundColor: '#89d4f2',
        height: '20px',
        width: '20px',
        borderRadius: '50%',
        display: 'inline-block',
        marginLeft: '-20px',
        marginRight: "10px",
        marginBottom: '-3px'
    },
    ul: {
        listStyle: 'none',
        //marginLeft: 0,
        paddingLeft: '20px'
    },
    li: {
        paddingBottom: theme.spacing(2)
    },
});

class Cifras extends React.Component{

    state = {
        loading: true,
        error: false,
        contrataciones: 300000,
        instituciones: 0,
        donutChartData: [],
        periodo: {
            start: 2017,
            end: 2018
        },
        gastoTotal: 0,
        colors: {
            open: "#EB5468",
            selective: "#187099",
            direct: "#B3AD1D",
            other: "#3CB3E6"
        }
    };

    porcentaje = (amount, total) => {
        let p = (amount * 100 / total).toFixed(3);
        return `${p}%`
    };

    componentWillMount() {

        rp({
            uri: process.env.REACT_APP_DUMMY_API + "/api/s6/summary",
            method: "GET",
            json: true
        }).then( data => {

            console.log(data)

            this.setState({
                loading: false,
                contrataciones: data.procedimientos,
                instituciones: data.instituciones,
                counts: data.counts,
                amounts: data.amounts,
                gastoTotal: data.amounts.total,
                donutChartDataType : 'amounts',
                donutChartData: [
                    {theta: data.amounts.open, label: this.porcentaje(data.amounts.open,data.amounts.total), color: this.state.colors.open},
                    {theta: data.amounts.selective, label: this.porcentaje(data.amounts.selective,data.amounts.total), color: this.state.colors.selective},
                    {theta: data.amounts.direct, label: this.porcentaje(data.amounts.direct,data.amounts.total), color: this.state.colors.direct},
                    {theta: data.amounts.other, label: this.porcentaje(data.amounts.other,data.amounts.total), color: this.state.colors.other}
                    ]
            })

        }).catch(error => {
            console.log(error);

            this.setState({ error: true })
        });

    }

    handleSelectDonutData = (p) => {
        //console.log(p)
        if (p === 'amounts'){

            const {open, direct, selective, other, total} = this.state.amounts;
            this.setState({
                donutChartDataType: p,
                donutChartData: [
                    {theta: open, label: this.porcentaje(open, total), color: this.state.colors.open},
                    {theta: selective, label: this.porcentaje(selective, total), color: this.state.colors.selective},
                    {theta: direct, label: this.porcentaje(direct, total), color: this.state.colors.direct},
                    {theta: other, label: this.porcentaje(other, total), color: this.state.colors.other}
                ]
            });
        } else {
            const {open, direct, selective, other} = this.state.counts;
            const {contrataciones} = this.state;

            this.setState({
                donutChartDataType: p,
                donutChartData: [
                    {theta: open, label: this.porcentaje(open, contrataciones), color: this.state.colors.open},
                    {theta: selective, label: this.porcentaje(selective, contrataciones), color: this.state.colors.selective},
                    {theta: direct, label: this.porcentaje(direct, contrataciones), color: this.state.colors.direct},
                    {theta: other, label: this.porcentaje(other, contrataciones), color: this.state.colors.other}
                ]
            });
        }
    };


    render(){

        const {classes} = this.props;


        const bullets = [
            {
                color: this.state.colors.open,
                tipo: "Licitación pública"
            },
            {
                color: this.state.colors.selective,
                tipo: "Invitación a tres"
            },
            {
                color: this.state.colors.direct,
                tipo: "Adjudicación directa"
            },
            {
                color: this.state.colors.other,
                tipo: "Otra"
            }
        ];

        return (
            <div className={classes.root}>
                {this.state.loading?
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <LinearIndeterminate/>
                        </Grid>
                    </Grid>:
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={12} lg={4} xl={4} align="center">
                            <Typography variant="h6">
                                Procesos de contratación
                            </Typography>

                            <Typography variant="h5" paragraph>
                                <b><CountUp separator="," start={1} end={this.state.contrataciones}/></b>
                            </Typography>

                            <Typography variant="h6">
                                Instituciones
                            </Typography>
                            <Typography variant="h5" paragraph>
                                <b> <CountUp separator="," start={1} end={this.state.instituciones}/></b>
                            </Typography>

                            <Typography variant="h6">Gasto total</Typography>

                            <Typography variant="h5" paragraph>
                                <b> <CountUp separator="," decimals={2} prefix={'$'} start={1} end={this.state.gastoTotal}/></b>
                            </Typography>

                            <Typography variant="h6">
                                Periodo
                            </Typography>
                            <Typography variant="h5" paragraph>
                                <b>{this.state.periodo.start} - {this.state.periodo.end}</b>
                            </Typography>

                        </Grid>

                        <Grid item xs={12} md={12} lg={8} xl={8}>

                            <Grid container spacing={0}>
                                <Grid item xs={12} md={6} lg={6} xl={6} align="center">
                                    <CustomizedSelect handleSelectDonutData={this.handleSelectDonutData}/>

                                    <Donutchart data={this.state.donutChartData} dataType={this.state.donutChartDataType}/>
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} xl={6}>

                                    <ul className={classes.ul}>
                                        {
                                            bullets.map((b, i) => (
                                                    <li key={i}>
                                                        <Typography variant="h6" paragraph>
                                                            <span className={classes.bullet} style={{backgroundColor: b.color}} />
                                                            {b.tipo}
                                                        </Typography>
                                                    </li>
                                                )
                                            )}
                                    </ul>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </div>
        )
    }
}


export default withStyles(styles) (Cifras);
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import FormularioConexion from './FormularioConexion';
import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper/Paper";
import TablaRegistros from "./TablaRegistros";
import Typography from "@material-ui/core/Typography/Typography";
import "../../index.css";
import Button from "@material-ui/core/Button/Button";
import rp from 'request-promise';
import { ReCaptcha, loadReCaptcha  } from 'react-recaptcha-google';
import Modal from "@material-ui/core/Modal/Modal";
import "../../index.css";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    section: {
        maxWidth: '1200px'
    },
    contenedor: {
        padding: theme.spacing.unit * 5,
    },
    bgImg: {
        background: 'url(/FOTO_BANNER_3.JPG)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        paddingTop: 0,//'163px',
        paddingBottom: '140px',
    },
    titleLight: {
        color: theme.palette.titleBanner.color,
    },
    titleSub: {
        color: theme.palette.titleBanner.color,
        paddingTop: '10px',
    },
    bgContainer: {
        paddingTop: '102px',
        marginBottom: '266px'
    },
    button: {
        margin: theme.spacing.unit,
        float: 'right'
    },
    text: {
        color: theme.palette.primary.dark,
    },
    paperCaptcha: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 50,
        },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            height: '80%',
            overflowY: 'scroll',
        },
        [theme.breakpoints.up('xl')]: {
            width: theme.spacing.unit * 70,
        },
    },
    textCenter:{
        textAlign: 'center',
        color : theme.palette.primary.dark
    },
    gRecaptcha : {
        margin : 'auto',
        width: '300px',
        display:'inline-block !important'
    }
});

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,

    };
}

class Conexion extends React.Component {
     state = {
        registros: [],
         flag_send : false,
         dependencias:[],
         flag_msj : false
    };
    recaptcha = React.createRef();
    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }
    componentDidMount() {
        loadReCaptcha();
    }
    onLoadRecaptcha() {
        console.log("LoadCaptcha");
    }
    verifyCallback(recaptchaToken) {
        if(recaptchaToken){
            this.saveRegistros();
        }
    }

    verifyCaptcha = ()=>{
        this.setState({
            flag_send : true
        });
    };
    addRegistro = (item) => {
        this.setState({
            registros: [
                ...this.state.registros,
                {
                    nombre: item.nombre,
                    apellido1: item.apellido1,
                    apellido2: item.apellido2,
                    dependencia: item.dependencia !== 'OTRA' ? item.dependencia : item.otra_dependencia,
                    cargo: item.cargo,
                    correo: item.correo,
                    telefono_personal: item.telefono_personal,
                    telefono_oficina: item.telefono_oficina,
                    extension: item.extension
                }

            ],
            mensaje: ''
        })
    };


    removeRegistro = (elemento) => {
        let index = this.state.registros.indexOf(elemento);
        let aux = this.state.registros;
        aux.splice(index, 1);
        this.setState({
            registros: aux
        });
    };

    saveRegistros = () => {
        let registros = this.state.registros;
        for (let i = 0; i < registros.length; i++) {
            registros[i].fecha_solicitud = new Date();
            registros[i].estatus = 'PENDIENTE';
        }

        if (registros.length > 0) {
            let options = {
                method: 'POST',
                uri: 'https://plataformadigitalnacional.org/api/solicitudes',
                headers: {
                    'Prefer': 'return = representation',
                    'Content-Type': 'application/json'
                },
                body: registros,
                json: true
            };

            rp(options)
                .then(parseBody => {
                    this.setState({
                        flag_msj: true,
                        registros: [],
                        flag_send : false
                    });
                })
                .catch(err => {
                    alert("No se pudo completar la operación");
                    console.log(err);
                })
           }

    };
    handleClose = () => {
        this.setState({flag_send: false});
    };
    handleCloseMsj = () => {
        this.setState({flag_msj: false});
    };
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div id={"imgBanner"} className={classes.bgImg}>
                    <Grid container justify={"center"} spacing={0}>
                        <Grid item xs={12} className={classes.section} style={{paddingTop: 150}}>
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant={"h2"} className={classes.titleLight}>Solicitud de
                                        conexión</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography variant="h6" className={classes.titleSub}>
                                        Los sujetos obligados deberán solicitar la conexión con la PDN, adjuntando un
                                        oficio en formato digital
                                        (PDF), especificando nombres, cargos y datos de contacto de él o los servidores
                                        públicos encargados de
                                        mantener la conexión con la PDN, que tendrán nivel mínimo de Director general u
                                        homólogo.<br/>
                                        Los permisos de conexión a la PDN serán otorgados o denegados por la SESNA
                                        posteriormente a una evaluación de aspectos técnicos de interconexión. En caso
                                        de
                                        que los sujetos obligados no cumplan con los requerimientos de interconexión a
                                        la
                                        PDN establecidos por la SESNA, se denegará el permiso de conexión a la PDN.
                                    </Typography>
                                    <br/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Modal
                        open={this.state.flag_send}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        onClose={this.handleClose}
                    >
                        <div style={getModalStyle()} className={classes.paperCaptcha}>
                            <Grid container justify={"center"}>
                                <Grid item xs={12}>
                                    <Typography variant={"h6"} className={classes.textCenter}>Verificación de seguridad</Typography>
                                </Grid>
                                <Grid item xs={12} style={{textAlign:'center'}}>
                                    <ReCaptcha
                                        ref={this.recaptcha}
                                        size="normal"
                                        sitekey="6Lfs8YcUAAAAAGVQL-BpW_w__FSJeWq-xAUoPbf9"
                                        onloadCallback={this.onLoadRecaptcha}
                                        verifyCallback={this.verifyCallback}
                                        style={{id:'Isela',display:'inline-block'}}
                                        badge={"inline"}
                                    />
                                </Grid>
                                <Grid item xs ={12}  className={classes.textCenter}>
                                    <Typography variant={"h6"}>{this.state.mensajeRegistro}</Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Modal>
                    <Modal
                        open={this.state.flag_msj}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        onClose={this.handleCloseMsj}
                    >
                        <div style={getModalStyle()} className={classes.paperCaptcha}>
                            <Grid container justify={"center"}>
                                <Grid item xs ={12}  >
                                    <Typography variant={"h5"} className={classes.textCenter}>Solicitud enviada</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={"subtitle1"}>Los permisos de conexión a la PDN serán otorgados o denegados por la SESNA posteriormente a una evaluación de aspectos técnicos de interconexión. En caso de que los sujetos obligados no cumplan con los requerimientos de interconexión a la PDN establecidos por la SESNA, se denegará el permiso de conexión a la PDN.</Typography>
                                </Grid>
                            </Grid>
                        </div>
                    </Modal>
                </div>
                <div className={classes.bgContainer}>
                    <Grid container justify={'center'} spacing={0}>
                        <Grid item xs={12} className={classes.section}>
                            <Paper className={classes.contenedor}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <FormularioConexion addRegistro={this.addRegistro} dependencias={this.state.dependencias}/>
                                        <TablaRegistros registros={this.state.registros} remove={this.removeRegistro}/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant={"h6"} className={classes.text}>Oficio</Typography>
                                        <input type="file"/>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="primary" className={classes.button} disabled={this.state.registros.length<=0}
                                                onClick={() => this.verifyCaptcha()}>
                                            Enviar
                                        </Button>

                                    </Grid>
                                    {
                                        /*
                                        6Led7YcUAAAAANnOSK80RNv4h_o45NAWXFC9Jn8o key pdn serv
                                        6Lfs8YcUAAAAAGVQL-BpW_w__FSJeWq-xAUoPbf9 localhost
                                        */
                                    }
                                    <Grid item xs={12}>

                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>

                </div>
            </div>
        );
    }

}

export default withStyles(styles)(Conexion);
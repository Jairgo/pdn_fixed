import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from "@material-ui/core/FormControl/FormControl";
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid/Grid";
import {Typography} from "@material-ui/core"
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from "@material-ui/core/Switch";
import Collapse from "@material-ui/core/Collapse";
import Previos from "../../Compartidos/Previos";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Input from "@material-ui/core/Input";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import TablaParticularesSancionados from "./TablaParticularesSancionados";
import DetalleParticularSancionado from "./DetalleParticular";
import Modal from "@material-ui/core/Modal";
import CircularProgress from "@material-ui/core/CircularProgress";
import MensajeErrorDatos from "../../Mensajes/MensajeErrorDatos";
const axios = require('axios');

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        width: '100%'
    },
    '&$focus': {
        color: theme.palette.black.color,
    },
    centrado: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progress: {
        position: 'fixed',
        margin: 'auto',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
});

const tiposSancion = [
    {label: 'Inhabilitado', value: 'I'},
    {label: 'Multado', value: 'M'},
    {label: 'Suspensión de actividades', value: 'S'},
    {label: 'Disolución de la sociedad', value: 'D'},
    {label: 'Amonestación', value: 'A'},
    {label: 'Indemnización por los daños y perjuicios ocasionados a la Hacienda Pública Federal, local o municipal, o al patrimonio de los entes públicos', value: 'IND'},
    {label: 'Sanción económica', value: 'SE'},
    {label: 'Otro', value: 'O'}
]

const camposOrdenamiento = [
    {label: 'Nombre o razón social', value: 'nombreRazonSocial'},
    {label: 'Institución', value: 'institucionDependencia'}
]

const tiposOrdenamiento = [
    {label: 'Ascendente', value: 'asc'},
    {label: 'Descendente', value: 'desc'}
]

class BusquedaParticular extends React.Component {
    constructor(props) {
        super(props);
        this.previosRef = React.createRef();
        this.resultsRef = React.createRef();
        this.state = {
            filterData: [],
            page: 1,
            rowsPerPage: 10,
            totalRows: 0,
            previos: null,
            panelPrevios: true,
            error: false,
            loading: false,
            busquedaAvanzada: false,
            //Filtros
            nombreRazonSocial: '',
            institucionDependencia: "",
            expediente: '',
            tipoSancion: [],
            tipoPersona: '',
            nivel: '',
            campoOrden: '',
            tipoOrden: '',
            institucionesLista: [],
            elementoSeleccionado: null,
            proveedor:'',
            proveedoresLista: []
        };
    }

    componentDidMount() {
        this.loadInstituciones();
        this.loadProveedores();
    }

    loadInstituciones = () => {
        let instituciconesLista = [];
        let options = {
            url: process.env.REACT_APP_S3P_BACKEND + '/api/v1/entities',
            json: true,
            method: "post",
            data: {
                nivel_gobierno: this.state.nivel,
                supplier_id: this.state.proveedor
            }
        };
        axios(options)
            .then(data => {
                data.data.forEach((item, index) => {
                    instituciconesLista.push({value: item.nombre, label: item.nombre, key: index});
                });
                this.setState({institucionesLista: instituciconesLista, institucionDependencia: ''});
            }).catch(err => {
            console.log(err);
            this.setState({error: true})
        });
    }

    handleChangeCampo = (varState, event) => {
        this.setState({
            [varState]: event ? (event.target ? event.target.value : event.value) : ''
        }, () => {
            switch (varState) {
                case 'nivel':
                    this.loadInstituciones();
                    this.loadProveedores();
                    break;
                case 'campoOrden':
                    if (!this.state.tipoOrden) this.setState({tipoOrden: {label: 'Ascendente', value: 'asc'}});
                    if (!event.target.value) this.setState({tipoOrden: ''})
                    break;
                case 'tipoOrden':
                    if (!this.state.campoOrden && event.target.value) this.setState({
                        campoOrden: camposOrdenamiento[0]
                    });
                    if (!event.target.value) this.setState({campoOrden: ''})
                    break;
                case 'proveedor':
                    this.loadInstituciones();
                    break;
                default:
                    break;
            }
        })
    };

    handleCleanAll = () => {
        this.setState(
            {
                nombreRazonSocial: "",
                institucionDependencia: "",
                expediente: "",
                tipoSancion: [],
                tipoPersona: "",
                nivel: "",
                campoOrden: "",
                tipoOrden: "",
                filterData: null,
                previos: null,
                curp: "",
                institucionesLista: [],
                elementoSeleccionado: null,
                rowsPerPage: 10,
                proveedoresLista: []
            }, () => {
                this.loadInstituciones();
                this.loadProveedores();
            })
    };

    handleSearchPrevios = () => {
        this.setState({
            loading: true,
            filterData: [],
            elementoSeleccionado: null,
            rowsPerPage: 10
        }, () => {
            let body =
                {
                    "query": this.makeFiltros(),
                    "nivel_gobierno": this.state.nivel,
                    "proveedor" : this.state.proveedor,
                    "institucion" : this.state.institucionDependencia
                };

            let options = {
                method: 'POST',
                url: process.env.REACT_APP_S3P_BACKEND + '/api/v1/summary',
                json: true,
                data: body
            };
            axios(options)
                .then(res => {
                    this.setState({previos: res.data, loading: false, error: false, panelPrevios: true}, ()=>{
                        this.executeScrollPrevios();
                    })
                }).catch(err => {
                this.setState({loading: false, error: true});
            });
        });
    };

    makeFiltros = () => {
        let filtros = {};
        let {nombreRazonSocial, institucionDependencia, expediente, tipoPersona, tipoSancion} = this.state;
        if (nombreRazonSocial) filtros.nombreRazonSocial = nombreRazonSocial;
        if (expediente) filtros.expediente = expediente;
        if (tipoPersona) filtros.tipoPersona = tipoPersona;
        if (institucionDependencia && institucionDependencia !== '') filtros.institucionDependencia = institucionDependencia;
        if (tipoSancion.length > 0) filtros.tipoSancion = tipoSancion.map(item => item.value);
        return filtros;
    };

    makeSort = () => {
        let sort = {};
        if (this.state.campoOrden && this.state.tipoOrden) sort[this.state.campoOrden.value] = this.state.tipoOrden.value;
        return sort;
    };

    handleShowPrevios = () => {
        this.setState({
            panelPrevios: !this.state.panelPrevios
        })
    }

    handleBusquedaAvanzada = () => {
        this.setState({busquedaAvanzada: !this.state.busquedaAvanzada})
    }

    handleSearch = () => {
        this.setState({loading: true}, () => {
            let body =
                {
                    "query": this.makeFiltros(),
                    "pageSize": this.state.rowsPerPage,
                    "page": this.state.page,
                    "supplier_id": this.state.supplier_id,
                    "sort": this.makeSort()
                };

            let options = {
                method: 'POST',
                url: process.env.REACT_APP_S3P_BACKEND + '/api/v1/search',
                json: true,
                data: body
            };

            axios(options)
                .then(res => {
                    this.setState({
                        filterData: res.data.results,
                        loading: false,
                        totalRows: res.data.pagination.totalRows,
                        error: false
                    }, ()=>{
                        this.executeScrollResults();
                    })
                }).catch(err => {
                this.setState({loading: false, error: true});
            });
        });

    };

    handleChangeSujetoObligado = (val) => {
        this.setState({
            supplier_id: val,
            page: 1,
            elementoSeleccionado: null
        }, () => {
            this.handleSearch()
        });
    };

    handleChangePage = (event, page) => {
        this.setState({page: page + 1}, () => {
            this.handleSearch();
        });
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value, page: 1}, () => {
            this.handleSearch();
        });
    };

    verDetalle = (event, elemento) => {
        this.setState({elementoSeleccionado: elemento, panelPrevios: false});
    };

    hideDetalle = () => {
        this.setState({elementoSeleccionado: null});
    };

    loadProveedores = () => {
        let sug = [];
        let options = {
            url: process.env.REACT_APP_S3P_BACKEND + '/api/v1/getProviders',
            json: true,
            method: "post",
            data: {
                nivel_gobierno: this.state.nivel
            }
        };
        axios(options)
            .then(data => {
                data.data.forEach((provider) => {
                    sug.push({value: provider.supplier_id, label: provider.supplier_name, key: provider.supplier_id});
                });
                this.setState({proveedoresLista: sug, proveedor: ''});
            }).catch(err => {
            this.setState({error: true})
        });
    }

    executeScrollPrevios = () => this.previosRef.current.scrollIntoView();

    executeScrollResults = () => this.resultsRef.current.scrollIntoView();

    render() {
        const {classes} = this.props;
        const {nombreRazonSocial, expediente, institucionDependencia, institucionesLista, nivel, campoOrden, tipoOrden, tipoSancion, tipoPersona, proveedor, proveedoresLista} = this.state;

        return (
            <div>

                {/*Buscador*/}
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography paragraph><b>Busca un particular sancionado</b></Typography>
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="search"
                                label="Nombre / Razón social"
                                type="search"
                                onChange={(e) => this.handleChangeCampo('nombreRazonSocial', e)}
                                value={nombreRazonSocial}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="search"
                                label="Número expediente"
                                type="search"
                                onChange={(e) => this.handleChangeCampo('expediente', e)}
                                value={expediente}
                            />

                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="tipoSancion-label">Tipo sanción</InputLabel>
                            <Select displayEmpty
                                    id="tipoSancion-checkbox"
                                    multiple
                                    value={tipoSancion}
                                    onChange={e => this.handleChangeCampo('tipoSancion', e)}
                                    input={<Input/>}
                                    renderValue={
                                        selected => {
                                            if (selected.length === 0) {
                                                return <em>Todos</em>;
                                            }
                                            return selected.map(element => element.label).join(', ')
                                        }
                                    }

                            >
                                <MenuItem disabled value={[]}>
                                    <em>Todos</em>
                                </MenuItem>
                                {tiposSancion.map(tipo => (
                                    <MenuItem key={tipo.value} value={tipo}>
                                        <Checkbox checked={tipoSancion.indexOf(tipo) > -1}/>
                                        <ListItemText primary={tipo.label}/>
                                    </MenuItem>

                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="tipoPersona-label">Tipo persona</InputLabel>
                            <Select value={tipoPersona}
                                    onChange={(e) => this.handleChangeCampo('tipoPersona', e)}
                                    displayEmpty
                            >
                                <MenuItem value="" key={-1}><em>Todos</em></MenuItem>
                                <MenuItem value="F" key={"F"}>Física</MenuItem>
                                <MenuItem value="M" key={"M"}>Moral</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={2} xs={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="nivel-label">
                                Nivel
                            </InputLabel>
                            <Select value={nivel}
                                    onChange={(e) => this.handleChangeCampo('nivel', e)}
                                    displayEmpty
                            >
                                <MenuItem value={''} key={-1}><em>Todos</em></MenuItem>
                                <MenuItem value={'Federal'} key={'Federal'}>
                                    {'Federal'}
                                </MenuItem>
                                <MenuItem value={'Estatal'} key={'Estatal'}>
                                    {'Estatal'}
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="proveedor-label">
                                Proveedor información
                            </InputLabel>
                            <Select value={proveedor}
                                    onChange={(e) => this.handleChangeCampo('proveedor', e)}
                                    displayEmpty
                            >
                                <MenuItem value={''} key={-1}><em>Todos</em></MenuItem>
                                {
                                    proveedoresLista.map((item => {
                                        return <MenuItem value={item.value} key={item.key}>
                                            {item.label}
                                        </MenuItem>
                                    }))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="institucionDependencia-label">
                                Institución
                            </InputLabel>
                            <Select value={institucionDependencia}
                                    onChange={(e) => this.handleChangeCampo('institucionDependencia', e)}
                                    displayEmpty
                            >
                                <MenuItem value="" key={-1}><em>Todas</em></MenuItem>
                                {
                                    institucionesLista.map((item => {
                                        return <MenuItem value={item.value} key={item.key}>
                                            {item.label}
                                        </MenuItem>
                                    }))
                                }
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Button onClick={() => this.handleBusquedaAvanzada()}
                                startIcon={this.state.busquedaAvanzada ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                        >Búsqueda avanzada</Button>
                    </Grid>

                    {this.state.busquedaAvanzada && <Grid item xs={12} md={3}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="campoOrden-label">Ordenar por</InputLabel>
                            <Select displayEmpty
                                    id="campoOrden-checkbox"
                                    value={campoOrden}
                                    onChange={e => this.handleChangeCampo('campoOrden', e)}
                                    input={<Input/>}
                                    renderValue={
                                        selected => {
                                            if (selected.length === 0) {
                                                return <em>Ninguno</em>;
                                            }
                                            return selected.label
                                        }
                                    }

                            >
                                <MenuItem value={''}>
                                    <em>Ninguno</em>
                                </MenuItem>
                                {camposOrdenamiento.map(tipo => (
                                    <MenuItem key={tipo.value} value={tipo}>
                                        <ListItemText primary={tipo.label}/>
                                    </MenuItem>

                                ))}
                            </Select>
                        </FormControl>
                    </Grid>}
                    {this.state.busquedaAvanzada && <Grid item xs={12} md={3}>
                        <FormControl className={classes.formControl}>
                            <InputLabel shrink id="tipoOrden-label">Tipo ordenamiento</InputLabel>
                            <Select displayEmpty
                                    id="tipoOrden-checkbox"
                                    value={tipoOrden}
                                    onChange={e => this.handleChangeCampo('tipoOrden', e)}
                                    input={<Input/>}
                                    renderValue={
                                        selected => {
                                            if (selected.length === 0) {
                                                return <em>Ninguno</em>;
                                            }
                                            return selected.label
                                        }
                                    }

                            >
                                <MenuItem value={''}>
                                    <em>Ninguno</em>
                                </MenuItem>
                                {tiposOrdenamiento.map(tipo => (
                                    <MenuItem key={tipo.value} value={tipo}>
                                        <ListItemText primary={tipo.label}/>
                                    </MenuItem>

                                ))}
                            </Select>
                        </FormControl>
                    </Grid>}

                    <Grid item md={10}/>


                    <Grid item xs={12} md={1} className={classes.centrado}>
                        <Button variant="contained" color="secondary" className={classes.button}
                                onClick={() => this.handleCleanAll()}>
                            Limpiar
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={1} className={classes.centrado}>
                        <Button variant="contained" color="secondary" className={classes.button}
                                onClick={this.handleSearchPrevios}>
                            Buscar
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            this.state.loading &&
                            <Modal id={'modalIsela'}
                                   open={this.state.loading}
                            >
                                <div>
                                    <CircularProgress className={classes.progress} size={200}/>
                                </div>
                            </Modal>

                        }
                        {
                            this.state.error && <MensajeErrorDatos/>
                        }
                    </Grid>
                </Grid>
                {/*Previos*/}
                {this.state.previos && this.state.previos.length > 0 &&
                <Grid container>
                    <Grid item xs={12} className={classes.section}>
                        <FormControlLabel
                            control={<Switch className={classes.containerPrevios}
                                             checked={this.state.panelPrevios}
                                             onChange={() => this.handleShowPrevios()}/>}
                            label={
                                <Typography variant="h6" className={classes.desc}>
                                    {this.state.panelPrevios ? 'Ocultar resultados generales' : 'Mostrar resultados generales'}</Typography>}
                        />
                    </Grid>
                    <Grid item xs={12} className={classes.section} ref={this.previosRef}>
                        <div className={classes.container}>
                            <Collapse in={this.state.panelPrevios}>
                                <Previos data={this.state.previos}
                                         handleChangeSujetoObligado={this.handleChangeSujetoObligado}/>
                            </Collapse>
                        </div>
                    </Grid>
                </Grid>
                }
                {/*Tabla*/}
                {this.state.filterData && this.state.filterData.length > 0 && this.state.elementoSeleccionado === null &&
                <Grid container ref={this.resultsRef}>
                    <Grid item xs={12}>
                        <TablaParticularesSancionados data={this.state.filterData} page={this.state.page}
                                                      rowsPerPage={this.state.rowsPerPage}
                                                      totalRows={this.state.totalRows}
                                                      handleChangePage={this.handleChangePage}
                                                      handleChangeRowsPerPage={this.handleChangeRowsPerPage}
                                                      verDetalle={this.verDetalle} nivel={this.state.nivel}/>
                    </Grid>
                </Grid>
                }
                {/*Detalle*/}
                {
                    this.state.elementoSeleccionado !== null &&
                    <DetalleParticularSancionado hideDetalle={this.hideDetalle}
                                                 particular={this.state.elementoSeleccionado}
                    />
                }
            </div>


        );
    }
}

BusquedaParticular.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(BusquedaParticular);


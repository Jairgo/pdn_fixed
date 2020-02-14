import React from 'react';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from "@material-ui/core/FormControl/FormControl";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Grid from "@material-ui/core/Grid/Grid";
import '../Utils/selectReact.css';
import {Typography} from "@material-ui/core"
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const styles = theme => ({
    textField: {
        marginRight: theme.spacing(1),
    },
    formControl: {
        width: '100%'
    },
    fontLight: {
        color: theme.palette.black.color,
    },
    '&$focus': {
        color: theme.palette.black.color,
    },
    root: {
        flexGrow: 1,
        height: 250,
    },
    inputShrink: {
        transform: `scale(1)`
    },
    button: {
        margin: theme.spacing(2),
        marginRight: theme.spacing(1),
    }
});

class BusquedaServidor extends React.Component {

    limpiarBusqueda = () => {
        this.props.handleCleanAll();
    };

    buscar = () => {
        this.props.handleSearch();
    };

    render() {
        const {
            classes,
            handleSetState,
            nombreServidor,
            apellidoUno,
            apellidoDos,
            procedimiento,
            entities,
            current_entity,
            nivel,
            changeLevel
        } = this.props;
        
        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            <b>Busca un servidor público que interviene en procesos de contratación</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="search"
                                label="Nombre(s)"
                                type="search"
                                onChange={(e) => handleSetState('nombreServidor', e)}
                                value={nombreServidor}
                                InputLabelProps={{
                                    className: classes.inputShrink,
                                    shrink: true
                                }}
                            />

                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="search"
                                label="Primer apellido"
                                type="search"
                                onChange={(e) => handleSetState('apellidoUno', e)}
                                value={apellidoUno}
                                InputLabelProps={{
                                    className: classes.inputShrink,
                                    shrink: true
                                }}
                            />

                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl className={classes.formControl}>
                            <TextField
                                id="search"
                                label="Segundo apellido"
                                type="search"
                                onChange={(e) => handleSetState('apellidoDos', e)}
                                value={apellidoDos}
                                InputLabelProps={{
                                    className: classes.inputShrink,
                                    shrink: true
                                }}
                            />

                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="campoSelectProcedimiento"> Tipo de procedimiento</InputLabel>
                            <Select style={{marginTop:'0px'}}
                                    value={procedimiento}
                                    onChange={(e) => handleSetState('procedimiento', e)}
                                    inputProps={{
                                        name: 'campoSelectProcedimiento',
                                        id: 'campoSelectProcedimiento',
                                    }}
                            >
                                <MenuItem value={'todos'} key={'Todos'}>
                                    Cualquiera
                                </MenuItem>
                                <MenuItem value={'CONTRATACIONES'} key={'CONTRATACIONES'}>Contrataciones</MenuItem>
                                <MenuItem value={'CONCESIONES'} key={'CONCESIONES'}>Concesiones</MenuItem>
                                <MenuItem value={'ENAJENACIONES'} key={'ENAJENACIONES'}>Enajenaciones</MenuItem>
                                <MenuItem value={'DICTAMENES'} key={'DICTAMENES'}>Dictamenes</MenuItem>
                            </Select>

                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor={'campoSelectInstitucion'}>Institución</InputLabel>
                            <Select style={{marginTop: '0px'}} value={current_entity}
                                    onChange={(e) => handleSetState('current_entity', e)}
                                    inputProps={{
                                        name: 'campoSelectInstitucion',
                                        id: 'campoSelectInstitucion',
                                    }}
                            >
                                <MenuItem value="ANY" key="ANY">
                                    Cualquiera
                                </MenuItem>
                                {
                                    entities.map(((entity, index) => {
                                        return <MenuItem value={entity} key={index}>
                                            {entity.nombre}
                                        </MenuItem>
                                    }))
                                }
                            </Select>

                        </FormControl>
                    </Grid>
                    
                    <Grid item md={6} xs={12}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Nivel de gobierno</FormLabel>
                            <RadioGroup row
                                        aria-label="gender"
                                        name="gender1"
                                        className={classes.group}
                                        value={nivel}
                                        onChange={(e) => changeLevel(e)}
                            >
                                <FormControlLabel value="todos" control={<Radio/>} label="Cualquiera"/>
                                <FormControlLabel value="federal" control={<Radio/>} label="Federal"/>
                                <FormControlLabel value="estatal" control={<Radio/>} label="Estatal"/>
                            </RadioGroup>

                        </FormControl>
                    </Grid>

                    <Grid item xs={12} md={6} align="right">
                        <Button variant="contained" color="secondary" className={classes.button}
                                onClick={this.limpiarBusqueda}>
                            Limpiar
                        </Button>

                        <Button variant="contained" color="secondary" className={classes.button} onClick={this.buscar}>
                            Buscar
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

BusquedaServidor.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(BusquedaServidor);
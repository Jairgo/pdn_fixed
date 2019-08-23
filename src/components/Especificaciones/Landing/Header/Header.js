import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import BG from '../../../../assets/img/especificaciones.jpg';
import PDNLogo from '../../../../assets/PDN.png';
import C from '../../../../assets/icono-conexion.svg'
import {Typography} from "@material-ui/core"
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';

const style = theme => ({
        root: {
            flexGrow:1,
        },
        container1: {
            //background: 'grey',
            paddingTop: '75px',
            paddingBottom: '75px',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),

            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            backgroundImage: `url(${BG})`
        },
        link: {
            textDecoration: 'none',
            color: 'inherit'
        },
        item1:{
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2),
        },
        item2:{
            paddingRight: theme.spacing(2),
            paddingLeft: theme.spacing(2)
        },
        item3:{
            maxWidth: 1200,
        },
        logo: {
            maxWidth: '150px'
        },
        whiteText: {
            color: '#fff'
        },
        pdnLogo: {
            maxWidth: 110,
            paddingLeft: "40px",
            paddingTop: "40px",
            paddingBottom: "40px"
        }
    }
);

class Header extends React.Component{

    render(){
        const {classes} = this.props;

        return(
            <div className={classes.root}>
                {/*<PDNAppBar/>*/}

                <Grid container spacing={0} justify="center" style={{background: '#fff'}}>
                    <Grid item xs={12} className={classes.item3}>
                        <Link to="/" className={classes.link}>
                            <img src={PDNLogo} alt="PDN" className={classes.pdnLogo}/>
                        </Link>
                    </Grid>
                </Grid>

                <Grid container spacing={0} className="breadcrumb" justify='center'>
                    <Grid item xs={12} className={classes.item3}>
                        <ul>
                            <li>
                                <Link className={classes.link} to='/'>Plataforma Digital Nacional</Link>
                            </li>
                            <li>
                                Especificaciones
                            </li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid container spacing={0} className={classes.container1} justify='center'>
                    <Grid item xs={12} md={4} align={isWidthUp('md', this.props.width)? 'right':'center'} className={classes.item1}>
                        <img src={C} alt="Especificaciones" className={classes.logo}/>
                    </Grid>

                    <Grid item xs={12} md={6} className={classes.item2} align={isWidthUp('md', this.props.width)? 'left':'center'} >
                        <Typography variant="h4" paragraph className={classes.whiteText} style={{fontWeight: 300}}>
                            Especificaciones técnicas y
                        </Typography>
                        <Typography variant="h4" paragraph className={classes.whiteText} style={{  fontWeight: 600}}>
                            estandares de datos
                        </Typography>
                        <Typography  className={classes.whiteText} style={{fontSize: '18px',fontWeight: 500}}>
                            Encontrarás las reglas y características con las que deben contar los datos para la interoperabilidad.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withWidth()(withStyles(style) (Header));
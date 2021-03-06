import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import BG from '../../../assets/img/mesa_ayuda.jpg';
import {Typography} from "@material-ui/core"
import withWidth from '@material-ui/core/withWidth';
import BarraLogoMenu from "../../Compartidos/BarraLogoMenu";

const style = theme => ({
        root: {
            flexGrow:1
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
        s2: {
            maxWidth: '170px'
        },
        whiteText: {
            color: '#fff'
        },
        pdnLogo: {
            maxWidth: 110,
            paddingLeft: "40px",
            paddingTop: "40px",
            paddingBottom: "40px"
        },
        container: {
            height: '100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative',
            backgroundImage: `url(${BG})`
        }
    }
);

class Header extends React.Component{

    render(){
        const {classes} = this.props;

        return(
            <div className={classes.root}>
                {/*<PDNAppBar/>*/}

                <BarraLogoMenu/>

                <Grid container spacing={0} className="breadcrumb" justify='center'>
                    <Grid item xs={12} className={classes.item3}>
                        <ul>
                            <li>
                                <Link className={classes.link} to='/'>Plataforma Digital Nacional</Link>
                            </li>
                            <li>
                                Preguntas frecuentes
                            </li>
                        </ul>
                    </Grid>
                </Grid>

                <Grid container spacing={0} style={{padding: "82px 0"}} justify='center' className={classes.container}>
                  <Grid item xs={12} md={7} className={classes.item2} align='center' >
                      <Typography variant="h1" paragraph className={classes.whiteText} style={{fontSize: '36px', fontWeight: 300}}>
                          Preguntas frecuentes
                      </Typography>
                  </Grid>
                </Grid>

            </div>
        )
    }
}

export default withWidth()(withStyles(style) (Header));

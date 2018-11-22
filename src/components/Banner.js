import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    bgImg:{
        height: '300px',
        backgroundImage: 'url(Banner1_.jpg)',/*'url(/Banner1_.png)',*/
        backgroundPosition:'bottom',
        backgroundRepeat: 'no-repeat',
        textAlign:'left',
        backgroundSize:'cover'
    },
    container: {
        [theme.breakpoints.up('sm')]:{
            marginLeft: '100px',
            marginRight: '100px'
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit
        }
    },
    pdn: {
        [theme.breakpoints.up('sm')]:{
            paddingTop: '75px'
        },
        [theme.breakpoints.down('sm')]:{
            paddingTop: '40px'

        }
    },
    beta:{
        ...theme.typography.button,
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing.unit * 0.5,
        width: '45px',
        borderRadius: '5px',
    }
});

class Banner extends React.Component {
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.bgImg}>
                <div className={classes.container}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} align="center">

                            <Typography className={classes.pdn} variant="display2" style={{color: '#fff'}}>
                                Plataforma Digital Nacional
                            </Typography>
                            <Typography variant="subheading" style={{ color:'#fff',  paddingTop: '10px'}}>
                                Inteligencia de datos anticorrupción
                            </Typography>

                            <br/>

                            <Typography variant="body2" className={classes.beta} style={{color: '#fff'}}>
                                beta
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

Banner.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Banner);

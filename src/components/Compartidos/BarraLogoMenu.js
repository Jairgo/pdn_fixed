import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import PDNLogo from "../../assets/PDN.png";
import MenuSistemas from "./MenuSistemas";
import React from "react";
import withWidth from "@material-ui/core/withWidth/withWidth";
import {withStyles} from "@material-ui/core";
//import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const style = theme => ({
        root: {
            flexGrow: 1,
        },
        link: {
            textDecoration: 'none',
            color: 'inherit',
            flexGrow: 1
        },

        cont: {
            maxWidth: 1200,
        },

        pdnLogo: {
            maxWidth: 110,
            paddingLeft: "40px",
            paddingTop: "40px",
            paddingBottom: "40px"
        },
        appBar: {
            backgroundColor: "white"
        }
    }
);

class BarraLogoMenu extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"

                >
                    <Grid item  className={classes.cont}  xs={12} style={{'maxWidth':'1200px'}}>
                        <Toolbar>
                            <Link to="/" className={classes.link}>
                                <img src={PDNLogo} alt="PDN" className={classes.pdnLogo}/>
                            </Link>
                            <MenuSistemas/>
                        </Toolbar>
                    </Grid>

                </Grid>

            </div>
        );
    }
}


export default withWidth()(withStyles(style)(BarraLogoMenu));
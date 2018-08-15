import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PDNAppBar from "../PDNAppBar/PDNAppBar";
import PDNLinks from "../PDNLinks/PDNLinks";
import Footer from "../Footer/Footer";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    contents: {
        flexGrow: 1,
        paddingTop: theme.spacing.unit * 5,
        paddingBottom: theme.spacing.unit * 5,
        [theme.breakpoints.up('sm')]:{
            marginLeft: '100px',
            marginRight: '100px'
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit
        }
    },
    paper: {
        padding: theme.spacing.unit * 2,
        //textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Index extends React.Component{
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <PDNAppBar/>

                <div className={classes.contents}>
                    <Typography variant="headline">
                        Contrataciones públicas
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </div>
                <PDNLinks/>
                <Footer/>
            </div>
        );
    }
}

export default withStyles(styles)(Index);
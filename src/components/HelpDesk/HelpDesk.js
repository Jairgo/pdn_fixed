import React  from 'react';
import {withStyles} from "@material-ui/core/styles";
import Header from './Header/Header';
import Grid from '@material-ui/core/Grid';
import Footer from "../Home/Footer";
import ExpansionPanels from './ExpansionPanels';
import ScrollToTopButton from "../Navigation/ScrollToTopButton";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    item: {
        maxWidth: 1200,
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
    },
    title: {
        color: theme.palette.primary.dark
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary.dark
    },
    diagrama: {
        maxWidth: 900,
        padding: theme.spacing(2)
    }
});

class HelpDesk extends React.Component{

    render() {

        const {classes} = this.props;

        return <div className={classes.root}>
            <Header/>

            <Grid container spacing={0} justify="center">
                <Grid item xs={12} className={classes.item}>


                    <ExpansionPanels/>


                </Grid>

            </Grid>
            <Footer/>
            <ScrollToTopButton/>
        </div>
    }
}


export default withStyles(styles)(HelpDesk);


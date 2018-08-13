import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import {Link} from 'react-router-dom';
const styles = theme => ({
    card: {
        [theme.breakpoints.up('sm')]:{
            height: 43* theme.spacing.unit,
            width: '100%'

        },
        [theme.breakpoints.down('sm')]:{
            height: 25* theme.spacing.unit,
            width: 250
        },

    },
    media: {
        paddingTop : '75%',
        //width: '100%',
        height:'0',
        //height: theme.spacing.unit * 32*0.7,
        //maxHeight:'70%'

    },
    headerCard:{
        [theme.breakpoints.up('md')]:{
            fontSize: 'calc(1.1vw)',
        },
        [theme.breakpoints.down('md')]:{
            fontSize: 'calc(1rem)',
        }


    },
    headerCardRoot:{
        height:'15%',
        alignItems: 'unset'
    }
});


function SimpleCard(props) {
    const { classes } = props;
    const title = props.titleCard;
    const imagen = props.content;
    const to = props.to;
    return (
        <div>
            <Card className={classes.card}>
                <CardHeader
                    classes={{
                        title: classes.headerCard,
                        root: classes.headerCardRoot
                    }}
                     title={title}
                />
                <CardMedia className={classes.media}
                               image={imagen}
                               component={Link}
                               to ={to}
                    />
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
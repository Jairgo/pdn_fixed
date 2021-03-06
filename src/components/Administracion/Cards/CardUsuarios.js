import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core"
import IconoUsuarios from '../../../assets/Cards/group.svg';
import Grid from "@material-ui/core/Grid/Grid";
import app from "../../../config/firebase";
import {Link} from "react-router-dom";

const styles = {
    card: {
        maxWidth: 345,
        margin :'0 auto'
    },
    media: {
        objectFit: 'cover',
    },
    number:{
        textAlign : 'center'
    },
    category:{
        textAlign : 'center'
    },
    actions :{
        margin : '0 auto'
    }
};

const MyLink = props => <Link to="/administracionPDN/usuarios"  {...props}/>;
class CardUsuarios extends React.Component {
    state={
        numeroUsuarios : 0,
    };

    componentDidMount() {
        this.getEstadisticas();
    };

    getEstadisticas = () => {
        let db = app.firestore();
        const settings = {timestampsInSnapshots: true};
        db.settings(settings);
        db.collection('/users_pdn').get().then((querySnapshot) => {
            this.setState({
                numeroUsuarios :querySnapshot.size,
            });
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea component={MyLink}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <CardMedia
                                    component="img"
                                    alt="Usuarios"
                                    className={classes.media}
                                    height="140"
                                    image={IconoUsuarios}
                                    title="Usuarios"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h2" color={"primary"} className={classes.number}>
                                    {this.state.numeroUsuarios}
                                </Typography><br/>
                                <Typography variant="h5"  color={"textSecondary"} className={classes.category}>
                                    {'Usuarios'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                        <Button size="small" color="secondary" className={classes.actions} component={MyLink}>
                            Ver
                        </Button>

                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(CardUsuarios);
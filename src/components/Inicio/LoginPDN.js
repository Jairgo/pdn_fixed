import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {Redirect} from "react-router";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import app from "../../config/firebase";
import PrivateRoute from "../../PrivateRoute";
import Home from '../Home';

const divstyle = {
    marginTop: "150px"
};

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        // width: 200,
        width: "100%"
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    },
    card: {
        minWidth: 275
    },
    title: {
        fontSize: 14
    }
});


class LoginPDN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            pass: "",
            mensaje: "",
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };
/*

    handleSignIn =  (event) => {
        event.preventDefault();
        try {
            const {history} = this.props;
            console.log("History: ",history);
            app.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then((resp)=>{
                console.log("resp",resp);
                if (resp.user.uid) {
                    console.log("Redirect");
                   // return history.push('/home');
                }
            });

        } catch (e) {
            alert(e);
        }
    };
*/
handleClick=()=>{
    this.props.handleSignIn(this.state.email,this.state.pass,this.props.propiedades.history);
};
    render() {
        const {classes} = this.props;
        return (
            <Grid style={divstyle} container spacing={24}>
                <Grid item xs={4}/>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardContent style={{textAlign: "center"}}>
                            <form autoComplete="off">
                                <Grid item xs={12}>
                                    <br/>
                                    <img
                                        src="./logo_pdn.png"
                                        className="img-fluid"
                                        alt="PDN"
                                    />
                                </Grid>
                                <Grid item xs={12} style={{marginTop: "10px"}}>
                                    {this.state.mensaje.mensaje && (<label>lasldfasdfa</label>
                                        /* <Mensaje mensaje={this.state.mensaje} />*/
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="Correo electrónico"
                                        className={classes.textField}
                                        value={this.state.email}
                                        onChange={this.handleChange("email")}
                                        margin="normal"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="clave"
                                        label="Contraseña"
                                        type="password"
                                        className={classes.textField}
                                        value={this.state.pass}
                                        onChange={this.handleChange("pass")}
                                        margin="normal"
                                    />
                                </Grid>
                            </form>
                            <Grid item xs={12}>
                                <br/>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={()=>this.handleClick()}
                                    >
                                        Ingresar
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs={12}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={4}/>
            </Grid>
        );
    }
}

export default withStyles(styles)(LoginPDN);

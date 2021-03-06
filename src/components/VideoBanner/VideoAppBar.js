import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {ListItemText, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
// import imgHeader from "../../assets/PDN-sintexto-blue.png";
import imgHeader from "../../assets/PDN.png";
import app from "../../config/firebase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import { getPermisos, haySesion } from "../Seguridad/seguridad";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from "@material-ui/core/Collapse";


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  buttons: {
    color: "#666666"
  },
  item: {
    maxWidth: 1200
  },
  href: {
    textDecoration: "none",
    color: "inherit"
  },
  textTransform: {
    textTransform: "none"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  divider: {
    marginTop: theme.spacing(1)
  }
});

class VideoAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: false,
      authenticated: false,
      anchorEl: null,
      permisos: [],
      haySesion: false,
      dropDown: false,
      dropDown2: false
    };
  }

  componentDidMount() {
    let _this = this;
    let x = getPermisos();
    haySesion().then(value => {
      _this.setState({
        haySesion: value
      });
    });
    this.setState({
      permisos: x
    });
  }

  handleSignOut = () => {
    app
        .auth()
        .signOut()
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(e => {
          alert(e);
        });
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, dropDown: false });
  };

  handleToggle = () => {
    this.setState({
      dropDown: !this.state.dropDown,
    })
  };

  handleToggle2nd = () => {
    this.setState({
      dropDown2: !this.state.dropDown2,
    })
  };


  render() {
    const { classes } = this.props;

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const {dropDown, dropDown2} = this.state;

    return (
        <div className={classes.root}>
          <AppBar
              position="static"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0)",
                border: 0,
                boxShadow: "none"
              }}
          >
            <Grid container spacing={0} justifyContent="center">
              <Grid item xs={12} className={classes.item}>
                <Toolbar>
                  <IconButton
                      color="inherit"
                      aria-label="Menu"
                      component={Link}
                      to="/"
                      style={{ marginTop: "28px" }}
                  >
                    <img src={imgHeader} alt="PDN" style={{ height: "40px" }} />
                  </IconButton>
                  <Typography
                      variant="h6"
                      color="inherit"
                      className={classes.grow}
                  />

                  <div>
                    <IconButton
                        aria-owns={open ? "menu-appbar" : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit"
                    >
                      <MenuIcon style={{ fill: "white", fontSize: "36px" }} />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right"
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right"
                        }}
                        open={open}
                        onClose={this.handleClose}
                    >

                      {/*
                    <MenuItem component={Link} to="/faq">
                      Preguntas frecuentes
                    </MenuItem>
                    <MenuItem component={Link} to="/about">
                      ??Qu?? es la PDN?
                    </MenuItem>
                    <MenuItem component={Link} to="/terminos">
                      T??rminos de uso
                    </MenuItem>
                    */}


                      <MenuItem component={Link} to="/mesa-de-ayuda">
                        <Typography className={classes.text} variant="inherit" noWrap>{"Mesa de ayuda"}</Typography>
                      </MenuItem>
                      <MenuItem component={Button} className={classes.textTransform}
                                href="https://www.plataformadigitalnacional.org/blog">
                        Blog
                      </MenuItem>
                      <MenuItem component={Link} to="/especificaciones">
                        <Typography className={classes.text} variant="inherit" noWrap>{"Especificaciones"}</Typography>
                      </MenuItem>
                      <MenuItem component={Button} className={classes.textTransform}
                                href="https://www.plataformadigitalnacional.org/mapa-sla/">
                        Interconexi??n subnacional
                      </MenuItem>

                      {this.state.permisos.includes(
                          "admon-conexion-so:visit"
                      ) && (
                          <MenuItem component={Link} to={"/consolaAdmonSO"}>
                            Administrar conexi??n
                          </MenuItem>
                      )}
                      {this.state.permisos.includes("admon-pdn-page:visit") && (
                          <MenuItem component={Link} to={"/administracionPDN"}>
                            Administrar PDN
                          </MenuItem>
                      )}
                      {this.state.haySesion === true && (
                          <MenuItem onClick={this.handleSignOut}>
                            Cerrar sesi??n
                          </MenuItem>
                      )}
                      {this.state.haySesion === false && (
                          <MenuItem component={Link} to={"/login"} disabled={true}>
                            Iniciar sesi??n
                          </MenuItem>
                      )}

                      <Divider className={classes.divider}/>

                      <List component='div' dense={true} style={{paddingBottom: 0}}>
                        <ListItem button onClick={this.handleToggle}>
                          <ListItemText primary='Sistemas' />
                          {dropDown != null ? dropDown ?
                              <ExpandLess/> : <ExpandMore/> : null}
                        </ListItem>

                        <Collapse in={dropDown} timeout="auto" unmountOnExit>
                          <List dense={true} component="div" >

                            <ListItem button component={Link} to={"/declaraciones"} className={classes.nested}>
                              <ListItemText primary='Declaraciones'/>
                            </ListItem>

                            <ListItem button component={Link} to={"/servidores"} className={classes.nested}>
                              <ListItemText primary='S. P. En contrataciones'/>
                            </ListItem>

                            <ListItem button component={Link} to={"/sancionados"} className={classes.nested}>
                              <ListItemText primary='Sancionados'/>
                            </ListItem>

                            <ListItem button component={Link} to={"#"} disabled={true} className={classes.nested}>
                              <ListItemText primary='Fiscalizaci??n'/>
                            </ListItem>

                            <ListItem button component={Link} to={"#"} disabled={true} className={classes.nested}>
                              <ListItemText primary='Denuncias'/>
                            </ListItem>

                            <ListItem button component={Link} to={"/contrataciones"} className={classes.nested}>
                              <ListItemText primary='Contrataciones'/>
                            </ListItem>
                          </List>
                        </Collapse>
                      </List>

                      <List component='div' dense={true} style={{paddingTop: 0}}>
                        <ListItem button onClick={this.handleToggle2nd}>
                          <ListItemText primary='Avance de interconexi??n' />
                          {dropDown2 != null ? dropDown2 ?
                              <ExpandLess/> : <ExpandMore/> : null}
                        </ListItem>

                        <Collapse in={dropDown2} timeout="auto" unmountOnExit>
                          <List dense={true} component="div" >

                            <ListItem button component={Button}
                                      href="https://www.plataformadigitalnacional.org/mapa-sla/"
                                      style={{textTransform: "none"}}
                                      className={classes.nested}>
                              <ListItemText primary='Legislaci??n'/>
                            </ListItem>

                            <ListItem button component={Button}
                                      style={{textTransform: "none"}}
                                      href="https://www.plataformadigitalnacional.org/mapa-avance/"
                                      className={classes.nested}>
                              <ListItemText primary='Sistemas 2 y 3'/>
                            </ListItem>

                          </List>
                        </Collapse>
                      </List>


                    </Menu>
                  </div>
                </Toolbar>
              </Grid>
            </Grid>
          </AppBar>
        </div>
    );
  }
}

VideoAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

let previo = withRouter(VideoAppBar);
export default withStyles(styles)(previo);

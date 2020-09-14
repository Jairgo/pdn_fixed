import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";
//import withWidth from "@material-ui/core/withWidth/withWidth";
//import Tooltip from '@material-ui/core/Tooltip';
import {ListItemText, Typography} from "@material-ui/core";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from "@material-ui/core/Collapse/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const style = theme => ({
    menu: {
        fill: "#808080",
        fontSize: "36px",
    },
    text: {
        whiteSpace: "initial"
    },
    aux: {
        textTransform: "none"
    },
    divider:{
        marginTop: theme.spacing(1)
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
});

class MenuSistemas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
            dropDown: false,
            dropDown2: false
        };
    }

    handleClose = () => {
        this.setState({anchorEl: null, dropDown: false});
    };
    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
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
        const {classes} = this.props;
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const {dropDown, dropDown2} = this.state;

        return (
            <div>
                <IconButton
                    aria-owns={open ? "menu-appbar" : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                    style={{marginTop: "28px"}}
                >
                    <MenuIcon className={classes.menu}/>
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

                    <MenuItem component={Link} to="/mesa-de-ayuda">
                        <Typography className={classes.text} variant="inherit" noWrap>{"Mesa de ayuda"}</Typography>
                    </MenuItem>
                    <MenuItem component={Button} className={classes.aux}
                              href="https://www.plataformadigitalnacional.org/blog">Blog</MenuItem>
                    <MenuItem component={Link} to="/gaa/calidad">
                        <Typography className={classes.text} variant="inherit" noWrap>{"Calidad de datos"}</Typography>
                    </MenuItem>
                    <MenuItem component={Link} to="/especificaciones">
                        <Typography className={classes.text} variant="inherit" noWrap>{"Especificaciones"}</Typography>
                    </MenuItem>
                    <MenuItem component={Button} className={classes.aux}
                              href="https://plataformadigitalnacional.org/mapa-sla/">
                        Interconexión subnacional
                    </MenuItem>

                    <Divider className={classes.divider}/>

                    <List component='div' dense={true} style={{paddingBottom: 0}}>
                        <ListItem button onClick={this.handleToggle}>
                            <ListItemText primary='Sistemas'/>
                            {dropDown != null ? dropDown ?
                            <ExpandLess/> : <ExpandMore/> : null}
                        </ListItem>

                        <Collapse in={dropDown} timeout="auto" unmountOnExit>
                            <List dense={true} component="div">
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
                                    <ListItemText primary='Fiscalización'/>
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


                    <List component='div' dense={true} style={{paddingTop:0}}>
                        <ListItem button onClick={this.handleToggle2nd}>
                            <ListItemText primary='Avance interconexión'/>
                            {dropDown2 != null ? dropDown2 ?
                                <ExpandLess/> : <ExpandMore/> : null}
                        </ListItem>

                        <Collapse in={dropDown2} timeout="auto" unmountOnExit>
                            <List dense={true} component="div">
                                <ListItem button component={Button}
                                          href=""
                                          className={classes.nested}
                                          style={{textTransform: "none"}}
                                >
                                    <ListItemText primary='Legislación'/>
                                </ListItem>
                                <ListItem button
                                          component={Button}
                                          href=""
                                          className={classes.nested}
                                          style={{textTransform: "none"}}
                                >
                                    <ListItemText primary='Sisemas 2 y 3'/>
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>



                </Menu>
            </div>
        );
    }
}

//export default withWidth()(withStyles(style)(MenuSistemas));
export default withStyles(style)(MenuSistemas);

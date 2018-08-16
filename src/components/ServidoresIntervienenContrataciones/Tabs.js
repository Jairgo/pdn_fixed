import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TablaContraciones from './TablaContrataciones';
import TablaConcesiones from "./TablaConcesiones";
import TablaEnajenacion from "./TablaEnajenacion";
import TablaServidores from "./TablaServidores";
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ paddingTop: '1px' }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },

});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;
        if (isWidthUp('sm', this.props.width)) {
            return (
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs className={classes.tabs}
                              value={this.state.value}
                              onChange={this.handleChange}
                              indicatorColor="primary"
                              textColor="primary"
                              centered
                              fullWidth
                        >
                            <Tab label="Contrataciones públicas" />
                            <Tab label="Concesiones, licencias, permisos, autorizaciones y prórrogas" />
                            <Tab label="Enajenación de bienes muebles" />
                            <Tab label="Asignación y emisión de dictámenes de avalúos nacionales" />
                            <Tab label="Buscar un servidor público" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        <TabContainer dir={theme.direction} style={{padding:'0px important!'}}>
                            <TablaContraciones/>
                        </TabContainer>
                        <TabContainer dir={theme.direction}>
                            <TablaConcesiones/>
                        </TabContainer>
                        <TabContainer dir={theme.direction}>
                            <TablaEnajenacion/>
                        </TabContainer>
                        <TabContainer dir={theme.direction}>
                            <div>
                                No se encontraron datos
                            </div>
                        </TabContainer>
                        <TabContainer dir={theme.direction}>
                            <TablaServidores/>
                        </TabContainer>
                    </SwipeableViews>
                </div>
            );
        }else {
            return (
                <div className={classes.root}>
                    <AppBar position="static" color="default">

                        <Tabs className={classes.tabs}
                              value={this.state.value}
                              onChange={this.handleChange}
                              indicatorColor="primary"
                              textColor="primary"
                              scrollable={true}
                              scrollButtons="on"
                        >
                            <Tab label="Contrataciones públicas"/>
                            <Tab label="Concesiones, licencias, permisos, autorizaciones y prórrogas"/>
                            <Tab label="Enajenación de bienes muebles"/>
                            <Tab label="Asignación y emisión de dictámenes de avalúos nacionales"/>
                            <Tab label="Buscar un servidor público"/>
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        <TabContainer dir={theme.direction} style={{padding: '0px important!'}}>
                            <TablaContraciones/>
                        </TabContainer>
                        <TabContainer dir={theme.direction}>
                            <TablaConcesiones/>
                        </TabContainer>
                        <TabContainer dir={theme.direction}>
                            <TablaEnajenacion/>
                        </TabContainer>
                        <TabContainer dir={theme.direction}>
                            <div>
                                No se encontraron datos
                            </div>
                        </TabContainer>
                        <TabContainer dir={theme.direction}>
                            <TablaServidores/>
                        </TabContainer>
                    </SwipeableViews>
                </div>
            );
        }

    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
FullWidthTabs = withStyles(styles, { withTheme: true })(FullWidthTabs);
export default withWidth()(FullWidthTabs);


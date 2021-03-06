import React from "react";
import pndRoutes from "./routes/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import P404 from "./components/P404";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {esES} from "@material-ui/core/locale";
//import { createMuiTheme, MuiThemeProvider} from "@material-ui/core";

import PrivateRoute from "./PrivateRoute";
import app from "./config/firebase";
import LoginPDN from "./components/Inicio/LoginPDN";
import ScrollToTop from "./ScrollToTop";
import "./components/Utils/Header.css";

import Bandita from "./components/Home/Bandita";

// Google Analytics 
import ReactGA from 'react-ga';
ReactGA.initialize('UA-126837818-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const theme = createTheme({
  typography: {
    useNextVariants: true,
    //fontFamily: ['"Noto Sans SC"', "sans-serif"].join(
    fontFamily: ['"Noto Sans"', "sans-serif"].join(
        ","
    ),
  },
  palette: {
    text: {
      primary: '#666666'
    },
    primary: {
      main: "#89d4f2",
      light: "#bdffff",
      dark: "#56a3bf"
    },
    secondary: {
      main: "#ffe01b",
      light: "#ffff5c",
      dark: "#c8af00"
    },
    fontLight: {
      color: "#f5f5f5" //"#e0e0e0"
    },
    grey: {
      color: "#c5c5c5",

    },
    titleBanner: {
      color: "#666666"
    },
    graphGreen: {
      color: "#00cc99"
    },
    textPrincipal: {
      color: "#00322b"
    },
    textSecondary: {
      color: "#e6e6e6"
    },
    backLight: {
      color: "#e6e6e6"
    },
    backDark: {
      color: "rgb(55, 70, 79)"
    },
    textNormal: {
      color: "rgba(0, 0, 0, 0.87)"
    },
    white: {
      color: "#ffff"
    },
    grisTenue: {
      color: "#f5f5f5"
    },
    azul: {
      color: "#89d4f2",
      pdn: "#34b3eb"
    },
    black: {
      black: "#000"
    },
    red: {
      color: "#B00020"
    },
    textGrey: {
      color: "#666666"
    },
    pestanas:{
      bg: '#f2f2f2',
      activa : "#b7ccd5"
    }
  }
  /*   overrides:{
           MuiTableHead:{
               root:{
                   backgroundColor: '#8fe19f'
               }
           }
       }
   */
}, esES);

const p404 = () => {
  return <P404 />;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRecovery = email => {
    app
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          this.setState({
            mensaje:
                "Se ha enviado un correo a su cuenta. Por favor siga los pasos indicados"
          });
        })
        .catch(error => {
          console.log("Error con sendPasswordResetEmail ", error);
          this.setState({
            mensaje:
                error.code === "auth/invalid-email"
                    ? "El correo electr??nico no es v??lido"
                    : error.code === "auth/user-disabled"
                        ? "El usuario ha sido deshabilitado"
                        : error.code === "auth/user-not-found"
                            ? "El correo electr??nico no esta dado de alta"
                            : "La contrase??a es invalida o la cuenta no tiene una contrase??a"
          });
        });
  };

  render() {
    return (
        <ThemeProvider theme={theme}>
          <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
              <Bandita />
              <Switch>
                <Route exact path={"/login"} render={props => <LoginPDN />} />
                {pndRoutes.map((prop, key) => {
                  return prop.private ? (
                      <PrivateRoute
                          exact={prop.exact}
                          path={prop.path}
                          component={prop.component}
                          key={key}
                          perfom={prop.perfom}
                      />
                  ) : (
                      <Route
                          exact={prop.exact}
                          path={prop.path}
                          component={prop.component}
                          key={key}
                      />
                  );
                })}
                <Route component={p404} />
              
              </Switch>
            </ScrollToTop>
          </Router>
        </ThemeProvider>
    );
  }
}

export default App;

import Typography from "@material-ui/core/Typography";
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Antecedentes from '../Antecedentes';

const styles = theme => ({
    root: {
        flexGrow:1
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginBottom: theme.spacing.unit *2,
        background: '#ffe01b',//'#fecb6e'
    }
});

class Estandar extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h4" id="estandar" paragraph>Servidores públicos y particulares sancionados</Typography>
                <Typography paragraph>
                    Esta guía tiene como finalidad la descripción del Estándar para la Interoperabilidad de Datos de Declaraciones,
                    desarrollado por la Secretaría Ejecutiva del Sistema Nacional Anticorrupción (SESNA).
                    Se presenta el modelo de interoperabilidad que deberán adoptar los diversos sistemas de declaraciones que proveerán
                    información a la Plataforma Digital Nacional (PDN) y
                    se proporciona una serie de recomendaciones para la implementación del estándar por parte de las Instituciones.
                </Typography>

                <div id="antecedentes">
                    <Antecedentes/>
                </div>

                <Typography variant="h5" id="introduccion" paragraph>
                    Introducción
                </Typography>
                <Typography paragraph>
                    En la actualidad, la información de declaraciones de los servidores públicos de los diferentes
                    niveles de gobierno se encuentra contenida en diversos formatos,
                    bases de datos y sistemas de información; cada uno de ellos con particularidades tecnológicas y
                    reglas de negocio distintas, dificultando la integración y la
                    interoperabilidad de los datos. El Estándar para la Interoperabilidad de Datos de Declaraciones surge
                    a partir de la necesidad de distribuir, comparar y analizar
                    la información
                    de las declaraciones de situación patrimonial y de intereses de una manera uniforme e interoperable.
                </Typography>

                <Typography paragraph>
                    Conforme a lo anterior, la SESNA ha conceptualizado a la Plataforma Digital Nacional como una
                    herramienta que permitirá la consulta de información de las diferentes instituciones de los tres
                    niveles de gobierno en un solo punto, sin tener el objetivo de concentrarla o resguardarla.
                    En ese sentido, resulta necesario dotar a la PDN de mecanismos le que permitan interconectarse
                    con los diversos sistemas de gobierno para consultar la información que resulte necesaria,
                    sin importar la tecnología con la que dichos sistemas fueron desarrollados (i.e., lenguajes de programación, bases de datos, etc.).
                </Typography>
                <Typography paragraph>

                    La PDN logrará la interoperabilidad técnica con los diversos sistemas que la integrarán a través
                    de la creación de estándares de datos y mediante el uso de Interfaces de Programación de Aplicaciones
                    o APIs (por sus siglas en Inglés). Los estándares de datos permitirán homologar la manera en que la
                    información se debe representar para su entrega a la PDN, mientras que las APIs serán el mecanismo
                    que permitirá la comunicación entre sistemas a través de Internet.
                    Las APIs son ampliamente usadas para el desarrollo de aplicaciones a gran escala.
                    El uso de APIs permitirá que las instituciones conserven el control de sus datos, gestionando el
                    acceso a los mismos mediante reglas y perfiles de usuario.

                </Typography>
                <Typography paragraph>
                    La SESNA ha planeado el desarrollo de la PDN mediante el uso APIs Web
                    con arquitectura REST (REpresentational State Transfer).
                    Dicha tecnología es ampliamente usada por en la industria del software para el desarrollo de aplicaciones web,
                    y en la actualidad, existe grán diversidad de herramientas de código abierto que permiten la implementación de
                    sistemas basados en APIs REST de manera rápida y a un bajo costo.
                </Typography>

                <Typography variant="h5" id="oas" paragraph>
                    Open API Specification
                </Typography>
                <Typography paragraph>
                    El Estándar para la Interoperabilidad de Datos de Declaraciones está basado en el formato conocido como Open API Specification (OAS),
                    el cual es un formato de especificación que permite describir de manera precisa las características con las que deberan
                    contar las APIs que integrarán a la PDN.
                    El OAS cuenta con capacidades para describir los recursos, operaciones, parámetros y estructuras de datos
                    con las que deberán contar las APIs, permitiendo su implementación con independencia tecnológica, es decir,
                    las instituciones podrán
                    emplear las herramientas tecnológicas de su elección (e.g., lenguajes de programación, bases de datos, etc.)
                    siempre que se sigan las especificaciones de manera correcta.
                </Typography>

                <p>
                    <Button variant="contained" className={classes.button} href="https://github.com/OAI/OpenAPI-Specification">Más información</Button>
                </p>

                <Typography variant="h5" id="oauth" paragraph>
                    OAuth 2.0
                </Typography>
                <Typography paragraph>
                    El acceso a las APIs que se integrarán a la PDN se gestionará a través del protocolo de autorización OAuth 2.0,
                    el cual es un estándar ampliamente usado por la industria de Internet. El estándar OAuth 2.0
                    que permitirá a la PDN obtener acceso necesario a las APIs de las instituciones
                    a través del uso de tokens de autorización.
                </Typography>
                <p>
                    <Button variant="contained" className={classes.button} href="https://oauth.net/2/"> Más información </Button>
                </p>
            </div>)
    }
}

export default withStyles(styles) (Estandar);
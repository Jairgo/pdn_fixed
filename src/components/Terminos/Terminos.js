import React from 'react';
import PropTypes from 'prop-types';
import {Typography} from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Header from "./Header/Header.js";
//import by from '../../assets/about/by.svg';
import Link from '@material-ui/core/Link'
import Footer from '../Home/Footer';
import './Terminos.css';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    section: {
        maxWidth: '1000px',
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingBottom: 100,
        paddingTop: 100
    },

    ul: {
        listStyle: 'none',
        paddingLeft: '20px',
        color: theme.palette.text.primary
    },
    li: {
        "&:before": {
            content: '"•"',
            color: '#5fb1e6',
            fontWeight: "bold",
            display: "inline-block",
            width: "1em",
            marginLeft: "-1em"
        }
    }

});

class Terminos extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header/>
                <Grid container spacing={0} justify='center'>
                    <Grid item xs={12} className={classes.section}>
                        <Typography variant='title' className="pdn_term_title">
                            TÉRMINOS Y CONDICIONES DE USO DE LA PLATAFORMA DIGITAL NACIONAL
                        </Typography><br/><br/>
                        <Typography paragraph className="pdn_term_content">
                            La Plataforma Digital Nacional (PDN) se desarrolla de conformidad con la normatividad
                            vigente:
                        </Typography>

                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    <Link target="_blank" href={"http://www.diputados.gob.mx/LeyesBiblio/pdf/LGSNA.pdf"}>Ley General del
                                        Sistema Nacional Anticorrupción</Link>, publicada en el Diario Oficial de
                                    la Federación el 18 de julio del 2016.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display="inline">
                                    <Link target={"_blank"} href={"http://www.diputados.gob.mx/LeyesBiblio/pdf/LGRA_120419.pdf"}>Ley General
                                        de Responsabilidades Administrativas</Link>, publicada en el Diario Oficial de
                                    la Federación el 12 de abril del 2016.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    <Link target={"_blank"} href={"https://www.dof.gob.mx/nota_detalle.php?codigo=5541802&fecha=23/10/2018"}>Bases
                                        para el Funcionamiento de la Plataforma Digital Nacional</Link>, publicadas en el
                                    Diario Oficial de la Federación el 23 de octubre del 2018.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Estatuto Orgánico de la Secretaría Ejecutiva del Sistema Nacional Anticorrupción,
                                    publicado en el Diario Oficial de la Federación el 21 de julio de 2017.
                                </Typography>
                            </li>
                        </ul>
                        <Typography paragraph className="pdn_term_content">
                            La PDN está conceptualizada como una Plataforma de interoperabilidad, que integrará y
                            conectará los diversos sistemas<sup>1</sup> que posean datos e información para las
                            autoridades
                            encargadas de la lucha contra la corrupción. Por lo anterior, los datos e información
                            presentados en la PDN <b><u>no son generados ni actualizados por</u></b> la SESNA, de
                            acuerdo con la
                            normatividad vigente.
                            <br/><br/>
                            Para el manejo de los datos, la Plataforma seguirá las disposiciones aplicables en materia
                            de transparencia, acceso a la información, datos abiertos y protección de datos personales.

                        </Typography>

                        <Typography variant='title' className="pdn_term_subtitle">
                            Sobre el uso de plataformadigitalnacional.org<br/>
                            I. Obligaciones del usuario:
                        </Typography>
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    No dañar, inutilizar o deteriorar los sistemas informáticos que puedan ser
                                    incorporados en este sitio, incluido el portal plataformadigitalnacional.org.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display="inline">
                                    No modificar de ninguna manera los sistemas informáticos que puedan ser
                                    incorporados.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    No utilizar versiones de sistemas modificados con el fin de obtener acceso no
                                    autorizado a cualquier sistema de información, contenido y/o servicios del portal.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    No interferir ni interrumpir el acceso, funcionalidad y utilización del portal,
                                    servidores o redes conectados al mismo.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Los enlaces que son proporcionados en el sitio son sólo con fines informativos, por
                                    lo que los contenidos o recursos de esos sitios de internet o páginas
                                    gubernamentales, será responsabilidad exclusiva de los entes públicos, por lo que la
                                    autoría y reconocimiento de la misma, es responsabilidad del propio ente público. Lo
                                    anterior sin perjuicio de lo que establece la Ley Federal del Derecho de Autor y
                                    demás normatividad aplicable.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Este sitio contiene medidas de seguridad para proteger la información de cualquier
                                    alteración realizada por terceros.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    La Secretaría Ejecutiva del Sistema Nacional Anticorrupción (en adelante SESNA) se
                                    deslinda de cualquier responsabilidad, perjuicio o daño que pueda generar el usuario
                                    por cualquier uso inadecuado del portal o la información contenida en
                                    plataformadigitalnacional.org.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    El usuario se obliga a hacer buen uso del sitio, respetando la Ley General del
                                    Sistema Nacional Anticorrupción, la Ley Federal de Derechos de Autor y demás
                                    normatividad aplicable.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Debe contar con un equipo que cumpla con las características mínimas necesarias para
                                    navegar en el sitio, recomendando su navegación en las últimas versiones de los
                                    navegadores Google Chrome, Mozilla Firefox y Safari para obtener la mejor
                                    experiencia.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Exime a la SESNA de toda responsabilidad por los daños que el uso del sitio le
                                    pudieran ocasionar en forma incidental o consecuente con su equipo, información,
                                    patrimonio o persona, así como ninguna responsabilidad por la la alteración o
                                    manipulación de los datos una vez publicados en él.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Acepta y se obliga a utilizar el sitio para fines lícitos y con apego a las
                                    disposiciones legales aplicables.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    El destino y tratamiento de los datos que se obtengan de la plataforma, son
                                    responsabilidad exclusivamente del usuario, y de manera alguna señalarán el
                                    posicionamiento de ningún Ente Público<sup>2</sup>, salvo que expresamente se
                                    refiera.
                                </Typography>
                            </li>
                        </ul>
                        <Typography variant='title' className="pdn_term_subtitle">
                            II. Responsabilidad de los encargados<sup>3</sup>, concentradores<sup>4</sup> y
                            proveedores<sup>5</sup><br/>
                            De acuerdo a lo establecido en las Bases para el Funcionamiento de la Plataforma Digital
                            Nacional, son responsabilidades de los encargados, concentradores y proveedores:
                        </Typography>
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Los encargados, según corresponda, tendrán la obligación de actualizar y administrar
                                    los subsistemas<sup>6</sup>, y de cumplir la normatividad que corresponda para
                                    garantizar la
                                    estandarización, integridad e interoperabilidad de la información de los sistemas de
                                    la Plataforma.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display="inline">
                                    Los concentradores tendrán la obligación de agrupar la información proporcionada por
                                    los proveedores en los conjuntos de datos, para que sea ingresada a los sistemas o
                                    subsistemas, según corresponda.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Será obligación de los encargados y los concentradores vigilar la homologación,
                                    actualización y disponibilidad de la información que sea transferida de los
                                    subsistemas y conjuntos de datos a los sistemas, de conformidad con la normatividad
                                    aplicable, y verificar de manera permanente el correcto funcionamiento de los
                                    subsistemas y conjuntos de datos, así como sus procesos de generación,
                                    estandarización, actualización y distribución de información a los sistemas, de
                                    acuerdo a las disposiciones emitidas por la SESNA, para asegurar el correcto
                                    funcionamiento de la Plataforma.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Los proveedores de datos deberán proporcionar los datos e información, en tiempo y
                                    forma, de conformidad con la legislación aplicable.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Será obligación de los usuarios el uso adecuado de la información conforme a los
                                    objetivos y normatividad del Sistema Nacional Anticorrupción y la legislación
                                    aplicable.
                                </Typography>
                            </li>
                        </ul>
                        <Typography variant='title' className="pdn_term_subtitle">
                            III. Es responsabilidad de la Secretaría Ejecutiva del Sistema Nacional Anticorrupción
                            De acuerdo a lo establecido en las Bases para el Funcionamiento de la Plataforma Digital
                            Nacional, es responsabilidad de la SESNA:
                        </Typography>
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Administrar la PDN.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display="inline">
                                    Emitir los protocolos, estándares, reglamentos, especificaciones técnicas y
                                    cualquier normatividad necesaria para la colaboración, provisión de datos y acciones
                                    para cumplir con las Bases, los cuales serán obligatorios para todos los
                                    proveedores, concentradores y encargados a nivel federal, estatal y municipal.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Verificar de manera permanente el correcto funcionamiento de los componentes de la
                                    PDN.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    En caso de que la Plataforma o alguno de sus sistemas presente una falla técnica, la
                                    SESNA deberá hacer del conocimiento de los usuarios la magnitud de la falla y el
                                    tiempo de recuperación, para que éstos estén en posibilidad de implementar las
                                    medidas necesarias para el cumplimiento de sus respectivas obligaciones.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    En caso de que algún subsistema o conjunto de datos presente una falla técnica, el
                                    encargado o concentrador correspondiente deberá hacer del conocimiento de la SESNA
                                    la magnitud de la falla y el tiempo de recuperación, para que la SESNA esté en
                                    posibilidad de implementar las medidas necesarias para el cumplimiento de sus
                                    respectivas obligaciones en tiempo y forma.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    Informar a los integrantes del Comité Coordinador sobre el funcionamiento de la
                                    Plataforma, recomendaciones para mejorarlo, y sobre las fallas que ésta o cualquiera
                                    de sus componentes puedan haber presentado, y las medidas que se tomarán para
                                    solucionarlas.
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography display='inline'>
                                    La SESNA se coordinará con las Secretarías Ejecutivas de los Sistemas Locales
                                    Anticorrupción, a efecto de determinar su participación en la construcción de los
                                    sistemas de la Plataforma y la forma de interconexión que tendrán con cada uno de
                                    los sistemas a nivel local.
                                </Typography>
                            </li>
                        </ul>
                        <Typography variant='title' className="pdn_term_title">
                            CONDICIONES DE USO DE LOS DATOS PÚBLICOS DE LA PLATAFORMA DIGITAL NACIONAL
                        </Typography>
                        <ul className={classes.ul}>
                            <li className={classes.li}><Typography display='inline'>Citar a la Plataforma Digital
                                Nacional como fuente de los datos mencionando, por lo menos:</Typography>
                                <ul>
                                    <li><Typography display='inline'>Nombre del sistema de la PDN por el que se
                                        consultaron los datos;</Typography></li>
                                    <li><Typography display='inline'>Plataforma Digital Nacional;</Typography></li>
                                    <li><Typography display='inline'>Liga de internet para acceder a los datos a través
                                        de la PDN;</Typography></li>
                                    <li><Typography display='inline'>Fecha de consulta.</Typography></li>
                                </ul>
                            </li>
                            <li className={classes.li}><Typography display='inline'>No utilizar la información con
                                objeto de engañar o confundir a la población variando el sentido original de la
                                información y su veracidad.
                            </Typography></li>
                            <li className={classes.li}><Typography display='inline'>No aparentar que el uso que usted
                                haga de los datos representa una postura oficial de ningún Ente Público del Estado
                                Mexicano o que el mismo está avalado por la fuente de origen.
                            </Typography></li>
                        </ul>


                        <Typography className="pdn_term_content"><b>Propiedad intelectual:</b></Typography>
                        <Typography paragraph className="pdn_term_content">
                            La información del portal plataformadigitalnacional.org es pública a menos que se indique lo
                            contrario, en cuyo caso antes de reproducirla, deberás observar si tiene derechos reservados
                            y respetarlos en términos de las normas relativas a derechos de autor y propiedad
                            industrial.
                        </Typography>
                        <Typography className="pdn_term_content"><b>Actualización de los términos y
                            condiciones:</b></Typography>
                        <Typography paragraph className="pdn_term_content">
                            La SESNA cuenta con la facultad de modificar los presentes Términos y Condiciones en
                            cualquier momento a efecto de mejorar tu experiencia en la utilización de la PDN.
                            <br/><br/>
                            Al respecto, estos Términos y Condiciones pueden cambiar, por lo que te pedimos revisar
                            constantemente nuestro portal.
                            <br/><br/>
                            El uso del portal <Link target="_blank"
                            href="https://www.plataformadigitalnacional.org/">plataformadigitalnacional.org</Link> o
                            de cualquiera de sus componentes,
                            implica la aceptación expresa de los presentes “Términos y Condiciones”
                        </Typography>
                        <br/><br/><br/>
                        <hr/>
                        <Typography className="pdn_nota">
                            <b><sup>1</sup>Sistemas</b>: Los establecidos, de manera enunciativa más no limitativa, de
                            conformidad con lo previsto en el artículo 49 de la Ley General del Sistema Nacional
                            Anticorrupción, los cuales se alimentan de la información de los subsistemas, conjuntos de
                            datos o proveedores, y que en su conjunto conforman la Plataforma Digital Nacional.
                        </Typography>
                        <Typography className="pdn_nota">
                            <b><sup>2</sup>Ente Público</b>: En términos de lo dispuesto en el artículo 3, fracción X de
                            la Ley General de Responsabilidades Administrativas,
                        </Typography>
                        <Typography className="pdn_nota">
                            <b><sup>3</sup>Encargados</b>: Toda persona o ente que recibe, ordena o resguarda datos e
                            información en los subsistemas para su integración a los sistemas.
                        </Typography>
                        <Typography className="pdn_nota">
                            <b><sup>4</sup>Concentradores</b>: Toda persona o ente que recibe, ordena o resguarda datos
                            e información en los conjuntos de datos para su integración a los sistemas.
                        </Typography>
                        <Typography className="pdn_nota">
                            <b><sup>5</sup>Proveedores</b>: Toda persona o ente que suministra datos o información que
                            será integrada a los sistemas.
                        </Typography>
                        <Typography className="pdn_nota">
                            <b><sup>6</sup>Subsistemas</b>: Conjuntos de datos e información concentrados, resguardados,
                            administrados y actualizados por los encargados que alimentan a los sistemas, y que
                            contendrán la información que establezca la SESNA para ser interconectada e integrada en los
                            sistemas.
                        </Typography>
                    </Grid>
                </Grid>
                <Footer/>
            </div>
        )
    }
}

Terminos.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Terminos);

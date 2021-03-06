import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import MuiLink from "@material-ui/core/Link";
import {Link} from "react-router-dom";
import Diagrama from "../../assets/Diagrama_de_comunicacion_API.svg";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);



const useStyles = makeStyles( theme => ({
    link: {
        textDecoration: "none",
        color: theme.palette.primary.dark,
        wordBreak: "break-all"
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
        background: '#ffe01b',//'#fecb6e'
    },
    ul: {
        listStyle: 'none',
        //paddingLeft: '20px'
    },
    li: {
        "&:before":{
            content: '"???"',
            color: '#5fb1e6',
            fontWeight: "bold",
            display: "inline-block",
            width: "1em",
            marginLeft: "-1em"
        }
    }
}));


export default function CustomizedExpansionPanels() {
    const [expanded, setExpanded] = React.useState('');//'panel1');

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const classes = useStyles();

    return (
        <div>


            <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>??Qu?? es la PDN?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>


                    <div>

                        <Typography paragraph>
                            Una fuente de inteligencia para construir integridad y combatir la corrupci??n que crear?? valor para el gobierno y la sociedad a partir de grandes cantidades de datos.
                        </Typography>

                        <Typography paragraph>
                            Un medio para el intercambio de datos anticorrupci??n del gobierno, que busca quitar barreras y romper silos de informaci??n para que los datos sean comparables, accesibles y utilizables.
                        </Typography>

                        <Typography paragraph>
                            El desarrollo de la PDN considera seis sistemas que contienen datos estrat??gicos para la lucha contra la corrupci??n, <b>contemplados en la Ley General del Sistema Nacional Anticorrupci??n (LGSNA):</b>
                        </Typography>

                                <ul className={classes.ul}>
                                    <li className={classes.li}><Typography display='inline'> Sistema 1 | Declaraciones patrimonial,  de intereses y constancia de declaraci??n fiscal.</Typography></li>
                                    <li className={classes.li}><Typography display='inline'> Sistema 2 | Servidores p??blicos que intervienen en procedimientos de contrataci??n.</Typography></li>
                                    <li className={classes.li}><Typography display='inline'> Sistema 3 | Servidores p??blicos y particulares sancionados.</Typography></li>
                                    <li className={classes.li}><Typography display='inline'> Sistema 4 | Informaci??n y comunicaci??n del Sistema Nacional Anticorrupci??n y el Sistema Nacional de Fiscalizaci??n.</Typography></li>
                                    <li className={classes.li}><Typography display='inline'> Sistema 5 | Denuncias por faltas administrativas y hechos de corrupci??n.</Typography></li>
                                    <li className={classes.li}><Typography display='inline'> Sistema 6 | Contrataciones P??blicas.</Typography></li>
                                </ul>

                        <Typography paragraph>
                            Es importante se??alar que la PDN no es un repositorio ni generadora de los datos de cada sistema, sino que es una plataforma de interoperabilidad.
                        </Typography>


                        <Button  target="_blank" className={classes.button} variant="contained" href='https://drive.google.com/file/d/1wdy8bgX9fn1yRCAWSJMhjeTYKxEOXRQv/view'>
                             ??Qu?? es la PDN?
                        </Button>

                        <Button target="_blank" className={classes.button} variant="contained" href="https://drive.google.com/file/d/1YbkcDrRoscIUJtEiyM55GCliHsW22TkK/view">
                            ??C??mo se construye?
                        </Button>

                        <Button target="_blank" className={classes.button} variant="contained" href="https://drive.google.com/file/d/1xYlY50lXttiuu0brV5CVd5H8qx96vDsK/view">
                            Gu??a desarrollo PDE
                        </Button>
                    </div>


                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Objetivos de la PDN</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography>
                            Usar nuevas tecnolog??as y metodolog??as de trabajo como apoyo al trabajo de las autoridades del Sistema Nacional Anticorrupci??n para:
                        </Typography>

                        <ul className={classes.ul}>
                            <li className={classes.li}><Typography display='inline'> Analizar y alertar a las autoridades sobre riesgos de corrupci??n;</Typography></li>
                            <li className={classes.li}><Typography display='inline'> Automatizar procesos, evitar discrecionalidad y conflicto de inter??s;</Typography></li>
                            <li className={classes.li}><Typography display='inline'> Promover el uso de los datos para respaldar sanciones;</Typography></li>
                            <li className={classes.li}><Typography display='inline'> Dar seguimiento, en tiempo real, a los procesos y proyectos de contrataci??n p??blica, y garantizar una mayor eficiencia en las compras p??blicas;</Typography></li>
                            <li className={classes.li}><Typography display='inline'> Fortalecer la participaci??n ciudadana en el combate a la corrupci??n;</Typography></li>
                            <li className={classes.li}><Typography display='inline'> Incorporar informaci??n sobre indicadores para evaluar la Pol??tica Nacional Anticorrupci??n;</Typography></li>
                            <li className={classes.li}><Typography display='inline'> Dar evidencia para generar recomendaciones de pol??tica p??blica a las autoridades;</Typography></li>
                        </ul>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Marco normativo</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>

                        <Typography paragraph>
                            El marco normativo de la PDN est?? compuesto por la Ley General del Sistema Nacional Anticorrupci??n (LGSNA), la Ley General de Responsabilidades Administrativas (LGSNA) y las Bases para el Funcionamiento de la Plataforma Digital Nacional (publicadas el 23 de octubre del 2018 en el Diario Oficial de la Federaci??n).
                        </Typography>

                        <MuiLink component='a' href="http://www.diputados.gob.mx/LeyesBiblio/pdf/LGSNA_200521.pdf">
                            Ley General Del Sistema Nacional Anticorrupci??n
                        </MuiLink>
                        <Typography paragraph>(Art??culos 9, fracciones XII, XIII y XVI; 17; 21, VII, b); 35, X y XI; T??tulo cuarto)</Typography>

                        <Typography paragraph>
                            El Art??culo 9 de la LGSNA, en sus fracciones XII y XIII, faculta el que se establezca una Plataforma Digital que integre y conecte los diversos sistemas electr??nicos que poseen datos e informaci??n necesaria para establecer pol??ticas integrales y para que las autoridades competentes tengan acceso a los sistemas a que se refiere el T??tulo Cuarto de esta Ley ; en este t??tulo se contemplan los seis sistemas m??nimos que debe tener la Plataforma:
                        </Typography>

                        <ol>
                            <li><Typography>
                                Sistema de evoluci??n patrimonial, de declaraci??n de intereses y constancia de presentaci??n de declaraci??n fiscal (S1);
                            </Typography>
                            </li>
                            <li>
                                <Typography>
                                Sistema de los Servidores p??blicos que intervengan en procedimientos de contrataciones p??blicas (S2);
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                Sistema Nacional de Servidores p??blicos y particulares sancionados (S3);
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                Sistema de informaci??n y comunicaci??n del Sistema Nacional y del Sistema Nacional de Fiscalizaci??n (S4);
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                Sistema de denuncias p??blicas de faltas administrativas y hechos de corrupci??n (S5); y,
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                Sistema de Informaci??n P??blica de Contrataciones (S6).
                                </Typography>
                            </li>
                        </ol>

                        <MuiLink component='a' href="http://www.diputados.gob.mx/LeyesBiblio/pdf/LGRA_200521.pdf">
                            Ley General de Responsabilidades Administrativas
                        </MuiLink>

                        <Typography paragraph>(Art??culos 26, 27,30, 31, 34, 43, 44, 46, 59, 93)</Typography>

                        <Typography paragraph>
                            Establece la necesidad de contar con los siguientes Sistemas:
                        </Typography>

                        <ol>
                            <li>
                                <Typography>
                                (S1) Sistema de evoluci??n patrimonial, de declaraci??n de intereses y constancia de presentaci??n de declaraci??n fiscal;
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                (S3) Sistema de servidores p??blicos y particulares sancionados
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                (S6) Servidores P??blicos que intervengan en procedimientos para contrataciones p??blicas;
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                (S5) Sistema de denuncias por hechos de corrupci??n
                                </Typography>
                            </li>
                        </ol>

                        <MuiLink component='a' href="https://www.dof.gob.mx/nota_detalle.php?codigo=5541802&fecha=23/10/2018">
                            Bases para el Funcionamiento de la Plataforma Digital Nacional.
                        </MuiLink>

                        <Typography paragraph>
                            Las Bases establecen las directrices para el funcionamiento de la PDN  y los sistemas que la conforman, buscando garantizar la interoperabilidad, interconexi??n, estabilidad, uso y seguridad de la informaci??n integrada en la Plataforma; promoviendo la homologaci??n de procesos, estandarizaci??n de datos y la simplicidad del uso para los usuarios; teniendo en cuenta en todo momento los derechos de acceso a la informaci??n y protecci??n de datos personales en posesi??n de los sujetos obligados; que permitan cumplir con los procedimientos, obligaciones y disposiciones del Sistema Nacional Anticorrupci??n y las instituciones que lo conforman.
                        </Typography>

                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>??Qu?? hace la SESNA y la USTPDN?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography paragraph>
                            La Secretar??a Ejecutiva del Sistema Nacional Anticorrupci??n (SESNA) tiene como prop??sito brindar apoyo t??cnico al Comit?? Coordinador del Sistema Nacional Anticorrupci??n.
                        </Typography>

                        <Typography paragraph>
                            La SESNA es responsable de dise??ar, promover y evaluar la Pol??tica Nacional Anticorrupci??n, y de administrar la Plataforma Digital Nacional.
                        </Typography>

                        <Typography paragraph>
                            El objetivo de la Unidad encargada de la Plataforma Digital Nacional (USTPDN) es utilizar nuevas tecnolog??as, metodolog??as, ciencia de datos e inteligencia artificial como insumos y apoyo al trabajo de las autoridades que conforman el Comit?? Coordinador del Sistema Nacional Anticorrupci??n.
                        </Typography>

                        <Typography paragraph>
                            Asimismo, la LGSNA menciona que la funci??n de la PDN es integrar y conectar los diversos sistemas electr??nicos que posean datos e informaci??n sobre los seis sistemas. ??stos deben ser interoperables, es decir, deben ser capaces de obtener o transferir informaci??n con otros sistemas. Para lograr la interoperabilidad de los datos, es necesario estandarizarlos y ponerlos en un formato com??n.
                        </Typography>

                        <Typography paragraph>
                            Para ello la SESNA emitir?? los protocolos, est??ndares, reglamentos, especificaciones t??cnicas y cualquier normativa necesaria para la colaboraci??n, provisi??n de datos y acciones para cumplir con las Bases, los cuales ser??n obligatorios para todos los proveedores, concentradores y encargados a nivel federal, estatal y municipal, enmarcado en el art??culo 6 de las Bases de la PDN (Art??culo 6, BFPDN).
                        </Typography>

                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>Sistemas Estatales Anticorrupci??n</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>

                        <Typography variant="h6" paragraph> Normatividad:</Typography>


                        <Typography paragraph>
                            <b>Concentradores estatales:</b> Son los miembros de los Sistemas Estatales Anticorrupci??n que resguardan la informaci??n para su integraci??n a los sistemas de la PDN (VI, art. 3, Bases; legislaciones estatales anticorrupci??n).
                        </Typography>

                        <Typography paragraph>
                            <b>Bases para el funcionamiento de la PDN: </b>
                            La Secretar??a Ejecutiva se coordinar?? con las Secretar??as Ejecutivas de los Sistemas Locales Anticorrupci??n (SLA), a efecto de determinar su participaci??n en la construcci??n de los sistemas de la Plataforma y la forma de interconexi??n que tendr??n con cada uno de los sistemas a nivel local (Art 23).
                        </Typography>

                        <Typography paragraph>
                            Las Secretar??as Ejecutivas de los Sistemas Locales Anticorrupci??n deber??n coordinar los trabajos de implementaci??n de las Bases, previo acuerdo con sus Comit??s Coordinadores, conforme a lo establecido por la Secretar??a Ejecutiva (Art. 24).
                        </Typography>

                        <Typography paragraph>
                            <b>LGSNA: </b>
                            Los SLA promover??n la publicaci??n de la informaci??n contenida en la plataforma en formato de datos abiertos, conforme a la Ley General de Transparencia y Acceso a la Informaci??n P??blica y la dem??s normatividad aplicable como las Bases para el funcionamiento de la PDN y otros lineamientos que emita la SESNA (Art. 50).
                        </Typography>


                        <Typography variant="h5">
                            Acciones
                        </Typography>

                        <Typography paragraph>
                            Las Secretar??as Ejecutivas de los Sistemas Locales, ser??n las <b><u>responsables de coordinar el  trabajo a nivel local,</u></b> para asegurarse de que sus sistemas cuenten con la informaci??n estandarizada y que cumpla con las especificaciones t??cnicas establecidas por la SESNA, necesarias para conectarse con la Plataforma Digital Nacional.
                        </Typography>

                        <Typography paragraph>
                            Se sugiere realizar la interpretaci??n acerca la responsabilidad que la <i>Ley del Sistema Local Anticorrupci??n</i> u hom??loga.
                        </Typography>

                        <Typography paragraph>
                            Asimismo, se les recomienda comenzar por <b><u>revisar de manera detallada</u></b> las especificaciones t??cnicas y los diccionarios de datos que ya fueron publicados en la siguiente p??gina: <Link to="/especificaciones" className={classes.link}>https://www.plataformadigitalnacional.org/especificaciones</Link>.
                        </Typography>

                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>Preguntas t??cnicas frecuentes </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>



                        <Typography variant="h5" paragraph>
                            ??C??mo funciona la PDN?
                        </Typography>


                        <Typography paragraph>
                            El siguiente Diagrama 1 muestra un dise??o de alto nivel de la arquitectura y las funcionalidades de la PDN. El flujo es el siguiente:
                        </Typography>

                        <ol>
                            <li><Typography>Un usuario entra a la PDN y hace una petici??n de cierta informaci??n.</Typography></li>
                            <li><Typography>La PDN env??a la petici??n de informaci??n del usuario usando par??metros de consulta al API de la dependencia.</Typography></li>
                            <li><Typography>El API solicita a sus Bases de Datos la informaci??n.</Typography></li>
                            <li><Typography>En este punto de comunicaci??n tambi??n hay controles de autenticaci??n de permisos, as?? como encriptaci??n de datos que protegen el env??o de la respuesta con la informaci??n solicitada desde la dependencia  hasta  la PDN.</Typography></li>
                        </ol>



                        <img alt="diagrama" src={Diagrama} className={classes.diagrama}/>

                        <Typography variant="h5" paragraph>??C??mo se est?? construyendo la PDN?</Typography>

                        <Typography paragraph>
                            El equipo de la PDN cuenta con desarrolladores web, que hacen uso intensivo de las tecnolog??as de software m??s
                            modernas y de c??digo abierto.
                        </Typography>

                        <Typography paragraph>
                            Existen tres componentes t??cnicos clave que permiten el desarrollo de la PDN
                        </Typography>

                        <ol>
                            <li><Typography>Uso de web APIs que permitan la consulta de los datos desde la PDN a la entidad. Actualmente existen herramientas de c??digo abierto para implementar las APIs r??pidamente y de bajo costo.</Typography></li>
                            <li><Typography>Est??ndares t??cnicos de datos que permiten compartir, para cada uno de los seis sistemas clave, informaci??n entre las dependencias y la PDN en una manera unificada y estandarizada. Actualmente hemos desarrollado tres est??ndares:</Typography></li>
                            <ul>
                                <li><Link to="/declaraciones/especificaciones" className={classes.link}><Typography>Declaraciones</Typography></Link></li>
                                <li><Link to="/intervienen/especificaciones" className={classes.link}><Typography>Servidores p??blicos que intevienen en contrataciones</Typography></Link></li>
                                <li><Link to="/sancionados/especificaciones" className={classes.link}><Typography>Servidores p??blicos y particulares sancionados</Typography></Link></li>
                            </ul>
                            <li><Typography>Tecnolog??as y servicios de software modernos y de c??digo abierto. El c??digo de la PDN puede consultarse <MuiLink href="https://github.com/PDNMX"> aqu??</MuiLink>. Las tecnolog??as que usamos son las siguientes:</Typography></li>
                        </ol>




                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>Contenedores</b> <br/>
                                    Uso: Puesta en marcha y distribuci??n de actualizaciones <br/>
                                    Tecnolog??a: Docker, Kubernetes
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>Anal??ticos</b><br/>
                                    Uso: Inteligencia de datos<br/>
                                    Tecnolog??a: Python
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>Backend</b><br/>
                                    Uso: L??gica de negocio de la PDN<br/>
                                    Tecnolog??a: Python, Node.js, express.js  y Graphql
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>Base de Datos</b><br/>
                                    Uso: Tecnolog??a de almacenamiento <br/>
                                    Tecnolog??a: PostgreSQL y MongoDB
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>FrontEnd</b><br/>
                                    Uso: Desarrollo de interfaz de usuario<br/>
                                    Tecnolog??a: React.js Material UI
                                </Typography>
                            </li>
                            <li className={classes.li} display='inline'>
                                <Typography paragraph display='inline'>
                                    <b>Seguridad</b><br/>
                                    Uso: Autorizaci??n<br/>
                                    Tecnolog??a: OAuth 2.0
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>Testing</b><br/>
                                    Uso: Pruebas de software<br/>
                                    Tecnolog??a: Jestjs
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>Continous integration</b><br/>
                                    Uso: Integraci??n continua<br/>
                                    Tecnolog??a: TravisCI
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>Servicios web</b><br/>
                                    Uso: Comunicaci??n con instituciones<br/>
                                    Tecnolog??a: Web APIs (REST y GrapQL)
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>Est??ndares de datos</b><br/>
                                    Uso: Estandarizaci??n de informaci??n<br/>
                                    Tecnolog??a: Open API Specification y GraphQL
                                </Typography>
                            </li>
                            <li className={classes.li}>
                                <Typography paragraph display='inline'>
                                    <b>Control de versiones</b><br/>
                                    Uso: Repositorios de c??digo y control de versiones<br/>
                                    Tecnolog??a: Git
                                </Typography>
                            </li>
                        </ul>


                        <Typography paragraph variant="h5">
                            ??Qu?? es la interoperabilidad?
                        </Typography>

                        <Typography paragraph>
                            Interoperabilidad se refiere a la posibilidad que tiene un sistema de obtener o transferir informaci??n con otros sistemas. Para lograr la interoperabilidad de los datos, es necesario estandarizarlos y ponerlos en un formato com??n.
                        </Typography>

                        <Typography paragraph variant="h5">
                            ??Qu?? es un est??ndar de datos?
                        </Typography>
                        <Typography paragraph>
                            Un est??ndar se refiere a las reglas y caracter??sticas con las que debe de contar un conjunto de datos, como: tipo de dato (i.e., num??rico, entero, caracter, cadena), longitud, n??mero de veces que aparece, precisi??n, etc.
                        </Typography>

                        <Typography variant="h5">
                            ??Qu?? es un API?
                        </Typography>
                        <Typography paragraph>
                            Un API (<i>???Application Programming Interface???</i> en ingl??s) es un conjunto de reglas que las aplicaciones deben seguir para comunicarse entre ellas, sirviendo de interfaz de comunicaci??n entre componentes de software. En el contexto de la presente gu??a, el uso de APIs tiene el objetivo de permitir la comunicaci??n entre la Plataforma Digital Nacional (Sistema de la SESNA) y los diversos sistemas de informaci??n de las instituciones obligadas a proveer datos anticorrupci??n.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            ??La Secretar??a Ejecutiva del Sistema Nacional Anticorrupci??n establecer?? c??mo desarrollar las Plataformas Estatales?
                        </Typography>

                        <Typography paragraph>
                            La facultad de dise??ar y desarrollar las Plataformas estatales es de cada entidad, siempre y cuando se cumpla con la normatividad que est?? establecida en las Bases para el funcionamiento de la Plataforma Digital Nacional y los lineamientos que ser??n publicados para la estandarizaci??n y distribuci??n de datos para cada Sistema.
                        </Typography>

                        <Typography paragraph>
                            Las Bases fueron aprobadas por el Comit?? Coordinador del Sistema Nacional Anticorrupci??n, y estipulan que la Secretar??a Ejecutiva emitir?? los protocolos, est??ndares, reglamentos, especificaciones t??cnicas y cualquier normativa necesaria para la colaboraci??n, provisi??n de datos y acciones para cumplir con las Bases.
                        </Typography>



                        <Typography paragraph>
                            Revisar las especificaciones t??cnicas publicadas en la versi??n Alfa de la PDN:
                        </Typography>
                        <ul className={classes.ul}>
                            <li className={classes.li}>
                                <Link to="/declaraciones/especificaciones" className={classes.link}>
                                    Sistema 1
                                </Link>
                            </li>
                            <li className={classes.li}>
                                 <Link to="/intervienen/especificaciones" className={classes.link}>
                                    Sistema 2
                                </Link>
                            </li>
                            <li className={classes.li}>
                                <Link to="/sancionados/especificaciones" className={classes.link}>
                                    Sistema 3
                                </Link>
                            </li>
                        </ul>
                        <Typography paragraph>
                            En el siguiente enlace, encontrar??s una presentaci??n que describe nuestra visi??n sobre el desarrollo tecnol??gico de las Plataformas y Sistemas Estatales.
                        </Typography>
                        <Button target="_blank" className={classes.button} variant="contained" href="https://drive.google.com/file/d/1xYlY50lXttiuu0brV5CVd5H8qx96vDsK/view">
                            Gu??a desarrollo PDE
                        </Button>
                        <Typography variant="h5" paragraph>
                            ??Las Plataformas Digitales van a operar ahora sistemas como CompraNet o Declaranet?
                        </Typography>
                        <Typography paragraph>
                            No. Las Plataformas ser??n una herramienta de interoperabilidad que a trav??s de las estandarizaci??n de la informaci??n ser??n capaces de consultar los datos que contienen sistemas como CompraNet o Declaranet.
                        </Typography>

                        <Typography paragraph>
                            La generaci??n de los datos desde sistemas como CompraNet o Declaranet  seguir?? siendo responsabilidad de los entes que tienen la atribuci??n actualmente.
                        </Typography>

                        <Typography paragraph variant="h5">
                            ??Qu?? papel juegan las entidades federativas?
                        </Typography>
                        <Typography>
                            Cada una de las 32 entidades federativas debe contar con su propio Sistema Local Anticorrupci??n y su propia ley que motive la conexi??n de sus datos con la PDN. Es necesario que las secretar??as ejecutivas establezcan canales de comunicaci??n con las secretar??as o instancias encargadas del control interno y con las autoridades locales competentes en el combate a la corrupci??n para desarrollar sistemas de informaci??n o plataformas estatales de interoperabilidad.
                        </Typography>


                        <Typography paragraph variant="h5">??Cu??ndo entran en vigor los nuevos formatos para las declaraciones patrimonial y de intereses?</Typography>

                        <Typography paragraph>Los formatos publicados en el Diario Oficial de la Federaci??n (DOF) el 16 de noviembre del 2018 se encuentran en un proceso de revisi??n por parte de las autoridades del Comit?? Coordinador del SIstema Nacional Anticorrupci??n.  Por lo anterior, se modific?? el Art??culo Segundo Transitorio del <MuiLink href="https://www.dof.gob.mx/nota_detalle.php?codigo=5557896&fecha=16/04/2019">???Acuerdo por el que se modifica el art??culo Segundo Transitorio del ???Acuerdo por el que el Comit?? Coordinador del Sistema Nacional Anticorrupci??n emite el formato de declaraciones: de situaci??n patrimonial y de intereses; y expide las normas e instructivo para su llenado y presentaci??n???</MuiLink>; quedando de la siguiente manera:</Typography>

                        <Typography paragraph>
                            <i>???SEGUNDO. Se determina que los formatos aprobados mediante el presente Acuerdo, ser??n obligatorios para los Servidores P??blicos al momento de presentar sus declaraciones de situaci??n patrimonial y de intereses, una vez que se encuentren debidamente integrados y correctamente segmentados, est??n plenamente adecuados a las directrices establecidas en el marco jur??dico aplicable y se garantice la interoperabilidad con el sistema de evoluci??n patrimonial y de declaraci??n de intereses de la Plataforma Digital Nacional, a que hace referencia la fracci??n I del art??culo 49 de la Ley General del Sistema Nacional Anticorrupci??n, situaci??n que ser?? formalmente informada a los involucrados mediante el Acuerdo correspondiente que, para tal efecto, emita el Comit?? Coordinador del Sistema Nacional Anticorrupci??n y publique en el Diario Oficial de la Federaci??n para su aplicaci??n y observancia obligatoria, lo que no podr?? exceder del 31 de diciembre de 2019"
                            </i>
                        </Typography>

                        <Typography paragraph>Bajo ese contexto y en observancia al art??culo Tercero Transitorio del Acuerdo por el que el Comit?? Coordinador del Sistema Nacional Anticorrupci??n emite el formato de declaraciones: de situaci??n patrimonial y de intereses; y expide las normas e instructivo para su llenado y presentaci??n???, publicado en el Diario Oficial de la Federaci??n el d??a 16 de noviembre del a??o 2018, los Servidores P??blicos de todos los ??rdenes de gobierno que deban presentar sus declaraciones de situaci??n patrimonial, inicial o de conclusi??n, utilizar??n los formatos y la normatividad que se encuentren vigentes, utilizables y a trav??s de las plataformas o medios operables al d??a en que se genere la obligaci??n de presentar la declaraci??n que corresponda.</Typography>

                        <Typography paragraph>Lo anterior se mantendr?? vigente hasta en tanto el Comit?? Coordinador concluya el an??lisis correspondiente al Formato, lo cual se dar?? a conocer mediante el Acuerdo correspondiente.</Typography>






                        <Typography paragraph variant="h5">
                            ??C??mo se va a trabajar en la seguridad e integridad de los datos?
                        </Typography>
                        <Typography paragraph>
                            Se utilizar??n herramientas de autentificaci??n que contemplar??n los roles y permisos, por ejemplo: SSL, OAuth, eFirma; estas herramientas permitir??n mantener la trazabilidad de las consultas de datos que se hagan dentro de las plataformas, garantizando el acceso seguro a los datos.
                        </Typography>







                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
                    <Typography>Preguntas frecuentes - datos</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>


                        <Typography paragraph variant="h5">
                            ??Qu?? hace la PDN y qu?? suceder?? con los datos?
                        </Typography>
                        <Typography paragraph>
                            La PDN consultar?? a trav??s de APIs (medios tecnol??gicos para comunicar diversos sistemas) los datos que las instituciones p??blicas ya generan y los ordenar?? conforme a est??ndares que se??ale la SESNA. As??, las instituciones seguir??n generando, controlando y siendo responsables de sus datos, pero ahora ser??n interoperables y comparables para generar inteligencia anticorrupci??n.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            ??La Plataforma Digital Nacional (PDN) va a generar informaci??n?
                        </Typography>
                        <Typography paragraph>
                            No. El objetivo de la Plataforma es generar interoperabilidad entre los datos que ya generan actualmente los entes obligados, a trav??s del uso de est??ndares comunes.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            ??La PDN se va a quedar con los datos generados por las instituciones?
                        </Typography>
                        <Typography paragraph>
                            No. Las Instituciones son las responsables de los datos que generan, y a partir de la publicaci??n de los lineamientos de cada Sistema, deber??n estandarizarlos de acuerdo a lo solicitado por la SESNA a trav??s del Comit?? Coordinador del SNA.
                        </Typography>
                        <Typography variant="h5" paragraph>
                            ??Se van a compartir los datos reservados o personales?
                        </Typography>
                        <Typography paragraph>
                            No.
                            Los integrantes del Sistema Nacional y de los Sistemas Locales promover??n la publicaci??n de la informaci??n contenida en la plataforma en formato de datos abiertos, conforme a la Ley General de Transparencia y Acceso a la Informaci??n P??blica y la dem??s normatividad aplicable (Art??culo 50 LGSNA).
                        </Typography>

                        <Typography paragraph variant="h5">
                            ??Qui??n va a poder acceder a la PDN?
                        </Typography>

                        <Typography paragraph>
                            El componente p??blico de la PDN ser?? para consulta de cualquier ciudadano, y dar?? acceso a los datos que tienen car??cter p??blico, de acuerdo a la Ley General de Transparencia y Acceso a la Informaci??n.
                        </Typography>

                        <Typography paragraph>
                            El componente privado tendr?? un acceso restringido que ser?? determinado por el Comit?? Coordinador del SNA, quien tendr?? la responsabilidad de aprobar el cat??logo de perfiles y funcionarios que tendr??n acceso a los datos reservados.
                        </Typography>
                        <Typography paragraph>
                            Los diferentes niveles de acceso a la Plataforma se definir??n conforme a los derechos, atribuciones y competencias de cada usuario, conforme a la normativa aplicable a cada uno de los sistemas (Art??culo 17, BFPDN).
                        </Typography>
                        <Typography paragraph>
                            La Secretar??a Ejecutiva elaborar?? y publicar?? un cat??logo de perfiles, en el cual se establezcan las facultades,obligaciones, y/o atribuciones que les sean aplicables a cada uno de los usuarios de manera gen??rica (Art??culo 18, BFPDN)
                        </Typography>



                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <ExpansionPanelSummary aria-controls="panel9d-content" id="panel9d-header">
                    <Typography>Protocolo de conexi??n</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>
                        <Typography paragraph color="textPrimary">
                            La Plataforma Digital Nacional (PDN) basa su funcionamiento en el uso de APIs, por medio de las cuales, se comunica con sus proveedores de
                            informaci??n para obtener exclusivamente los datos necesarios.
                        </Typography>
                        <Typography paragraph color="textPrimary">
                            Los proveedores de informaci??n son los responsables de formalizar y finalizar el proceso de conexi??n,
                            el cual debe de garantizar un correcto funcionamiento y un adecuado nivel de servicio de las APIs.
                        </Typography>
                        <Typography paragraph color="textPrimary">
                            Para lograr la conexi??n con la PDN, se ha dise??ado un protocolo de conexi??n, que consiste en la ejecuci??n de conjuntos de pruebas para cada Sistema de la plataforma, mismos que se dividen en tres categor??as:
                            <ul>
                                <li>Pruebas de seguridad;</li>
                                <li>Pruebas funcionales; y</li>
                                <li>Pruebas de estr??s.</li>
                            </ul>
                        </Typography>
                        <Typography paragraph color="textPrimary">
                            Estas pruebas se ejecutan en dos ambientes: 1) desarrollo y 2) productivo. En cada uno el equipo de la PDN verificar?? el funcionamiento de la API que corresponda.
                            Para llevar a cabo la verificaci??n, se utiliza el <b>Plan de pruebas</b> que podr??s encontrar en la secci??n de <Link to="/especificaciones" className={classes.link}><Typography component={'span'}>Especificaciones</Typography></Link> de cada uno de los sistemas.
                            <ol>
                                <li><b>Ambiente de desarrollo</b>: deber??n utilizar <b>datos sint??ticos</b> para verificar completamente la funcionalidad, los mecanismos de seguridad y la estructura de los datos.</li>
                                <li><b>Ambiente productivo</b>: se requiere contar con los <b>datos reales</b> que ser??n suministrados a la Plataforma, omitiendo en esta etapa datos de car??cter reservado, ya que es la fase previa a la comunicaci??n final con la PDN.</li>
                            </ol>
                        </Typography>

                        <Typography paragraph color="textPrimary">
                            Es necesario contar con la <b>aprobaci??n</b> de las pruebas en el ambiente de desarrollo para continuar con el ambiente productivo, es decir, todos los casos de pruebas deben resultar exitosos. En caso de que las pruebas no lo sean, se le notificar?? al proveedor de informaci??n a trav??s de correo
                            electr??nico para que realice los ajustes necesarios y solicite una nueva revisi??n al equipo de la PDN
                        </Typography>
                        <Typography paragraph color="textPrimary">
                            Para iniciar el proceso o protocolo de conexi??n, es necesario llenar el formato de <b>Solicitud de conexi??n</b> correctamente y enviarlo al correo electr??nico: pdn@sesna.gob.mx.
                        </Typography>
                        <Typography paragraph color="textPrimary">
                            Adicionalmente, ponemos a disposici??n un <Link to="/validador" className={classes.link}><Typography component={'span'}>Validador </Typography></Link>
                            que sirve de apoyo para la validaci??n del cumplimiento de los esquemas de datos de las diferentes API's.
                        </Typography>

                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <ExpansionPanelSummary aria-controls="panel8d-content" id="panel8d-header">
                    <Typography>Sistema de declaraci??n patrimonial y de intereses</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>

                        <Typography paragraph color="textPrimary">
                            Haz click en el bot??n que aparece a continuaci??n para visualizar un documento que <b>contienene informaci??n relevante para</b> los equipos
                            encargados de desarrollar la <b>interconexi??n de su sistema de declaraciones</b> con la
                            Plataforma Digital Nacional.
                        </Typography>

                        <Button variant="contained" className={classes.button} target="_blank" href="https://drive.google.com/file/d/1wHQpaFdP5An8V4Vhnjj1a4GBbYIREMHo/view?usp=sharing">
                            M??s informaci??n
                        </Button>

                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <ExpansionPanelSummary aria-controls="panel10d-content" id="panel10d-header">
                    <Typography>Contactanos</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div>

                        <Typography paragraph>
                            Escribenos si tienes dudas sobre la construcci??n de la PDN.
                        </Typography>
                        <Typography>
                            pdn<Icon style={{fontSize:12}}>alternate_email</Icon>sesna.gob.mx
                        </Typography>

                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}

import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles(theme => ({
    root: {
        //display: 'flex',
        //flexWrap: 'wrap',
        flexGrow: 1,
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CustomizedSelect(props) {
    const classes = useStyles();
    //const [age, setAge] = React.useState('');
    const handleChange = event => {
        //etAge(event.target.value);
        props.handleSelectDonutData(event.target.value);
    };
    return (
        <form className={classes.root} autoComplete="off">
            <FormControl className={classes.margin} fullWidth>
                <InputLabel htmlFor="age-customized-native-simple">Contrataciones</InputLabel>
                <Select
                    value={props.dataType}
                    onChange={handleChange}
                    input={<BootstrapInput name="age" id="age-customized-native-simple" />}
                >
                    <MenuItem value={"amounts"}>Gasto ejercido</MenuItem>
                    <MenuItem value={"counts"}>Número de contrataciones</MenuItem>
                </Select>
            </FormControl>
        </form>
    );
}

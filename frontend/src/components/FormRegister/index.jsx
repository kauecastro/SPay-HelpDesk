import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    paper: {
        paddingTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function FormRegister(props) {
    const [titulo, setTitulo] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [descricao, setDescricao] = React.useState('');
    const [status, setStatus] = React.useState('');

    React.useEffect(() => {
        if (props.itemEditable && props.canEdit) {
            setTitulo(props.itemEditable.titulo);
            setEmail(props.itemEditable.email);
            setDescricao(props.itemEditable.descricao);
            setStatus(props.itemEditable.status);
        }
    }, props.itemEditable);

    const classes = useStyles();

    const disabled = titulo && email && descricao;

    const verifyForm = () => {
        props.sendForm({ email, titulo, descricao, update: props.canEdit })
        setTitulo('');
        setEmail('');
        setDescricao('');
    }

    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    {props.canEdit ? 'Editar chamado' : 'Registrar novo chamado'}
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                autoFocus
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="titulo"
                                variant="outlined"
                                required
                                fullWidth
                                id="titulo"
                                label="Titulo"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-multiline-static"
                                fullWidth
                                variant="outlined"
                                label="Descrição do chamado"
                                required
                                multiline
                                rows="4"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </Grid>
                        {props.canEdit ? (
                            <Grid item xs={12}>
                                <FormControl style={{ width: '100%' }}>
                                    <InputLabel id="status-label">Status</InputLabel>
                                    <Select
                                        labelId="status-label"
                                        id="status"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <MenuItem value={1}>Nova solicitação</MenuItem>
                                        <MenuItem value={2}>Em atendimento</MenuItem>
                                        <MenuItem value={3}>Pendente</MenuItem>
                                        <MenuItem value={4}>Finalizado</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        ) : null}
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={!disabled}
                        className={classes.submit}
                        onClick={() => verifyForm()}
                    >
                        {props.canEdit ? 'Editar' : 'Registrar'}
                    </Button>
                </form>
            </div>
        </Container>
    );
}
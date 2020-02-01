import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const status = {
    1: 'Nova solicitação',
    2: 'Em atendimento',
    3: 'Pendente',
    4: 'Finalizado'
}

export default function SimpleTable(props) {
    const classes = useStyles();

    const deleteItem = (idRequest) => {
        props.deleteItem(idRequest);
    };

    const updateItem = (idRequest) => {
        props.updateItem(idRequest);
    };

    return (
        <>
            <Typography component="h2" variant="h5" style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
                Histórico de chamados
            </Typography>
            <TableContainer component={Paper}>
                <Table stickyHeader className={classes.table} aria-label="sticky table">
                    {props.rows && props.rows.length === 0 ?
                        <caption>Nenhum chamado registrado</caption> : null}
                    <TableHead>
                        <TableRow>
                            <TableCell>Chamado</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Editar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows && props.rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell>{row._id}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{status[row.requestStatus]}</TableCell>
                                <TableCell align="right">
                                    <Tooltip title="Editar">
                                        <IconButton aria-label="delete" onClick={() => updateItem(row._id)}>
                                            <Icon>edit</Icon>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Deletar">
                                        <IconButton aria-label="delete" onClick={() => deleteItem(row._id)}>
                                            <Icon>delete</Icon>
                                        </IconButton>
                                    </Tooltip>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
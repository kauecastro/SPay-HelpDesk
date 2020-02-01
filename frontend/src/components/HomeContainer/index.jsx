import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import TableRegister from '../TableRegister';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormRegister from '../FormRegister';

const HomeContainer = () => {
    const [rows, setRows] = React.useState([]);
    const [loadingList, setLoadingList] = React.useState(false);
    const [canEdit, setCanEdit] = React.useState(false);
    const [editItem, setEditableItem] = React.useState();
    const [successMessage, setSuccessMessage] = React.useState();

    const [open, setOpen] = React.useState(false);

    const getAllRequests = () => {
        setLoadingList(true);
        axios.get(`http://docker-node-backend:8883/requests/`)
            .then(res => {
                setRows(res.data.data);
                setLoadingList(false);
            });
    }

    const createRequest = (req) => {
        axios.post(`http://docker-node-backend:8883/requests/`, {
            email: req.email,
            title: req.titulo,
            body: req.descricao,
            requestStatus: 1
        })
            .then(res => {
                setSuccessMessage("Chamado registrado com sucesso!");
                getAllRequests();
            })
            .catch(err => {
                setSuccessMessage("Erro ao criar solicitação!");
                setOpen(true);
            });
    }

    const updateRequest = (req) => {
        setLoadingList(true);
        axios.put(`http://docker-node-backend:8883/requests/${req.id}`, {
            email: req.email,
            title: req.titulo,
            body: req.descricao,
            requestStatus: req.status
        })
            .then(res => {
                setSuccessMessage("Chamado atualizado com sucesso!");
                getAllRequests();
                setLoadingList(false);
            })
            .catch(err => {
                setSuccessMessage("Erro ao atualizar chamado!");
                setOpen(true);
            });
    }

    useEffect(() => {
        getAllRequests();
        return () => {
            setRows([]);
        }
    }, []);

    const handleForm = (form) => {
        if (form.update) {
            updateRequest(form);
        } else {
            createRequest(form);
        }
        setEditableItem(null);
        setCanEdit(false);
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const deleteItem = (id) => {
        setLoadingList(true);
        axios.delete(`http://docker-node-backend:8883/requests/${id}`)
            .then(res => {
                setLoadingList(false);
                setSuccessMessage("Chamado deletado com sucesso!");
                setOpen(true);
                getAllRequests();
            })
            .catch(err => {
                setSuccessMessage("Erro ao excluir chamado!");
                setOpen(true);
            });
    };

    const updateItem = (id) => {
        setLoadingList(true);
        axios.get(`http://docker-node-backend:8883/requests/${id}`)
            .then(res => {
                const { _id, email, title, requestStatus, body } = res.data.data[0];
                setLoadingList(false);

                setEditableItem({
                    id: _id, email, titulo: title, status: requestStatus, descricao: body
                })
                setCanEdit(true);
            });
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: '#eee', height: 'auto', paddingBottom: '2rem' }}>
                    <FormRegister sendForm={handleForm} itemEditable={editItem} canEdit={canEdit} />

                    {loadingList ? (
                        <Container maxWidth="xs" style={{ textAlign: 'center' }}>
                            <CircularProgress />
                        </Container>
                    ) : (
                            <Container maxWidth="md">
                                <TableRegister rows={rows} deleteItem={deleteItem} updateItem={updateItem} />
                            </Container>
                        )}
                </Typography>
            </Container>

            <Snackbar open={open} autoHideDuration={3000} message={successMessage} onClose={handleClose} />
        </React.Fragment>
    );

};

export default HomeContainer;

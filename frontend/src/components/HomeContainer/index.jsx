import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormRegister from '../FormRegister';
import Snackbar from '@material-ui/core/Snackbar';
import TableRegister from '../TableRegister';

function createData(id, email, titulo, status) {
    return { id, email, titulo, status };
}

const rows = [
    createData(1321, 'teste', 'Rodrigo', 1),
    createData(4833, 'teste 2', 'Rodrigo', 2),
    createData(8549, 'teste 3', 'Rodrigo', 3),
    createData(3213, 'teste 4', 'Rodrigo', 4),
];

const HomeContainer = () => {
    const [canEdit, setCanEdit] = React.useState(false);
    const [editItem, setEditableItem] = React.useState();
    const [successMessage, setSuccessMessage] = React.useState();

    const [open, setOpen] = React.useState(false);

    const handleForm = (form) => {
        if (form.update) {
            setSuccessMessage("Chamado atualizado com sucesso!");
        } else {
            setSuccessMessage("Chamado registrado com sucesso!");
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
        setEditableItem(null);
        setSuccessMessage("Chamado deletado com sucesso!");
        setOpen(true);
    };

    const updateItem = (id) => {
        setCanEdit(true);
        setEditableItem({
            id, email: 'teste', titulo: 'Rodrigo', status: 3, descricao: 'Teste teste'
        })
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: '#eee', height: 'auto', paddingBottom: '2rem' }}>
                    <FormRegister sendForm={handleForm} itemEditable={editItem} canEdit={canEdit} />

                    <Container maxWidth="md">
                        <TableRegister rows={rows} deleteItem={deleteItem} updateItem={updateItem} />
                    </Container>
                </Typography>
            </Container>

            <Snackbar open={open} autoHideDuration={3000} message={successMessage} onClose={handleClose} />
        </React.Fragment>
    );

};

export default HomeContainer;

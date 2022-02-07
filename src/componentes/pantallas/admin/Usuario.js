import { Button, Container, Icon, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../../theme/useStyles';

const Usuario = (props) => {
    const classes = useStyles();

    const editaUsuario = () => {
        const id = "e140a9b1-87f1-4a4a-b22c-672fe3e3c588";
        props.history.push("/admin/usuario/" + id);
    }


    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                USUARIOS
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>USUARIO</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell>ADMIN</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>c1259807-d8b6-409a-8f45-22d08e2e4161</TableCell>
                            <TableCell>Jhon Peralta</TableCell>
                            <TableCell>jhon@gmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconDelivered}>
                                    check
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={editaUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button variant="contained" color="secundary">
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                        
                        <TableRow>
                            <TableCell>e140a9b1-87f1-4a4a-b22c-672fe3e3c588</TableCell>
                            <TableCell>Nestor Arcila</TableCell>
                            <TableCell>nestor@gmail.com</TableCell>
                            <TableCell>
                                <Icon className={classes.iconNotDelivered}>
                                    clear
                                </Icon>
                            </TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" onClick={editaUsuario}>
                                    <Icon>edit</Icon>
                                </Button>
                                <Button variant="contained" color="secundary">
                                    <Icon>delete</Icon>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Usuario;
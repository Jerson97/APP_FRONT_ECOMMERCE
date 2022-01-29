import { Button, CardMedia, Container, Grid, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../../theme/useStyles';

const DetalleProducto = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containermt}>
            <Typography variant="h4" className={classes.text_title}>
                ABRIGO DC
            </Typography>
            <Grid container spacing={4}>
                <Grid item lg={8} md={8} xs={12}>
                    <Paper variant="outlined" square className={classes.PaperImg}>
                        <CardMedia
                        className={classes.mediaDetalle}
                        image="https://newathletic.vteximg.com.br/arquivos/ids/159584-1000-1000/NK8006B.jpg?v=637559958910930000"
                        title="Mi producto"
                        />
                    </Paper>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                    <TableContainer component={Paper} variant="outlined">
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Precio</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2">$25.99</Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="subtitle2">Cantidad</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <TextField size="small" select variant="outlined">
                                            <MenuItem value={1}>1</MenuItem>
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={3}>3</MenuItem>
                                        </TextField>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <Button variant="contained" color="primary" size="large">
                                            Agregar a Carrito
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Precio: $25.99
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Unidades Disponibles: 15
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Marca: DC
                            </Typography>
                            <Typography className={classes.text_detalle}>
                                Temporada: Invierno
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography className={classes.text_detalle}>
                                Descripcion: 
                            </Typography>
                            <Typography className={classes.text_detalle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, voluptates ducimus impedit dolores voluptas quis maiores cupiditate? Fugit nam at, architecto maiores tempora eligendi ipsa voluptatibus iste optio eaque accusamus.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DetalleProducto;